


function addSlide(){

	var activeSection = getActiveSection();
	var activeSectionName = getActiveSectionName(activeSection);

	var ul = getActiveSectionsUL(activeSection);

	addBasicPanel(ul,activeSectionName);
}	

function addVideo(){
	var activeSection = getActiveSection();
	var activeSectionName = getActiveSectionName(activeSection);

	var ul = getActiveSectionsUL(activeSection);

	addVideoPanel(ul,activeSectionName);
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



  function addVideoPanel(ul,activeSectionName){

	var id = createPanelIdentifier(ul);	

	window.alert('activeSectionName '+ activeSectionName);

	window.alert('Identifier='+id);

	var idString = 'vid'+id+activeSectionName;

	var vidId = 'vidArea'+id+activeSectionName;

	 $(ul).append("<li id='"+idString+"'>"+
	 				"<div class='panel panel-slider'>"+
						"<div class='panel-header'>"+
						"<h1 style='color:black;'>"+
							"<input type='text' class='slideName' name='slideName' placeholder='Slider Name Here'></input></h1>"+
						"</div>"+

						"<div class='panel-body' style='height: 400px;margin-left: 10px;margin-right: 10px;' id='"+vidId+"'></div>"+	

							"<div class='panel-footer'>"+
								"<div class='col-lg-12'>"+
									"<div class='row'>"+
										"<div class='col-lg-1'><button class='btn btn-primary btn-lrg' onClick='saveVideoSlider("+idString+")'>Save</button></div>"+

										"<div class='col-lg-5 col-lg-offset-3'><div class='input-group'>"+
												"<input type='text' class='form-control' placeholder='Embeded Link' name='embedVideoLink' id='embedVideoLink'>"+
												"<span class='input-group-btn'>"+
													"<button type='button' onClick=addEmbedded("+idString+",'"+vidId+"'); class='btn btn-danger'>Youtube</button>"+
												"</span>"+
											"</div>"+
										"</div>"+

										"<div class='col-lg-2'><div class='col-lg-2'><button class='btn btn-warning'>Upload MP4</button></div></div>"+
										"<div class='col-lg-1'><div class='col-lg-2'><button class='btn btn-danger' onClick='remove(thisPanel)'><i class='fa fa-trash fa-6' aria-hidden='true'></i></button></div></div>"+	

									"</div>"+
								"</div>"+
							"</div>"+
						"</div>"+	
				    "</li>");                			
								              										           	        							          						      
}



 
                                             
                                            

                             
                                             
                                               

