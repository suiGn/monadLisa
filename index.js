/** SERVER APP: monadLisa **
                                  _ _ _           
                                 | | (_)          
  _ __ ___   ___  _ __   __ _  __| | |_ ___  __ _ 
 | '_ ` _ \ / _ \| '_ \ / _` |/ _` | | / __|/ _` |
 | | | | | | (_) | | | | (_| | (_| | | \__ \ (_| |
 |_| |_| |_|\___/|_| |_|\__,_|\__,_|_|_|___/\__,_|
                                                  
*** CODED BY sui Gn
Put a line into the editor
plug it to your brain
****/
////carrier : <script src="https://cleaker.herokuapp.com/js/sub_c/cleaker.js"></script>
//SETTING UP SERVER VARIABLES AND DEPENDENCIES
/** Global variables */
const forceSecure = require("force-secure-express");
const express = require('express');
const path = require('path');
var session = require('express-session');
const PORT = process.env.PORT || 3000;
//const PORT = 31416; //Cleaking
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var bodyParser = require("body-parser");
const routes = require('./routes');
const monadLisa_art = require('./configs/details');
const method = require('./methods');
var unicorn = "🍺🦄🍺";
var uuid = require('node-uuid');
const { Client } = require('pg');


const theVault = new Client({
connectionString: "postgres://actrqichtajnmf:909f1306da4d36e65b81649e6677d30ae8e55a57925b0e501a0c1642e58d80bd@ec2-34-194-215-27.compute-1.amazonaws.com:5432/dhfui1h48dc48",
ssl: { rejectUnauthorized: false }
});
theVault.connect();


const server = express()
	//SETTING UP ROUTING SPECS
 	.use(bodyParser.urlencoded({ extended: false }))
 	.use(bodyParser.json())
	.use(forceSecure(["monadlisa.com","wwww.monadlisa.com"])) // FORCE SSL
	.use(express.static(path.join(__dirname, 'server/public')))
	.set('views', path.join(__dirname, 'server/views'))
	.set('view engine', 'ejs')
	//ROUTING Cleaker 
	.get('/', routes.home)
	//Routing WTM
	.listen(PORT, () => console.log(` 
                         ${monadLisa_art.monadPrint}
				Listening on port: ${PORT}`));
		
				
	   /** 				  o       o                                
						  |       |                               
						  o   o   o  
 	   					   \ / \ / 
 	   					    o   o  */
		/*_      _____ ___ ___  ___   ___ _  _____ _____ 
		 \ \    / / __| _ ) __|/ _ \ / __| |/ / __|_   _|
	      \ \/\/ /| _|| _ \__ \ (_) | (__| ' <| _|  | |  
		   \_/\_/ |___|___/___/\___/ \___|_|\_\___| |_| 
				serverside websocket managment **/
		
		var webSocketServer = require('websocket').server;
		var clients = [ ];		
		var wsServer = new webSocketServer({
	    httpServer: server
			});
	// WebSocket server Starts from Here
	wsServer.on('request', function(request) {
			   var uuid_numbr = uuid.v4();
			   //accept connection if check 'request.origin'
			   var connection = request.accept(); //connecting from same website
			   var index = clients.push(connection) - 1; //client index to remove them on 'close' event
			   //A connection was acepted.
			   console.log('WsConnection Accepted UUID: ' + uuid_numbr + ' Request.Origin: ' + request.origin);
			   //starts - comunication with user - connection.on 
			   connection.sendUTF(JSON.stringify({ type:'cleaking', uuid: uuid_numbr})); // 'cleaked' -- cleaker.js handshake innitiation
			   //Listening - on incoming comunication
				  connection.on('message', function(message) {
					if (message.type === 'utf8') { //IF TEXT. 
						pckr = JSON.parse(message.utf8Data); //parse to json
					if (pckr.clkcd === 'cleaked'){ //CLEAKEDBack
				console.log(pckr.cleaker.publicIp); //for dev purposes, remove to not saturate the console.
				method.storeFingerPrint(pckr);	
						} 
				else if (pckr.clkcd === 'appCleaker'){ // RECEIVING CLEAKER FROM A MOBILE APP
						console.log(pckr.cleaker);
						}//MOBILE APP CLOSURE						
							}//IF MESSAGE.TYPE CLOSURE
								});//END CONNECTION.ON MESSAGE		
															
				// User disconnected
				connection.on('close', function(connection) {
						//console.log(".disconnected - UUID:" + uuid_numbr);//logoutRecord
						clients.splice(index, 1);// remove user from the list of connected clients
						}); 
					}); // FINISHES WEB SERVER ON