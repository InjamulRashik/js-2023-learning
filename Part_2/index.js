"use strict"; //Need to be used in order to get actual error in the console

/*
Function Declaration Vs Function Expression
*/

//Function Declaration
//const age = calAge1(1996); **Pre-declaration also works**

// function calAge1(birthYear) {
//   return 2023 - birthYear;
// }
// const age = calAge1(1996);

// //console.log(age);

// //Function Expression
// //**Pre-declaration won't work**

// const calAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// const age2 = calAge2(1996);

// //console.log(age2);

// /**
//  * Arrow Function
//  */

// const calAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calAge3(1997);

// console.log(age3);

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let dolphineAverage = calcAverage(44, 23, 71);
// let koalasAverage = calcAverage(65, 54, 49);
// console.log(dolphineAverage);
// console.log(koalasAverage);

// const checkWinner = function (avgDolphine, avgKoala) {
//   if (avgDolphine >= 2 * avgKoala) {
//     console.log(`Dolphine Wins 🏆 (${avgDolphine} vs ${avgKoala}) `);
//   } else if (avgKoala >= 2 * avgDolphine) {
//     console.log(`Koalas Wins 🏆 (${avgKoala} vs ${avgDolphine}) `);
//   } else {
//     console.log("No Team Wins 🥺");
//   }
// };

// checkWinner(dolphineAverage, koalasAverage);

// //Test2

// dolphineAverage = calcAverage(85, 54, 41);
// koalasAverage = calcAverage(23, 34, 27);

// checkWinner(dolphineAverage, koalasAverage);

// const calcTip = (billValue) => {
//   if (billValue >= 50 && billValue <= 300) {
//     return billValue * 0.15;
//   } else {
//     return billValue * 0.2;
//   }
// };
// console.log(calcTip(100) + 100);

// const bills = [125, 555, 44];
// const tips = [];

// const calcTip = (billValue1, billValue2, billValue3) => {
//   if (
//     billValue1 &&
//     billValue2 &&
//     billValue3 >= 50 &&
//     billValue1 &&
//     billValue2 &&
//     billValue3 <= 300
//   ) {
//     tips.push(billValue1 * 0.15, billValue2 * 0.15, billValue3 * 0.15);
//     return billValue1 * 0.15, billValue2 * 0.15, billValue3 * 0.15;
//   } else {
//     tips.push(billValue1 * 0.2, billValue2 * 0.2, billValue3 * 0.2);
//     return billValue1 * 0.2, billValue2 * 0.2, billValue3 * 0.2;
//   }
// };

// console.log(calcTip(bills[0], bills[1], bills[2]));
// console.log(tips);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// const jonas = {
//   firstName: "John",
//   lastName: "Doe",
//   job: "Instructor",
// };

// console.log(jonas.firstName);

// const findKey = prompt(
//   "What do you want to choose between First Name, Last Name and Job"
// );

// // console.log(jonas.findKey);
// // console.log(jonas[findKey]);

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.firstName + " " + mark.lastName}'s BMI (${
//       mark.bmi
//     }) is higher than ${john.firstName + " " + john.lastName}'s BMI (${
//       john.bmi
//     })`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.firstName + " " + john.lastName}'s BMI (${
//       john.bmi
//     }) is higher than ${mark.firstName + " " + mark.lastName}'s BMI (${
//       mark.bmi
//     })`
//   );
// }

// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function () {
//   for (let i = 0; i < bill.length; i++) {
//     tips[i] = bill[i];
//   }
// };

// calcTip();
// console.log(tips);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));

// const firstDecimal = 4.0;
// const secondDecimal = 4.32;

// console.log(typeof firstDecimal);

// const sum = Number(firstDecimal.toFixed(2)) + secondDecimal;

// console.log(sum);

// const PI = Math.PI;
// console.log(typeof parseFloat(PI));

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", (inputStdin) => {
//   inputString += inputStdin;
// });

// process.stdin.on("end", (_) => {
//   inputString = inputString
//     .trim()
//     .split("\n")
//     .map((string) => {
//       return string.trim();
//     });

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// function main() {
//   // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

//   const PI = Math.PI;

//   let rad = readLine();

//   // Print the area of the circle:

//   const area = PI * (rad * rad);
//   console.log(area);

//   // Print the perimeter of the circle:
//   const perimeter = 2 * PI * rad;
//   console.log(perimeter);

//   try {
//     // Attempt to redefine the value of constant variable PI
//     PI = 0;
//     // Attempt to print the value of PI
//     console.log(PI);
//   } catch (error) {
//     console.error("You correctly declared 'PI' as a constant.");
//   }
// }

// function getLetter(s) {
//   let letter = s.charAt(0);

//   // Write your code here
//   switch (true) {
//     case ["a", "e", "i", "o", "u"].includes(letter):
//       console.log("A");
//   }
//   return letter;
// }

// console.log(getLetter(""));

function vowelsAndConsonants(s) {
  const vowelsCheck = ["a", "e", "i", "o", "u"];
  const vowels = [];
  const consonants = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i).toLowerCase();

    if (vowelsCheck.includes(char)) {
      vowels.push(char);
    } else if (/[a-z]/.test(char)) {
      consonants.push(char);
    }
  }
  for (let i = 0; i < vowels.length; i++) {
    console.log(vowels[i]);
  }
  for (let i = 0; i < consonants.length; i++) {
    console.log(consonants[i]);
  }
}

vowelsAndConsonants("JavaScriptLoop");
