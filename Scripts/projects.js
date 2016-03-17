(function(){

	"use strict";

	var request = new XMLHttpRequest();
    request.open('GET', '../projects.json', true);
    request.addEventListener('readystatechange', function(){
		var projects = {};
		
		projects = JSON.parse(request.responseText);
		
		var paragraphArray = [];
		
		paragraphArray = projects.paragraphs;
		
	});
	request.send();	

})();