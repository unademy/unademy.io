

function addEmbedded(panel, div){


	var inputs = panel.getElementsByTagName('input');


	$('#'+div).empty();
	 $('#'+div).append("<iframe width='100%' height='100%' src='"+inputs[1].value+"'></iframe>");


}




