/** 
╦ ╦╦═╗╔═╗╔═╗╦╔═╔╦╗╦ ╦╔═╗╔╦╗╔═╗╔╦╗╦╔═╗
║║║╠╦╝║╣ ║  ╠╩╗ ║ ╠═╣║╣ ║║║║╣  ║║║╠═╣
╚╩╝╩╚═╚═╝╚═╝╩ ╩ ╩ ╩ ╩╚═╝╩ ╩╚═╝═╩╝╩╩ ╩
 codedBY: SUI GENERIS 
All Copyrights reserved by:
NEURONS ART & TECHNOLOGY
Under MIT LICENSE
wreckthemedia clientside code **/
$(function () {
    "use strict";
    var content = $('#content');
    var input = $('#wtmnptsndr');
	var onlineUsersDiv = $('#onlineUsrsDiv');
    var status = $('#status');
	var inChannel = window.channelRoom;
	var inHash = window.channelHash;
    //my color assigned by the server
    var myColor = false;
    //my name sent to the server
    var myName = false;
	var myUUID = "";
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
    connection.onopen = function () {
        //We want users to enter their names
        input.removeAttr('disabled');
        status.text('Type Usrname:');
		console.log(`%c ________________________________________
 //  ██╗    ██╗██████╗ ███████╗ ██████╗██╗  ██╗████████╗██╗  ██╗███████╗███╗   ███╗███████╗██████╗ ██╗ █████╗ 
 //  ██║    ██║██╔══██╗██╔════╝██╔════╝██║ ██╔╝╚══██╔══╝██║  ██║██╔════╝████╗ ████║██╔════╝██╔══██╗██║██╔══██╗
 //  ██║ █╗ ██║██████╔╝█████╗  ██║     █████╔╝    ██║   ███████║█████╗  ██╔████╔██║█████╗  ██║  ██║██║███████║
 //  ██║███╗██║██╔══██╗██╔══╝  ██║     ██╔═██╗    ██║   ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══╝  ██║  ██║██║██╔══██║
 //  ╚███╔███╔╝██║  ██║███████╗╚██████╗██║  ██╗   ██║   ██║  ██║███████╗██║ ╚═╝ ██║███████╗██████╔╝██║██║  ██║
 //   ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝╚═════╝ ╚═╝╚═╝  ╚═
`, "font-family:monospace")
    };
    connection.onerror = function (error) {
        //just in case there were some problems with connection...
        content.html($('<p>', { text: 'i am Error -  ' + 'Connection.onERROR' } ));
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
        if (json.type === 'color'){ //first response from the server with user's color
            myColor = json.user;
			myUUID = json.uuid;
            status.text(myName + ': ').css('color', myColor);
            input.removeAttr('disabled').focus();
            //from now user can start sending messages
        } else if (json.type === 'logIn') { 
            input.removeAttr('disabled').focus();
			content.append('<div class="text-block-24"> ' + json.data +  ' joined Channel @ 1:11 </div>');
			if(json.uuid != myUUID){
            usrLogIn(json.data, json.uuid);	
			}  
        } else if (json.type === 'history') { //entire message history
            for (var i=0; i < json.data.length; i++) {
            addMessage(json.data[i].author, "message", json.data[i].text, json.data[i].color, new Date(json.data[i].time));
            }
        } else if (json.type === 'message') { //it's a single message
            input.removeAttr('disabled').focus(); //let the user write another message
			if (json.data.uuid == myUUID){
			addMessage(json.data.author, "message sent", json.data.text, json.data.color, new Date(json.data.time));//Params addMessage(author, class, message, color, dt)
			}else{
            addMessage(json.data.author, "message", json.data.text, json.data.color, new Date(json.data.time));
			}  				
        } else if (json.type === 'onlineUsers') { //online 
			json.data.forEach(function(usr) {
				onlineUsersFunc(usr.user, usr.uuid, json.data.length);
				});	   
        } else if (json.type === 'logOut') { 
            input.removeAttr('disabled').focus(); 
            loggedOut(json.data, json.uuid);		   
        } else {
            console.log('Hmm..., I\'ve never seen JSON like this: ', json);
        }
    };
    /*** Send mesage when user presses Enter key ***/
    input.keydown(function(e) {
        if (e.keyCode === 13) {
            var msg = $(this).val();
            if (!msg) {
                return;
            }
            // send the message as an ordinary text
            connection.send(JSON.stringify({msg: msg , room: inChannel+inHash}));
            $(this).val('');
			 $(this).focus();
            // disable the input field to make the user wait until server
            // sends back response
            input.attr('disabled', 'disabled');
            // we know that the first message sent from a user is their name
            if (myName === false) {
                myName = msg;
            }
        }
    });
	//      _ ___   _  _  __
	//  |V||_  ||_|/ \| \(_ 
	//  | ||__ || |\_/|_/__)
	//  LOVE & Memories AFTER ALL.
    /***/
		Element.prototype.remove = function() {
		    this.parentElement.removeChild(this);
		}
		NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
		    for(var i = this.length - 1; i >= 0; i--) {
		        if(this[i] && this[i].parentElement) {
		            this[i].parentElement.removeChild(this[i]);
		        }
		    }
		}
		
	function usrLogIn(whologIn, uuid){
	   	 	onlineUsersDiv.append('<div class="online-usr-div w-clearfix id="' + uuid + '">\
					<div data-delay="0" class="dropdown w-clearfix w-dropdown">\
	                <div class="dropdown-toggle-2 w-dropdown-toggle">\
	                  <div class="text-block-28">...</div>\
	                </div>\
	                <nav class="dropdown-list-2 w-dropdown-list">\
						<a href="#" class="w-dropdown-link">Link 1</a>\
						<a href="#" class="w-dropdown-link">Link 2</a>\
						<a href="#" class="w-dropdown-link">Link 3</a>\
					</nav>\
	              </div>\
	              <div class="text-block-29">' + whologIn + '@ 1:16</div>\
	            </div>');	
					}
		
    function addMessage(author, classType, message, color, dt) {
        content.append('<div class="' + classType +'"><p><span class="msg-meta text-span sent-mtd" style="color:' + color + '">'
		 + author + ' @</span><span style="color: #9ca1a1;  font-size: 9px;">' + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ':</span> ' + message + '</p> </div>');	
			var elmnt = document.getElementById("content"); 
			  elmnt.scrollIntoView(false); // Bottom
    	  		}
	
	function onlineUsersFunc(connectedUser, uuid, number){
		onlineUsersDiv.append('<div class="online-usr-div w-clearfix" id=" ' + uuid + '">\
			<div data-delay="0" class="dropdown w-clearfix w-dropdown">\
            <div class="dropdown-toggle-2 w-dropdown-toggle">\
              <div class="text-block-28">...</div>\
            </div>\
            <nav class="dropdown-list-2 w-dropdown-list">\
				<a href="#" class="w-dropdown-link">Link 1</a>\
				<a href="#" class="w-dropdown-link">Link 2</a>\
				<a href="#" class="w-dropdown-link">Link 3</a>\
			</nav>\
          </div>\
          <div class="text-block-29">' + connectedUser + '@ 1:16</div>\
        </div>');	
		document.getElementById("p1").innerHTML = "- " + number +" Online Users";
	}
	
	function loggedOut(loggedOut, uuid){
		content.append('<div class="text-block-24 logout" id=""> ' + loggedOut +  ' loggedOut @ 1:16</div>');
		var thisidwillbe = "	" + uuid;
		   document.getElementById(thisidwillbe).remove();
	}
	
	
    /*** This method is optional. If the server wasn't able to respond to the
     * in 3 seconds then show some error message to notify the user that
     * something is wrong.*/
    setInterval(function() {
        if (connection.readyState !== 1) {
            status.text('Error');
            input.attr('disabled', 'disabled').val('This machine will, will not communicate. ' 
								+ 'These thoughts and the strain I am under. Please Refresh!.');
        }
    }, 3000);
	

});