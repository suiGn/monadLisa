/* 
🅜🅞🅝🅐🅓🅛🅘🅢🅐 /
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ
🆂🆄🅸🅶🅽     / 
index.js   */
import 'dotenv/config';
import chalk from 'chalk';
import Me from '../all.this/workspaces/this.me/index.js';
let me = new Me("Lisa");
//Me is an instance of an Identity.
function createUser(username) {
  try {
    let user = new Me(username);
    console.log('Hello, I am', user);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
//I am, therefore I exist.
console.log('Hello, I am', me);
console.log(chalk.bold('Who are you?'));
let user = "suign";
createUser(user);
//import cleaker from "cleaker";
//cleaker(me);

/* NETGET
import NetGet from 'netget';
import { routes } from './GET/routes.js';
let netget = new NetGet();
netget.Gateway({ routes: routes }).listen();
*/
// ------------ //
// --- v.path ------ 
import vpath from 'v.path';
// Configuration for the global database pool
const localDbPool = vpath.createPool(
  process.env.LOCAL_DB_HOST,
  parseInt(process.env.LOCAL_DB_PORT, 10),
  process.env.LOCAL_DB_USER,
  process.env.LOCAL_DB_PASSWORD,
  process.env.DB_NAME
);

//const vault = new vpath.TheVault();
//console.log(vault);*/

//Monads
import GPT from 'monads.ai';
//import imLearning from 'i.mlearning';
//import pixelgrid from 'this.pixelgrid';
//all.this Data Structures.
//import thisAudio from 'this.audio';
//import thisDOM from 'this.dom';
//import thisGUI from 'this.gui';
/*THISIMG
import thisImg from 'this.img'; 
const imagePath = './_._.svg';
const options = {
  width: 100,
  height: 100,
  channels: 3,
  returnFileType: 'jpeg'
};
let img;
// Use a high-resolution grayscale preset
thisImg(imagePath, options)
  .then(result => {
    img = result;
  })
  .catch(error => {
    console.error('Error processing image:', error);
  });
//*/  

//import thisWallet from 'this.wallet';
console.log("monadlisa/index.js endLine 1");



