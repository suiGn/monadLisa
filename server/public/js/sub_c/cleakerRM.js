/** 
		┌─┐┬  ┌─┐┌─┐┬┌─┌─┐┬─┐
		│  │  ├┤ ├─┤├┴┐├┤ ├┬┘
		└─┘┴─┘└─┘┴ ┴┴ ┴└─┘┴└─  
 codedBY suiGN
Under MIT LICENSE
cleakerRM **/
$(function () {
    "use strict";
	var myUUID = "";
	var cleakedRow = $('#cleakedDiv');
    //if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    //if browser doesn't support WebSocket, just show some notification and exit
    if (!window.WebSocket) {
        content.html($('<p>', { text: 'Sorry, no WebSocket support on your browser.'} ));
        input.hide();
        $('span').hide();
        return;
    }
	
    //open connection
	var HOST = location.origin.replace(/^http/, 'ws')
    var connection = new WebSocket(HOST);
	//var connection = new WebSocket("wss://cleaker.herokuapp.com");
    connection.onopen = function () {
		//clkcd is the code used to know what kind of connection is it. CleakerRunMe is a type.
		//runmeMasterMind is the code for our main survillance.
	connection.send(JSON.stringify({clkcd: 'CleakerRunMe' , cleakerRoom: "runmeMasterMind", cleaker: "cleakerRunme"}));
		console.log(`%c connected________________________________________
			
			 ██████╗██╗     ███████╗ █████╗ ██╗  ██╗███████╗██████╗ 
			██╔════╝██║     ██╔════╝██╔══██╗██║ ██╔╝██╔════╝██╔══██╗
			██║     ██║     █████╗  ███████║█████╔╝ █████╗  ██████╔╝
			██║     ██║     ██╔══╝  ██╔══██║██╔═██╗ ██╔══╝  ██╔══██╗
			╚██████╗███████╗███████╗██║  ██║██║  ██╗███████╗██║  ██║
 		   	 ╚═════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
`, "font-family:monospace")
			function foo() {
			    connection.send(JSON.stringify({clkcd: 'keepMeAlive'}));
			    setTimeout(foo, 5000);
					}
			foo();
    };
	
	
    //most important part - incoming messages
    connection.onmessage = function (message) {
        //try to parse JSON message. Because we know that the server always returns
        //JSON this should work without any problem but we should make sure that
        //the message is not chunked or otherwise damaged.
        try {
            var json = JSON.parse(message.data);
        } catch (e) {
            console.log('Not a valid JSON: ', message.data);
            return;
        }
		//TYPES OF WS PACKETS FROM SERVER
        if (json.type === 'clkr_Start'){ // Receiving Active User.
			//console.log(message.data);
			addCleakedDiv(json.cleaker);
            //from now user can start sending messages
        } else if (json.type === 'stayingAlive'){
			console.log("--1");
        	
        }
	};
	
    connection.onerror = function (error) {
        //just in case there were some problems with connection...
        alert('i am Error - ' + connection.onERROR);
    };
	
	
	//      _ ___   _  _  __
	//  |V||_  ||_|/ \| \(_ 
	//  | ||__ || |\_/|_/__)
	//  LOVE & Memories AFTER ALL.
    /***/
				
		function addCleakedDiv(cleaked){
			var cleakedDiv = document.getElementById("cleakedDiv");
		    // allow 1px inaccuracy by adding 1
		    var isScrolledToBottom = cleakedDiv.scrollHeight - cleakedDiv.clientHeight <= cleakedDiv.scrollTop + 1;
			cleakedRow.append('<div class="pck w-clearfix">\
          <div class="text-span-2 _111 lowest">O</div>\
		  <div class="text-span-2 _111 _11">O</div>\
          <div class="text-block-3 dataset">' + cleaked.uuid + '</div>\
          <div class="text-block-3">' + cleaked.onDate + '</div>\
          <div class="text-block-3 datatext">' + cleaked.usrname + ' - ' + cleaked.browser + '</div>\
          <div class="text-block-3">' + cleaked.usrCity + '</div>\
          <div class="pck-viewall" onClick="viewElement(this)" id="showElId">[ view ]</div>\
		  <div class="pck-viewall" onClick="hideElement(this)" style="display: none;" id="hideElId">[ hide ]</div>\
		  </br>\
          <div class="vwmtd" id="viewerDiv">\
          <div class="scrollable-cleaker-text openconnection">\
		  <br>Usrname:' + cleaked.usrname + ',\
				<br>Location Path:' + cleaked.locationPath + ', \
				<br>LocationOrigin:' + cleaked.locationOrigin + ', \
				<br>usrCountry:' + cleaked.usrCountry + ',\
				<br>usrCity: ' + cleaked.usrCity + ',\
				<br>usrRegion:' + cleaked.usrRegion + ',\
				<br>usrISP: ' + cleaked.usrISP + ',\
				<br>usrCity:' + cleaked.usrCity + ',\
				<br>usrLat: ' + cleaked.usrLat + ',\
				<br>usrLon: ' + cleaked.usrLon + ',\
				<br>ipQuery: ' + cleaked.ipQuery + ',\
				<br>refer: ' + cleaked.refer + ',\
				<br>previous: ' + cleaked.previous + ',\
				<br>language: ' + cleaked.language + ',\
				<br>browserOnline: ' + cleaked.browserOnline + ',\
				<br>browser: ' + cleaked.browser + ',\
				<br>js: ' + cleaked.js + ',\
				<br>cookiesEnabled: ' + cleaked.cookiesEnabled + ',\
				<br>cookies: ' + cleaked.cookies + ',\
			</div>\
          </div>\
        </div>');	
		//$('#cleakedDiv').animate({scrollTop: $('#cleakedDiv').prop("scrollHeight")}, 500);
	    if(isScrolledToBottom){
	      cleakedDiv.scrollTop = cleakedDiv.scrollHeight - cleakedDiv.clientHeight;
	  }
	   
		}
									
	
});

//Display Visit full Cleaker
function viewElement(vaar){
	$(vaar).siblings('#viewerDiv').show();
	$(vaar).hide();
	$(vaar).siblings('#hideElId').show();
}
//Hide Visit full Cleaker
function hideElement(vaar){
	$(vaar).siblings('#viewerDiv').hide();
	$(vaar).hide();
	$(vaar).siblings('#showElId').show();
}



