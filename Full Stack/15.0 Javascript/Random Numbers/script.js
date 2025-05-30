"use strict";
prompt("What is your name?");
prompt("What is their name?");

const loveScore = Math.floor(Math.random() * 100) + 1;
console.log(loveScore);

function loveMessage() {
  if (loveScore > 70) {
    alert(
      `Your love score is ${loveScore}%! You love each other like Kanye loves his people!`
    );
  } else if (loveScore < 70 && loveScore > 30) {
    alert(
      `Your love score is ${loveScore}%! You love is meh! Like your mom's face!`
    );
  } else {
    alert(`Your love score is ${loveScore}%. Good luck out there.`);
  }
}
loveMessage();
