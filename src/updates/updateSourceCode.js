import { exec } from 'child_process';
import { promisify } from 'util';

// Promisify exec for use with async/await
const execShellCommand = promisify(exec);

// Main function to update submodules and push changes
const updateSubmodules = async () => {
    try {
        console.log("Clean untracked files in each submodule");
        await execShellCommand("git submodule foreach 'git clean -fdx -e .gitignore'");

        console.log("Checkout main branch and pull latest changes for each submodule");
        await execShellCommand("git submodule foreach 'git checkout main; git pull origin main'");

        console.log("Update submodules configuration to track the main branch");
        await execShellCommand("git submodule foreach 'git config -f $toplevel/.gitmodules submodule.$name.branch main'");

        console.log("Update submodules to the latest commit on the main branch");
        await execShellCommand("git submodule update --remote --merge");

        console.log("Stage submodule changes");
        await execShellCommand("git add -A");

        console.log("Add and commit the changes in the main repository");
        await execShellCommand("git commit -m 'Update submodules to track the main branch'");
        await execShellCommand("git push origin main");

        console.log("Submodules updated and changes pushed successfully.");
    } catch (error) {
        console.error("An error occurred during the update process:", error);
    }
};

// Run the update script
updateSubmodules();
