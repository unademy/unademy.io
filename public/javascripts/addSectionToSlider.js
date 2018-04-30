var counter = 1;
var modCounter = 1;


function addSection(){



	var newName = document.getElementById("sectionName");
	var sectionsList = document.getElementById("sectionList").getElementsByTagName("li");

	var tabContent = document.getElementById("tabContent");
	var tabs = document.getElementById("tabContent").getElementsByClassName("tab-pane");

	var sections = [];
	
	if(newName.value != null && newName.value != ""){

		for(var a=0;a<sectionsList.length;a++){
					sectionsList[a].classList.remove("active");
		}

			for(var a=0;a<sectionsList.length;a++){
					tabs[a].classList.remove("active");
		}

	
	
	    $("#sectionList").append("<li class='active'><a href='#sec"+sectionsList.length+"' data-toggle='tab'>"+newName.value+"</a></li>");

	  
	    	var xyr = sectionsList.length-1;


			$("#tabContent").append("<div id='sec"+xyr+"' class='tab-pane fade in active' id='sec"+xyr+">"+
									"<div class='col-lg-12' style='margin-bottom:40px;'>"+
									"<ul style='padding-left: 0;list-style-type: none;' id='sec"+xyr+"panelList'>"+
									"</ul>"+
									"</div>"+
									"</div>");

				

                                      

	}

	var courseSectionUpdater = document.getElementById("sectionList").getElementsByTagName("a");

    for(var c = 0 ; c < courseSectionUpdater.length; c++){
    	sections.push(courseSectionUpdater[c].text);
    }
	
     var sectionList = {

     	sects:sections

     }

    $.post('http://localhost:8080/addSection', sectionList);
                                                                            

}