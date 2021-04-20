/** 
		┌─┐┬  ┌─┐┌─┐┬┌─┌─┐┬─┐
		│  │  ├┤ ├─┤├┴┐├┤ ├┬┘
		└─┘┴─┘└─┘┴ ┴┴ ┴└─┘┴└─  
 codedBY suiGN
Under MIT LICENSE
cleakerRM **/
    //if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    //if browser doesn't support WebSocket, just show some notification and exit
    if (!window.WebSocket) {
        content.html($('<p>', { text: 'Sorry, no WebSocket support on your browser.'} ));
        input.hide();
        $('span').hide();
    }
    //open connection
	var HOST = location.origin.replace(/^http/, 'ws')
    var connection = new WebSocket(HOST);
	

	//var connection = new WebSocket("wss://cleaker.herokuapp.com");
    connection.onopen = function () {
		//clkcd is the code used to know what kind of connection is it. CleakerRunMe is a type.
		//runmeMasterMind is the code for our main survillance.
		console.log(`%c connected________________________________________
			
			 ██████╗██╗     ███████╗ █████╗ ██╗  ██╗███████╗██████╗ 
			██╔════╝██║     ██╔════╝██╔══██╗██║ ██╔╝██╔════╝██╔══██╗
			██║     ██║     █████╗  ███████║█████╔╝ █████╗  ██████╔╝
			██║     ██║     ██╔══╝  ██╔══██║██╔═██╗ ██╔══╝  ██╔══██╗
			╚██████╗███████╗███████╗██║  ██║██║  ██╗███████╗██║  ██║
 		   	 ╚═════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
`, "font-family:monospace")
    };
    //most important part - incoming messages
    connection.onmessage = function (message) {
        //parse JSON message.
        try {
            var json = JSON.parse(message.data);
        } catch (e) {
            console.log('Not a valid JSON: ', message.data);
            return;
        }
		//TYPES OF WS PACKETS FROM SERVER
         if (json.type === 'validDataRes'){
        	validDataRes(json.value, json.rcolor, json.input, json.label, json.check);
        }
			};// ON Incoming Messages Closure
	
    connection.onerror = function (error) {
        //just in case there were some problems with connection...
        alert('i am Error - ' + connection.onERROR);
    };
	
	
	//      _ ___   _  _  __
	//  |V||_  ||_|/ \| \(_ 
	//  | ||__ || |\_/|_/__)
	//  LOVE & Memories AFTER ALL.
    /***/
		
		function validData(data, value){
		connection.send(JSON.stringify({clkcd: "subVer" , value: value , code: data}));
		}
		function validDataRes(value, rcolor, input, label, check){
		$(label).text(value);
		document.getElementById(input).style.borderColor = rcolor;
		document.getElementById(input).dataset.check = check;		
		}
		
   	 function validateForm() {
		 var subName = document.forms["subForm"]["subName"];
		 var subUsername = document.forms["subForm"]["subUsername"];
		 var subEmail = document.forms["subForm"]["subEmail"];
   		 var subPwd = document.forms["subForm"]["subPwd"];
   		 var subRtPwd = document.forms["subForm"]["subRtPwd"];
   	   if (subRtPwd.value != subPwd.value){
   		   alert("Password does not match!");
   		   return false;
   	   }else if (subPwd.length <= 5) {
		   alert("Password most be 5 characters or more.");
		   return false;
		}else if (subName.dataset.check === "ni") {
		   alert("Invalid Name!");
		   return false;
		}else if (subUsername.dataset.check === "ui") {
		   alert("Invalid Username!");
		   return false;  	   
   	   }else if (subUsername.dataset.check === "ut") {
		   alert("Username already taken!");
		   return false;
   	   }else if (subEmail.dataset.check === "ei") {
		   alert("Invalid Email!");
		   return false;
	   }else if (subEmail.dataset.check === "et") {
		   alert("Email already taken!");
		   return false;
	   }else{
   		   return true;		
   		 }  
   	 }
	 
	 var i = 0;
	 var speed = 50; /* The speed/duration of the effect in milliseconds */
	 var txt = ""
	 function typeWriter() {
	   if (i < txt.length) {
	     document.getElementById("mndTlks").innerHTML += txt.charAt(i);
	     i++;
	     setTimeout(typeWriter, speed);
	   }
	 }
	 
	 
	function pwdMatch(){
	 	//var subPwd = document.forms["subForm"]["subPwd"];
	 	//var subRtPwd = document.forms["subForm"]["subRtPwd"];
	 		//if (subPwd.value === subRtPwd.value){
	 			//subPwd.style.borderColor = "#39D1BB";
	 		    //subRtPwd.style.borderColor = "#39D1BB";
	 			 //}else if (subPwd.value != subRtPwd.value){
	 			 //subPwd.style.borderColor = "#ff6666";
	 			 //subRtPwd.style.borderColor = "#ff6666";
	 			//}
	 				}
	 
	 function onSubscribe(val){
		 if (val == "subOpen"){
		 var subscribeDiv = document.getElementById("subscribeDiv");
		 subscribeDiv.style.display = "block";	
		 subscribeDiv.scrollIntoView({block: 'end', behavior: 'smooth'});
		 document.getElementById("loginDiv").style.display = "none";
		 document.getElementById("mndTlks").innerHTML = " ";
		 i = 0;
		 txt = "Fill out your information";
		 typeWriter();
	 }
	 }
	 
	 function xSubscribe(){
		 document.getElementById("subscribeDiv").style.display = "none";	
		  document.getElementById("mndTlks").innerHTML = "Please Choose:";
		  i = 0;				
	 }
		 
	 function onLogin(){
		 document.getElementById("subscribeDiv").style.display = "none";	
		 document.getElementById("loginDiv").style.display = "block";
		 document.getElementById("loginDiv").scrollIntoView();
		 document.getElementById("mndTlks").innerHTML = " ";
		 i = 0;
		 txt = "Login to cleaker.";
		 typeWriter();
	 }
		 
	 function xLogin(){
		 document.getElementById("loginDiv").style.display = "none";
	 	 document.getElementById("mndTlks").innerHTML = "Please Choose:";
	  	 i = 0;						
	 }
		
		
									
	





