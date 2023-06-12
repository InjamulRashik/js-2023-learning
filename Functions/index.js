"use strict";

// const bookingArray = [];

// const createBooking = function (
//   flightNumber,
//   numberPassanger = 1,
//   price = 199 * numberPassanger
// ) {
//   //ES5 Pattern
//   // numberPassanger = numberPassanger || 1;
//   // price = price || 199;

//   const booking = {
//     flightNumber,
//     numberPassanger,
//     price,
//   };
//   console.log(booking);
//   bookingArray.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 8);
// createBooking("LH123", 8, 300);

//Value vs Reference

// const flight = "LH234";
// const rashik = {
//   name: "Injamul Rashik",
//   passport: 23283328323,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = `Mr. ${passenger.name}`;

//   if (passenger.passport === 23283328323) {
//     alert("Check In");
//   } else {
//     alert("Wrong Passport");
//   }
// };

// checkIn(flight, rashik);
// console.log(flight);
// console.log(rashik);

// const flightNum = flight;
// const passenger = rashik;

//Passing by Value and Passing by Reference need to learn again*******

//First class and Higher Order function

//Callback Function

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// //Higherorder Fucntion

// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

//Function Returning Function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet("Hey");
// greeterHey("Rashik");
// greeterHey("Injamul");

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet("Hello")("World");

// const airAsia = {
//   airline: "Air Asia",
//   iataCode: "AA",
//   bookings: [],
//   book(flightNumber, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNumber}`,
//       name,
//     });
//     console.log(airAsia);
//   },
// };

// airAsia.book(239, "Injamul Rashik");
// airAsia.book(635, "Habibul Amin");

//Bind Method

//Coding Challange

// const poll = {
//   question: "What is your favorite  programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   answers: new Array(4).fill(0),
//   //Get Answer
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n ${this.options.join(
//           "\n"
//         )} \n (Write Option Number) `
//       )
//     );
//     console.log(answer);

//     //Register answer
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     console.log(this.answers);
//   },
// };
// poll.registerNewAnswer();

/*

Bind and Call Concept is not clear
*/

//Coding Challange #2

// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();
