import inquirer from 'inquirer';
import path from 'path';
import os from 'os';
import fs from 'fs';
import Me from 'this.me';

/***Interactive Shell:
 * Leverages the `inquirer` package to provide an interactive shell experience with prompts.
 * The `main` function orchestrates the CLI interactions.
 */

/** 
 * View Existing Profiles, Create New Profile, Exit.
 * @returns {Promise<string>} The user's choice. 
 */
async function selectMe() {
    const choices = ['View Existing Profiles', 'Create New Profile', 'Exit'];
    const answer = await inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: choices
    }]);
    return answer.action;
  }
  
  /**
  * Prompts the user for details to create a new profile.
  * @returns {Promise<Me>} The new Me object with user details.
  */
  async function createMe() {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your first name?',
            // Add validation as needed
        },
        {
            type: 'input',
            name: 'lastname',
            message: 'What is your last name?',
            // Add validation as needed
        },
        {
          type: 'input',
          name: 'birthday',
          message: 'What is your birthday? (YYYY-MM-DD)',
          validate: function(value) {
              const pass = value.match(
                  /^\d{4}-\d{2}-\d{2}$/
              );
              if (pass) {
                  return true;
              }
              return 'Please enter a valid date (YYYY-MM-DD)';
          }
        },
        {
            type: 'password',
            name: 'password',
            message: 'Choose a password:',
            // Add validation as needed
        },
        {
            type: 'input',
            name: 'pin',
            message: 'Choose a PIN:',
            // Add validation as needed
        },
        // ... Add more questions as needed
    ];
    const userDetails = await inquirer.prompt(questions);
    return new Me(
        userDetails.name, 
        userDetails.lastname, 
        userDetails.birthday,
        userDetails.password, 
        userDetails.pin
    );
  }
  
  /**
  * Writes the .me object to the filesystem.
  * @param {Me} meProfile - The Me object to be saved.
  */
  function writeMe(meProfile) {
    const meDirectory = path.join(os.homedir(), '.me');
    if (!fs.existsSync(meDirectory)) {
        fs.mkdirSync(meDirectory, { recursive: true });
    }
    
    const filePath = path.join(meDirectory, `${meProfile.name}.me`);
    // Encrypting the data here before writing to the filesystem
    //fs.writeFileSync(filePath, JSON.stringify(meProfile.getIdentityObject()));
    //console.log('Profile created successfully.');
    fs.writeFileSync(filePath, JSON.stringify(meProfile.getMe()));
      console.log('Profile created successfully.');
  }
  
  /**
   * Lists all the .me profile file paths in the user's .me directory.
   * @returns {string[]} An array of full file paths for each .me profile.
   */
  function listMeProfiles() {
    const meDirectory = path.join(os.homedir(), '.me');
    if (fs.existsSync(meDirectory)) {
        const profileFiles = fs.readdirSync(meDirectory)
            .filter(file => file.endsWith('.me'));
        return profileFiles.map(file => path.join(meDirectory, file));
    } else {
        console.log('No profiles found.');
        return [];
    }
  }

  /**
 * Asks the user to verify their PIN.
 * @param {Object} profile - The user's profile object containing their data, including the PIN.
 * @returns {Promise<boolean>} Returns true if the PIN is correct, false otherwise.
 */
  async function verifyPin(profile) {
    const answer = await inquirer.prompt([{
        type: 'password',
        name: 'pin',
        message: 'Enter your PIN to proceed:',
    }]);

    if (answer.pin === profile.pin) {
        // Correct PIN
        console.log('Profile Data:', profile);
        console.log(`Welcome ${profile.name}!`);
        return true;
    } else {
        // Incorrect PIN
        console.log('Incorrect PIN. Please try again.');
        return false;
    }
}
  
 /**
 * Allows the user to select a .me profile from a list or go back to the main menu.
 * After selecting a profile, the user is asked to verify their PIN.
 * @returns {Promise<Object|string>} Returns the selected profile object upon successful PIN verification, or 'back' to indicate returning to the main menu.
 */
async function selectProfile() {
    const profiles = listMeProfiles();
    if (profiles.length === 0) {
        console.log('No profiles found.');
        return 'back';
    }

    const choices = profiles.map(file => ({
        name: path.basename(file, '.me'),
        value: file
    })).concat([{ name: 'Go Back to Main Menu', value: 'back' }]);

    const answer = await inquirer.prompt([{
        type: 'list',
        name: 'selectedProfile',
        message: 'Select a profile to view or go back:',
        choices: choices
    }]);

    if (answer.selectedProfile === 'back') {
        return 'back';
    } else {
        const profileData = fs.readFileSync(answer.selectedProfile, 'utf8');
        const profile = JSON.parse(profileData);

        let pinVerified = false;
        while (!pinVerified) {
            pinVerified = await verifyPin(profile);
        }
        
        // After successful PIN verification, proceed to a different section of the CLI.
        // ... Transition to different CLI section logic goes here ...

        return profile; // Return the profile data for further processing if needed.
    }
}


export const shell = {
    selectMe,
    createMe,
    writeMe,
    listMeProfiles,
    selectProfile,
  };