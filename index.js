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
connectionString: "postgres://csicplnifqncpc:ce12c51c83e437148779a4f7e0d508722f0a5ce9f05f894f9b6f88b9f2d9b3f9@ec2-174-129-253-53.compute-1.amazonaws.com:5432/d70qi6m3chd89a",
ssl: { rejectUnauthorized: false }
});
theVault.connect();


const server = express()
	//SETTING UP ROUTING SPECS
 	.use(bodyParser.urlencoded({ extended: false }))
 	.use(bodyParser.json())
	.use(forceSecure(["cleaker.me","wwww.cleaker.me"])) // FORCE SSL
	.use(express.static(path.join(__dirname, 'server/public')))
	.set('views', path.join(__dirname, 'server/views'))
	.set('view engine', 'ejs')
	//ROUTING Cleaker 
	.get('/', routes.home)
	//Shadow
	.get('/runme', routes.runme)
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
					┌─┐┬  ┌─┐┌─┐┬┌─┌─┐┬─┐
					│  │  ├┤ ├─┤├┴┐├┤ ├┬┘
					└─┘┴─┘└─┘┴ ┴┴ ┴└─┘┴└─    
				serverside websocket managment **/
		
		var webSocketServer = require('websocket').server;
		var clients = [ ];
		var allMembers = [ ];
		
		var wsServer = new webSocketServer({
	    httpServer: server
			});
	//exports.wsServer;
	// WebSocket server Starts from Here
	wsServer.on('request', function(request) {
			   var uuid_numbr = uuid.v4();
			  
			//accept connection if check 'request.origin'
			   var connection = request.accept(); //connecting from same website
			   var index = clients.push(connection) - 1; //client index to remove them on 'close' event
			   //A connection was acepted.
			   //console.log('1. wsOnRqstLog - Connection Accepted UUID: ' + uuid_numbr + ' Request.Origin: ' + request.origin);
			    //starts - comunication with user - connection.on 
			   connection.sendUTF(JSON.stringify({ type:'cleaked', uuid: uuid_numbr})); // 'cleaked' -- cleaker.js handshake innitiation
			   //Listening - on incoming comunication
				  connection.on('message', function(message) {
					if (message.type === 'utf8') { //IF TEXT. 
						pckr = JSON.parse(message.utf8Data); //parse to json
						if (pckr.clkcd === 'CleakerRunMe') { //Create rooms for Broadcast Redirection.
	   					var runMeMember = {
	   						room: pckr.cleakerRoom,
	   						index: index,
	   						client: connection,
							uuid: uuid_numbr
						}	
	   			  //Push into the array
	   			  allMembers.push(runMeMember) - 1;// index to remove them on 'close' event;			
				} 
				else if (pckr.clkcd === 'onCleaker'){ //CLEAKER NETWORK MONITORING
				//console.log(pckr.cleaker); //for dev purposes, remove to not saturate the console.
				//packet - send INFORMATION TO RUNME
				var activeUser = JSON.stringify({ type: "clkr_Start", cleaker: pckr.cleaker});
				//console.log(pckr.cleaker);
				brdCstRight("runmeMasterMind", activeUser);
						} //ACTIVE USERS - RUNME CLOSURE
				else if (pckr.clkcd === 'appCleaker'){ // RECEIVING CLEAKER FROM A MOBILE APP
						//console.log(pckr.cleaker);
						}//MOBILE APP CLOSURE
				else if (pckr.clkcd === 'keepMeAlive'){ // TIMER TO KEEP SESSIONS ALIVE
						//console.log("keepme");
				 	 	var stayingAlive = JSON.stringify({ type: "stayingAlive", chorus: "A A A A"});
				 	 	brdCstRight("runmeMasterMind", stayingAlive);
						}// KEEP ME ALIVE CLOSURE
						
						else if (pckr.clkcd == "subVer"){//submit Data Verification
 			  exports.subVerificationRes = function(type, value, color, input, label, check){
 			 		connection.sendUTF(JSON.stringify({ type:type, value: value, rcolor:color ,input: input,label: label, check: check}));
 			 			   }
							method.dataSubmitVerification(pckr);
						}//subVer


						}//IF MESSAGE.TYPE CLOSURE
								});//END CONNECTION.ON MESSAGE		
															
				// User disconnected
				connection.on('close', function(connection) {
						//console.log(".disconnected - UUID:" + uuid_numbr);//logoutRecord
						clients.splice(index, 1);// remove user from the list of connected clients
						}); 
					}); // FINISHES WEB SERVER ON