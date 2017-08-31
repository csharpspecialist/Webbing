

function mercury() {


var ford = { name:"F-150", year: 2005, model: "XLT"   };

document.getElementById('display').innerHTML = ford.name;

}
 var star


 function marvel() {
    star = {xman:"Colossus", avenger:"Iron Man", thunder: "Thor" }

document.getElementById('doom').innerHTML = star.xman;

 }

document.getElementById('shehulk').onclick=marvel;

var vehicle;

function chevy() {

vehicle = { make: "Equinox", year: 2011, vin : [2020444, 369898], color: "ICE blue"  }

document.getElementById('showing').innerHTML = vehicle.vin[1];

document.getElementById('open').innerHTML = vehicle.make;

}
document.getElementById('please').onclick=mercury;
// document.getElementById('buttie1').onclick=chevy;
//
// document.getElementById('short').onclick=mercury;

document.getElementById('bow').onclick=mercury;
