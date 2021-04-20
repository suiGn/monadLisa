function cleaker(){
var cleak = document.getElementsByClassName(" item-thumbnail-href ");
var cleak2cleak = cleak[1];
var evt = document.createEvent("MouseEvents");
   //the tenth parameter of initMouseEvent sets ctrl key
   evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                               true, false, false, false, 0, null); 
	cleak[1].dispatchEvent(evt);
}
	
	setTimeout(function(){
 cleaker();
}, 20000);

