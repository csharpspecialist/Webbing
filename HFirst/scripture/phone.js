

function phCheck() {

  var phone = document.getElementById('letters').value;
  if(phone.length != 8 )
  {
alert("Phone # not correct length");
  }
  else {
    alert("Phone # is good today");
  }
  var uno = phone.substring(0,3);

if(isNaN(uno))
{
alert("number is completely fake");
}
else {
  alert("No dude u r nuts!!!");
}


}

function total() {

  var one = document.getElementById('num1').value;
    var two = document.getElementById('num2').value;

var numTotal = one + two;
alert("your total is " + numTotal);

}


document.getElementById('look').onclick=phCheck;
document.getElementById('find').onclick=total;
