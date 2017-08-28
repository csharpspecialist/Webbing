

function changeStatus() {
   if   (window.status == "Check out the Pastries!!")
         window.status = "But keep your focus!!!";
   else
	 window.status = "Check out the Pastries!!";
}

var curMessage="good1";
function changeMessage() {
   if (curMessage == "good2") {
	document.images[2].src = "cam/yAnhart.jpg";
	curMessage = "good1";
}
   else {
	document.images[2].src = "cam/yBirthday.jpg";
	curMessage = "good2";
   }
}

var curSweet="bonbon1";
function changeSweet() {
   if (curSweet == "bonbon2") {
	document.images[1].src = "cam/yCupcakes.jpg";

	curSweet = "bonbon1";
}
   else {
	document.images[1].src = "cam/yDoughnut.jpg";
	curSweet = "bonbon2";
   }
}




// <img src="cam/yAnhart.jpg" align="right">
// <IMG src="cam/yBirthday.jpg">
// <IMG src="cam/yCakeKisses.jpg">
// <IMG src="cam/yChocCheese.png">
// <IMG src="cam/yCupcakes" align="right">
// <IMG src="cam/yDoughnut.jpg" align="right">
