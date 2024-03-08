//index.js
/*
🅜🅞🅝🅐🅓🅛🅘🅢🅐
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ
🆂🆄🅸🅶🅽                                                                                                                                         
*/
import 'dotenv/config';
import vpath from 'v.path'; // Adjust the path based on your project structure
import Me from "this.me";
import cleaker from "cleaker";
import neurons from 'neurons.me';
import imLearning from 'i.mlearning';
import pixelgrid from 'this.pixelgrid';
//start express_server from server.cjs
import { Gateway } from 'netget';
//Plug in to LisaMemory
const dbPool = vpath.createPool(
  process.env.DB_HOST,
  parseInt(process.env.DB_PORT, 10),
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_NAME
);

// Configure your gateway instance
const gateway = new Gateway({
  port: process.env.GATEWAY_PORT,
  domainsConfigPath: process.env.DOMAINS_CONFIG_PATH
});
gateway.listen();