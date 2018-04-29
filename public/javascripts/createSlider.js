

var catUL = document.getElementById('categoryList');
var newCat = document.getElementById('catLit');

var catCounter  = 0;

var catLength;


function addCategory(){
	
	catLength = document.getElementById('categoryList').getElementsByTagName('li').length;

	if(catLength <= 2){

			if(newCat.value != '' && newCat.value != null){

				$(catUL).append("<li>"+newCat.value+" <i class='fa fa-times' aria-hidden='true' style='color: red;' onclick='parentNode.parentNode.removeChild(parentNode));'></i><input type='hidden' name='cats' value='"+newCat.value+"'/></li>");
			

			}else{
				window.alert('Please Enter Something VALID for a category');
				
			}
	}else{

			window.alert('Maximum of three tags at creation time');
		

	}

	



} 



 
