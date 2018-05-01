





function viewThisSection(list){
      
  	  currentSlide   = 0;
   	
      var allPanels = document.getElementsByClassName('slide');
   		
      for(var pl = 0; pl < allPanels.length; pl++){
       
        allPanels[pl].style.display = "none";

      }

 
      var activeSlider = document.getElementById(list).getElementsByClassName('slide');
      activeSlider[0].style.display = 'block';

	    min.innerHTML = 1;
	    max.innerHTML = activeSlider.length;
	        

  

  
 	
 


}