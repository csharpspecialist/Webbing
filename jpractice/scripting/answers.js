

var x;

var y;

function work(){

x = document.getElementById("tBox1").value;

y = x.toUpperCase();


if (y == "YES")
{
  alert("I Like dancing also!!!");
}
else if  (y =="NO")
{
  alert(" I do not like dancing either")
}
  else
{
alert("We do not understand your answer")

}

}


function whip () {

var good = { fname: "John", lname:"Doe", address: "200 Main St", city:"Cleveland"   }

document.getElementById('smalls').innerHTML = "  First Name  " + good.fname + " Last Name " + good.lname + " City  " + good.city;

}
