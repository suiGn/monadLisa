//index.js
/*
🅜🅞🅝🅐🅓🅛🅘🅢🅐
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ
🆂🆄🅸🅶🅽                                                                                                                                         
*/
import 'dotenv/config';
//utils
//start NetGet
import NetGet  from 'netget';
const gateway = new NetGet.Gateway({
  port: process.env.GATEWAY_PORT,
  domainsConfigPath: process.env.DOMAINS_CONFIG_PATH
});
gateway.listen();
console.log("process.env.DB_HOST: " + process.env.DB_HOST);
console.log("process.env.DB_PORT: " + process.env.DB_PORT);
console.log("process.env.NETGET_PORT: " + process.env.NETGET_PORT);
console.log("process.env.DOMAINS_CONFIG_PATH: " + process.env.DOMAINS_CONFIG_PATH);



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
import vpath from 'v.path'; // Adjust the path based on your project structure
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


console.log("End of monadLisa index.js read.");





/*
git submodule add https://github.com/suiGn/Caelestibus workspaces/apps/Caelestibus
git submodule add https://github.com/suiGn/cleaker.me workspaces/apps/cleaker.me
git submodule add https://github.com/suiGn/i.mlearning.me workspaces/apps/i.mlearning.me
git submodule add https://github.com/suiGn/mdrn workspaces/apps/mdrn
git submodule add https://github.com/suiGn/mexicoEncuesta workspaces/apps/mexicoEncuesta
git submodule add https://github.com/suiGn/OrgBoat workspaces/apps/OrgBoat
*/