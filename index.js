                 /* 
🅜🅞🅝🅐🅓🅛🅘🅢🅐 /
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ
🆂🆄🅸🅶🅽     / 
index.js   */
import 'dotenv/config';
import Me from 'this.me';
let me = new Me();
import neurons from 'neurons.me';
import NetGet from 'netget';
let netget = new NetGet();
netget.Gateway().listen();
import vpath from 'v.path';
const dbPool = vpath.createPool(
  process.env.DB_HOST,
  parseInt(process.env.DB_PORT, 10),
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_NAME
);
//import cleaker from "cleaker";
//import imLearning from 'i.mlearning';
//import pixelgrid from 'this.pixelgrid';
//all.this Data Structures.
import thisAudio from 'this.audio';
import thisDOM from 'this.dom';
import thisGUI from 'this.gui';
import thisImg from 'this.img';
import thisWallet from 'this.wallet';
console.log("index.js endLine 1");





/*
git submodule add https://github.com/suiGn/Caelestibus workspaces/apps/Caelestibus
git submodule add https://github.com/suiGn/cleaker.me workspaces/apps/cleaker.me
git submodule add https://github.com/suiGn/i.mlearning.me workspaces/apps/i.mlearning.me
git submodule add https://github.com/suiGn/mdrn workspaces/apps/mdrn
git submodule add https://github.com/suiGn/mexicoEncuesta workspaces/apps/mexicoEncuesta
git submodule add https://github.com/suiGn/OrgBoat workspaces/apps/OrgBoat
*/