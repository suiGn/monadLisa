//index.js
/*
🅜🅞🅝🅐🅓🅛🅘🅢🅐
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ
🆂🆄🅸🅶🅽                                                                                                                                         
*/
import 'dotenv/config';
//utils
// Configure your gateway instance
//start NetGet
import NetGet  from 'netget';
const gateway = new NetGet.Gateway({
  port: process.env.GATEWAY_PORT,
  domainsConfigPath: process.env.DOMAINS_CONFIG_PATH
});

gateway.listen();
console.log("ooooo000000-----" + process.env.GATEWAY_PORT);
//all.this Data Structures.
import thisAudio from 'this.audio';
import thisDOM from 'this.dom';
import thisGUI from 'this.gui';
import thisImg from 'this.img';
import thisWallet from 'this.wallet';

//import this.me for user authentication
import Me from 'this.me';
// Usage
const meInfo = {
  name: 'Alice',
  dob: '1990-01-01',
  city: 'Wonderland',
  gender: 'Female',
  bio: 'Loves adventures',
  password: 'securePassword123', // Example, ensure you handle passwords securely
  pin: '1234' // Example, ensure you handle PINs securely
};

const me = new Me(meInfo);
/*import vpath from 'v.path'; // Adjust the path based on your project structure
//import Me from "this.me";
//import cleaker from "cleaker";
//import neurons from 'neurons.me';
//import imLearning from 'i.mlearning';
//import pixelgrid from 'this.pixelgrid';
//Plug in to LisaMemory
const dbPool = vpath.createPool(
  process.env.DB_HOST,
  parseInt(process.env.DB_PORT, 10),
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_NAME
);
*/

