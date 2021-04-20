// DATA
$.getJSON("https://pro.ip-api.com/json/?callback=?&key=aGbt2iIuvD8OhJl", function(data) {
	cleaker={
		ntgtid: 'USRDVC(USER DEVICE)',
		onDate: new Date(),
		timezone:(new Date()).getTimezoneOffset()/60,
		sessionClosed: 'monday 12:12:45pm 06-16-2019',
		sessionDuration:'00:00:00',
		pushNotifications: 'yes',
		img: 'https://pjreddie.com/darknet/', //place authorization for face recognition and enviroment awereness. //CONNECT TO YOLO
		client: 'usrname',
		cleakerurl: window.location.pathname,
		urlLocation: location.origin,
		usrCountry: data.country,
		usrRegion: data.region,
		usrISP: data.isp,
		usrCity: data.city,
		usrLat: data.lat,
		usrLon: data.lon,
		ipQuery: data.query,
		refer: document.referrer,
		previous: history.length,
		language: navigator.language,
		browserOnline: navigator.onLine,
		browser: navigator.platform,
		js: navigator.javaEnabled(),
		cookiesEnabled: navigator.cookieEnabled,
		cookies: document.cookie,
		tdyvisits: 'x',
		ystvisits: 'x',
		wklyVisits: 'x',
		mnthlyVisits: 'x',
		CookiesOn: 'yes',
		Monetization: 'yes',
		number: '000000000000000000001'
	    };	
});


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
	  
	  	//SET DATA READY
 		//USE URL WS:// OR WSS:// (IF USING TLS)
  		//var ws = new WebSocket("wss://cleaker.herokuapp.com");
		//var ws = new WebSocket("wss://wreckthemedia.herokuapp.com");
 		var ws = new WebSocket("ws://localhost:5000"); //RUNNING LOCAL
 	   		ws.onopen = function(e){
  			 console.log('Conected to Cleaker');
			 document.getElementById("occess").style = "border-right-color: #3ad1bb";
  		   	var handshake = "working good";
  		  	ws.send(handshake);
					}
 			function sendCountry(){
     		   ws.send($('#rcp').text());
 		  				}
 			function sendCity(){
    			ws.send($('#rcp1').text());
 		   				}
