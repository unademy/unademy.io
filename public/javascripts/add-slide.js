


function addSlide(){

	var activeSection = getActiveSection();
	var activeSectionName = getActiveSectionName(activeSection);

	var ul = getActiveSectionsUL(activeSection);

	addBasicPanel(ul,activeSectionName);
}	


function getActiveSectionName(sec){
	var secName = 'sec'+sec;
	return secName;
}
function getActiveSectionsUL(sec){

	var queryString = 'sec'+sec;
	var ul = document.getElementById(queryString).getElementsByTagName('ul');
	var li = ul[0].getElementsByTagName('li');
	var amountOflidesInCurrentSection = li.length;

	return ul;

}


function getActiveSection(){

	var sectionList = document.getElementById('sectionList').getElementsByTagName('li');
	var activeSection = 0;

	for(var x= 0; x<sectionList.length; x++){

		if(sectionList[x].classList == 'active'){
			activeSection = x;
			break;
		}

	}
	return activeSection;

}


function createPanelIdentifier(ul){

	var identifier = 0 ;
	var li = ul[0].getElementsByTagName('li');
	identifier = li.length;

	return identifier;

}

function addBasicPanel(ul,activeSectionName){

	var id = createPanelIdentifier(ul);	

	window.alert('activeSectionName '+ activeSectionName);

	window.alert('Identifier='+id);

	var idString = 'basicPanel'+id+activeSectionName;


	 $(ul).append("<li id='"+idString+"'><div class='panel panel-slider'>"+
						"<div class='panel-header'><input type='text' class='slideName' name='slideName' value='Please enter slider name'></input</div>"+
						"<div class='panel-body'><div class='col-lg-12'>"+
						"<p><textarea class='slide-textarea-input' rows=15; name='slide-textarea-input'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et turpis vel justo mattis imperdiet. Fusce nibh ante, mollis eu porta vehicula, cursus vitae eros. Vestibulum tincidunt dignissim fermentum. Maecenas consectetur libero quis congue dapibus. Nullam eu nisl eget nibh porttitor venenatis. Proin dictum egestas lacus, egestas congue justo fermentum a. Aenean at elementum est. Mauris faucibus semper enim at posuere. Cras dictum, lectus eget vehicula fringilla, lorem augue semper leo, vitae pulvinar augue risus quis neque. Sed feugiat sollicitudin diam nec vehicula. Donec tincidunt convallis sapien in faucibus.</textarea></p>"+	          	
						"</div></div>"+		      
						"<div class='panel-footer'><button class='btn btn-danger btn-lrg' onClick='saveSlide("+idString+");this.disabled=true;'>Save</button></div>"+		              			
						"</div>"+
				    "</li>");                			
								              										           	        							          						      
}



   