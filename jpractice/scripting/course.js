

function school() {


student1 = { sid: 1000, fname: "Carol", lname: "Jones", district:"A5" };

student2 = { sid: 2000, fname: "Dana", lname: "Edwards" };

document.getElementById('display').innerHTML = student1.fname;

}

 var star

var vehicle;

function chevy() {

star = { make: "Equinox", year: 2011, vin : [2020444, 369898], color: "ICE blue"  }

document.getElementById('showing').innerHTML = star.vin[1];

document.getElementById('open').innerHTML = star.make;

}

function myFunction(){
    chevy();
    school();
}


document.getElementById('bow').onclick=myFunction;
