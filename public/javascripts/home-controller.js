function loadComponent(comp){

	var containers = document.getElementsByClassName("container");
	window.alert(comp);
	window.alert(containers.length);
	for(var x = 0 ; x < navs.length; x++){
		navs[x].classList.add('hidden');
	}
	navs[comp].classList.remove(hidden);
}




$("#register-button").click(function(){
	
    $("#login-button" ).removeClass('hidden');
    $("#register-button" ).addClass('hidden');
	$("#login-slide" ).addClass('hidden');
	$("#register-slide" ).removeClass('hidden');

 })

$("#login-button").click(function(){

	 $("#register-button" ).removeClass('hidden');
	 $("#login-button" ).addClass('hidden');
     $("#register-slide" ).addClass('hidden');
     $("#login-slide" ).removeClass('hidden');
})


