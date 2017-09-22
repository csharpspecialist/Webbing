
var loc1 = 3;
var loc2 = 4;
var loc3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


do {





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



var stats = "You guessed " + guesses + "Times to sink my Battleship...Your accuracy is/was " + (3/guesses);

alert(stats);
