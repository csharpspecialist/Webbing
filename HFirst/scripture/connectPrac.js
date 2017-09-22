
var randomLoc = Math.floor(Math.random() * 5);
var loc1 = randomLoc;
var loc2 = loc1 + 1;
var loc3 = loc2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

do {
// this one is done using a do while loop...it does the same thing
guess = prompt("Ready, aim, fire! (enter a number 0-6):");


if (guess > 6 || guess < 0)
{alert("Your guess must be between 0 and 6");}
 else {guesses = guesses + 1;



if (guess == loc1  || guess == loc2 || guess == loc3)
    { alert("You hit a Ship");

      hits = hits +1;
if(hits == 3 ) {isSunk = true;
alert("You sank my Battleship");
 }
}else {
  alert("U Missed!!!");
}



   }
  }

while (isSunk == false)



var stats = "You guessed " + guesses + " Times to sink my Battleship...Your accuracy is/was " + (3/guesses * 100 + "%");

alert(stats);
