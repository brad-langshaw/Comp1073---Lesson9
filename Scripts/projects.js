(function(){

	"use strict";

	var request = new XMLHttpRequest();
    request.open('GET', '../projects.json', true);
    request.addEventListener('readystatechange', function(){
	 if (request.readyState === 4) {
		var projects = {};
		
		projects = JSON.parse(request.responseText);
		
		var paragraphArray = [];
		
		paragraphArray = projects.paragraphs;
		
		var paragraphArrayLength = paragraphArray.length;
		
		for(var number = 0; number < paragraphArrayLength; number++){
		var paragraph = getElementbyid("paragraph" + (number+1) );
		paragrapgh.innerHTML = paragraphArray[number];
			
		}
	 }
	});
	request.send();	

})();