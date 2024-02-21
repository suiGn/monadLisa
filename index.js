import Me from "this.me";
import cleaker from "cleaker";
//start express_server from server.cjs
import { Gateway } from 'netget';
// Configure your gateway instance
const gateway = new Gateway({
  port: 3000,
  domainsConfigPath: './config/domains.json'
});
// Start the gateway
gateway.listen();