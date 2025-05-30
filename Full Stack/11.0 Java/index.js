// window.alert("What Up Doe!");

// var myName = prompt("What is your name?");

// alert(myName + "?");

// myName = "Damion Betters";

// alert("Nope, your name is " + myName);

// function bmiCalculator(weight, heigth) {
//   var bmi = weight / (height * height);
//   return Math.round(bmi);
// }

// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return "Leap year.";
//       } else {
//         return "Not leap year.";
//       }
//     } else {
//       return "Leap year.";
//     }
//   } else {
//     return "Not leap year.";
//   }
// }

// var numberOfPeople = names.length;
// var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
// var randomPerson = names[randomPersonPosition];
// return randomPerson + " is going to buy lunch today!";

let counter = 0;

function count() {
  counter++;
  document.querySelector("h1").innerHTML = counter;

  if (counter % 10 === 0) {
    alert(`The count is now ${counter}`);
  }
}

document.querySelector("button").onclick = count;
