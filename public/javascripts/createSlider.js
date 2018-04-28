

var sliderName = document.getElementById('sliderName');
var sliderDescription = document.getElementById('sliderDesc');

function createNewSlider(){

	var slider = {
		name:sliderName.value,
		description:sliderDescription.value
	}

	 $.post('http://localhost:8080/createNewSlider', slider);
	 window.location.href = 'https://tronslide.herokuapp.com/mySlides';
} 