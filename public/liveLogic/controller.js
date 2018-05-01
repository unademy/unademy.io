
var currentSection = 0;
var currentSlide   = 0;
var currentMax     = 0;
var min = document.getElementById("currentSlider");
var max = document.getElementById("maxSliders");

var list;


window.onload = function() {

    
        var currentSliderList = document.getElementById("introSliders").getElementsByClassName("slide");

   
     	var introSlide =document.getElementById("introPanel");

        introSlide.style.display = "block";


        currentMax   = currentSliderList.length;
     
            min.innerHTML = currentSlide+1;
            max.innerHTML = currentSliderList.length;


}



function slideForward(){

	//gets active UL list
    activeUlList = document.getElementById("Slider").getElementsByClassName("tab-pane fade in active");

    var slideLi = activeUlList[0].getElementsByClassName("slide");

   	if(currentSlide != slideLi.length-1){

   		  slideLi[currentSlide].style.display = 'none';

		    currentSlide++;
		      var nextSlide = currentSlide;
		    slideLi[nextSlide].style.display = 'block';
		    
		    min.innerHTML = nextSlide+1;
   	}
  


}

function slideBack(){

		//gets active UL list
    activeUlList = document.getElementById("Slider").getElementsByClassName("tab-pane fade in active");
    var slideLi = activeUlList[0].getElementsByClassName("slide");

   	if(currentSlide != 0){

   		  slideLi[currentSlide].style.display = 'none';

		  currentSlide--;

		     
		  slideLi[currentSlide].style.display = 'block';
		    
		  min.innerHTML = currentSlide+1;
   	}


}