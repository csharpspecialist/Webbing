
var x;
var y;

function work(){

x = document.getElementById("words").value;

y = x.toCase();

if (y == "yessir")
{
  alert("I Like dancing also!!!");
}
else if  (y =="no")
{
  alert(" I do not like dancing either")
}
  else if
{
alert("We do not understand your answer")
}

}

function data () {

var eats = { mcd: "Big Mac", bk:"Doe", rally: "Big Buford", chip:"Quesedilla"   }

document.getElementById('turn').innerHTML = "  First choice  " + eats.mcd + " 2nd Choice " + eats.rally + " Last Choice  " + eats.chip;

}

document.getElementById('move').onclick=data;


document.getElementById('quest').onclick=work;
