

function saveSlide(idString){

	window.alert('thisIs carazy');

	var authorInput = document.getElementById('authorInput').value;
	var parentName  = document.getElementById('parentName').value;


	var inputs   = idString.getElementsByTagName('input');
	var textArea = idString.getElementsByTagName('textarea');
	var activeSection = getActiveSection();
	var activeSectionName = getActiveSectionName(activeSection);



	var slide = {

		slide_name:inputs[0].value,
		content:textArea[0].value,
		author:authorInput,
		type:'basic',
		section:activeSectionName,
		slider:parentName

	}

	 $.post('http://localhost:8080/saveSlide', slide);

	
}



function saveVideoSlider(panel){


	var authorInput = document.getElementById('authorInput').value;
	var parentName  = document.getElementById('parentName').value;
	var activeSection = getActiveSection();
	var activeSectionName = getActiveSectionName(activeSection);
	var inputs = panel.getElementsByTagName('input');
	



	var slide = {

		slide_name:inputs[0].value,
		content:inputs[1].value,
		author:authorInput,
		type:'video',
		section:activeSectionName,
		slider:parentName

	}


		
		
	$.post('http://localhost:8080/saveSlide', slide);


}