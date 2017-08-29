

function placing() {

var word = document.getElementById('food').value;
 var res = word.toUpperCase();

switch (res) {
  case 'SAUSAGE':
  document.getElementById('display').innerHTML = ('Sausage is good');
    break;

case 'BEEF':
  document.getElementById('display').innerHTML =('Beef is a great choice');
  break;

  default:
    document.getElementById('display').innerHTML = ('We do not understand your answer');
    break;
}


}
