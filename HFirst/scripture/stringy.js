

function talk() {
var phrase = "the cat in the hat";

var index = phrase.indexOf('cat');

alert("the index of cat is " + index);
 }

function pBook() {
  var data = "name b dog b rotten";
var vals = data.split("b");
alert("Split array is ", vals);
}


function last() {
  var data = "name b dog b rotten";
var vals = data.lastIndexOf(data);
alert("The last index is ", vals);
}

function topper() {
  var data = "name b dog b rotten";
var vals = data.toUpperCase();
alert("All uppercase letters!!!", vals);
}

function low() {
  var data = "It's SaturDay People!!!";
var vals = data.toLowerCase();
alert("All Lower case here!!! ", vals);
}




document.getElementById('speak').onclick=talk;
document.getElementById('sep').onclick=pBook;
document.getElementById('end').onclick=last;

document.getElementById('high').onclick=topper;
document.getElementById('bottom').onclick=low;
