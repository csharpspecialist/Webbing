
function clock() {
  if (1.2 == "1.2")
  {
    alert("We r equal");
  }
  else {
    alert("We r not at all equal buddy");
  }
}
document.getElementById('flow').onclick=clock;

function square() {
  var c = Math.sqrt(15);
//  alert(c);
document.getElementById('spot').innerHTML= c;
}
document.getElementById('move').onclick=square;
//this only works if the script file is external!!!


function pace() {
var input = "jenny@wickedlysmart.com";
for(var i = 0; i < input.length; i++) {
if (input.charAt(i) ==="@") {
alert("There's an @ sign at index " + i);
}
}

}
document.getElementById('blast').onclick=pace;
