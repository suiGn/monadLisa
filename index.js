                 /* 
🅜🅞🅝🅐🅓🅛🅘🅢🅐 /
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ
🆂🆄🅸🅶🅽     / 
index.js   */
import 'dotenv/config';
import Me from 'this.me';
let pathToMe = './ME';  //Path to the ME directory within MonadLisa
let Lisa = new Me();
import neurons from 'neurons.me';
//Monads
// Assuming MonadOpenAI has been published and is importable
//import Monad from 'monads.openai';
//const monad = new Monad(process.env.OPENAI_API_KEY, process.env.OPENAI_ASSISTANT_ID);
// NETGET
import NetGet from 'netget';
import { routes } from './GET/routes.js';
let netget = new NetGet();
netget.Gateway({ routes: routes }).listen();
// ------------ //

// --- v.path ------ 
import vpath from 'v.path';
// Configuration for the global database pool

// Configuration for the local database pool
const localDbPool = vpath.createPool(
  process.env.LOCAL_DB_HOST,
  parseInt(process.env.LOCAL_DB_PORT, 10),
  process.env.LOCAL_DB_USER,
  process.env.LOCAL_DB_PASSWORD,
  process.env.DB_NAME
);

const vault = new vpath.TheVault();
//console.log(vault);

//import cleaker from "cleaker";
//import imLearning from 'i.mlearning';
//import pixelgrid from 'this.pixelgrid';
//all.this Data Structures.
//import thisAudio from 'this.audio';
//import thisDOM from 'this.dom';
//import thisGUI from 'this.gui';
/*THISIMG*/
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
console.log("index.js endLine 1");



