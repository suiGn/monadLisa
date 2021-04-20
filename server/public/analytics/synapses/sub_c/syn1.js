function onLoad(){
    var theDate = new Date();
    console.log('Current date: ' + theDate);
	  }
	  onLoad();
/*	    				             .-. .-')             ('-.    .-')    
neutonsartntec 	 	                 \  ( OO )          _(  OO)  ( OO ).  
   .-----.  .-'),-----.  .-'),-----. ,--. ,--.  ,-.-') (,------.(_)---\_) 
  '  .--./ ( OO'  .-.  '( OO'  .-.  '|  .'   /  |  |OO) |  .---'/    _ |  
  |  |('-. /   |  | |  |/   |  | |  ||      /,  |  |  \ |  |    \  :` `.  
 /_) |OO  )\_) |  |\|  |\_) |  |\|  ||     ' _) |  |(_/(|  '--.  '..`''.) 
 ||  |`-'|   \ |  | |  |  \ |  | |  ||  .   \  ,|  |_.' |  .--' .-._)   \ 
(_'  '--'\    `'  '-'  '   `'  '-'  '|  |\   \(_|  |    |  `---.\       / 
   `-----'      `-----'      `-----' `--' '--'  `--'    `------' `-----' 
we get to remember;
*/
function createCleaker(name,value,days) {
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
  	var cleakerObj={
		name: "cleaker",
  		NTGTID: 'USRDVC(USER DEVICE)',
  		ON: new Date(),
		timezone:(new Date()).getTimezoneOffset()/60,
  		PushNotifications: 'yes',
  		DURATION:'00:00:00',
  		//img: 'https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg',
  		Client: 'usrname',
		page: window.location.pathname,
		urlAuthor: 'name',
		refer: document.referrer,
		previous: history.length,
		language: navigator.language,
		browserOnline: navigator.onLine,
		browser: navigator.platform,
		js: navigator.javaEnabled(),
		cookiesEnabled: navigator.cookieEnabled,
		cookies: document.cookie,
  		//usrCountry: 'USA',
  		//usrCity: 'Austin',
  		Closed: 'monday 12:12:45pm 06-16-2019',
  		dlyVisit: '8',
  		ystdy: '7',
  		wklyVisits: '34',
  		brstwk: '38',
  		mnthlyVisits: '144',
  		lstmnth: '132',
  		pushNotifications: 'No',
  		Cookies: 'yes',
  		Monetization: 'yes',
  		number: '000000000000000000002'
  	    };
	  createCleaker('cleaker', JSON.stringify(cleakerObj),7);
	  /* READCOOKIES eraseCookie('ppkcookie')*/
	  var x = readCookie('cleaker');
	  if (x) {
		  cleaker = JSON.parse(x);
		  console.log(cleaker.name + " set");
	 	  //STARTING WEBSOCKETS - SET DATA READY
	  	 //USE URL WS:// OR WSS:// (IF USING TLS)
	   	//var ws = new WebSocket("wss://cleaker.herokuapp.com");
	  	var ws = new WebSocket("ws://localhost:5000"); //RUNNING LOCAL
	  	  	ws.onopen = function(e){
	   			console.log("On " + cleaker.name);
	 			document.getElementById("onStat").style.color = "#09ffe2";
	   			var handshake = JSON.stringify(cleakerObj);
	   			ws.send(handshake);
				
	 					}
						
	  } 				