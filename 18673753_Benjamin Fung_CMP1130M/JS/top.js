//function for the button "to top"
window.onscroll=function(){scrollfunction()};
function scrollfunction(){
	if(document.body.scrollTop>10 || document.documentElement.scrollTop>10){ //once the user has scrolled more than 10 px then the button appears
		document.getElementById("topBtn").style.display="block";
	}
	else{
		document.getElementById("topBtn").style.display="none";
	}
}
function toTop(){
	document.documentElement.scrollTop=0; //sets the window to top
}