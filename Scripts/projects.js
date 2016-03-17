(function(){

	"use strict";

	var request = new XMLHttpRequest();
    request.open('GET', '../people.txt', true);
    request.addEventListener('readystatechange', function(){
		
	});
	request.send();	

})();