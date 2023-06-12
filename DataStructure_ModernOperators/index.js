"use strict";

//The Object

const restaurant = {
  name: "Woodhouse Grill",
  location: "Banani, Dhaka, Bangladesh",
  categories: ["Chicken", "Beef", "Vegitables"],
  starterMenu: ["Fries", "Onion", "Roll"],
  mainMenu: ["Steak", "Rice", "Platter"],
  operningHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address
  ) {
    console.log(
      `Oder Recieved! ${this.starterMenu[star]} and ${this.mainMenu[mainIndex]} will be delivered to ${ad} at ${time}`
    );
  },
  orderSteak: function (ing1, ing2, ing3) {
    console.log(
      `Here is your Delicious steak with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

//Logical Operator can Use any Data Type, return any data type, short-circuting

// console.log(3 || "Jonas");

// The Rest Operator //

// SPREAD, because on Right Hand Side

// const arr = [1, 2, ...[3, 4]];

// // REST, because on Left Hand Side

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [steak, , platter, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(steak, platter, otherFood);

// //Objects

// const { sat, ...weekDays } = restaurant.operningHours;
// console.log(sat, weekDays);

// //Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 6, 3, 4, 2, 5); //Explanation: Here Numbers where passed as a Rest Parameter which took the numbers and packed inside an array. In the function the for loop looped over each of the element in the array and made a summation

// const x = [23, 5, 7];
// add(...x); //Explanation: Here X is taken as an Array where on the add function the parameter was passed by Spread Operator which distructred the array element and then the rest of the things was done by the above-mentioned method

//Short Circuiting:
// "||" operator first checks if the value is truthy, if not then only the truthy one gets return
// "&&" operator first checks if the value is falsy, if yes then its immediately returns the falsy value

//Nullish Coalescing:

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // ?? Nullish: null and undefined (Not 0 or '')

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: "Woodhouse",
//   numGuests: 0,
// };
// const rest2 = {
//   name: "MeatTheory",
//   owner: "Rashik",
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

//Coding Challange: Football Betting Application (Starts Here)

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //task1

// const [players1, players2] = game.players;
// // console.log(players1, players2);

// //task2

// const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// //task3

// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// //task4

// const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];
// // console.log(playersFinal);

// //task5
// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// // console.log(team1, draw, team2);

// //task6

// const printGoals = function (...players) {
//   //   console.log(`${players.length} Goals were scored`);
//   for (let i = 0; i < players.length; i++) {
//     // console.log(players[i]);
//   }
// };
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// //task7

// // const winner = team1 && draw && team2;
// // console.log(`The winner is ${winner}`);
// // // console.log(winner);

// team1 < team2 && console.log("Team 1 is more likely to Win");
// team1 > team2 && console.log("Team 2 is more likely to Win");

//Coding Challange: Football Betting Application (Ends Here)

//For of Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }
// for (const item of menu.entries()) {
//   console.log(`Menu ${item[0] + 1} : ${item[1]}`);
// }
// for (const [i, el] of menu.entries()) {
//   console.log(`Menu ${i + 1} : ${el}`);
// }

//Optional Chaining

// if (restaurant.operningHours && restaurant.operningHours.mon.open) {
//   //   console.log(restaurant.operningHours.mon.open);
// }

// console.log(restaurant.operningHours.mon?.open);

//Bracket Notation is to access a Property of an Object

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   //   console.log(day);
//   const open = restaurant.operningHours[day]?.open ?? "Closed";
//   console.log(`On ${day} we open at ${open}`);
// }

//Coding Challange 2:  (Starts Here)

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//Task 1

// for (const [goalNumber, playerName] of game.scored.entries()) {
//   console.log(`Goal ${goalNumber + 1}: ${playerName}`);
// }

// //Task 2 (Need to work more) -> Object.Keys() & Object.Values()

// const odds = Object.values(game.odds);
// let avg = 0;
// for (const oddNumber of odds) {
//   avg = avg + oddNumber;
//   avg = avg / odds.length;
// }
// console.log(avg);

// //Task 3 (Need to work more)
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamName = team === "x" ? "draw" : `Vicotry ${game[team]}`;
//   console.log(`Odd of ${teamName}: ${odd}`);
// }

// //Bonus

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

/* Set:
1. Ignore duplicate value and makes a new Object
2. Like array.length it has set.size
3. it can find property with set.has method which can find element and returns boolean
*/
// const ordersSet = new Set(["Pizza", "Pasta", "Pizza", "Risotto", "Pasta"]);

// console.log(ordersSet);
// console.log(new Set("Jonas"));

// console.log(ordersSet.size);
// console.log(ordersSet.has("Bread"));

// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");

// ordersSet.delete("Pizza");

// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const stafUnique = new Set(staff);
// console.log(stafUnique);
// const stafUniqueArray = [...new Set(staff)];
// console.log(stafUniqueArray);

//Map

// const rest = new Map();
// rest.set("name", "Woodhouse Grill");
// rest.set(1, "Dhaka, Bangladesh");
// rest.set(2, "Chittagong, Bangladesh");
// rest
//   .set("categories", ["Chicken", "Beef", "Vegitables"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are close");
// console.log(rest);

// console.log(rest.get("name"));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//Map Iteration

// const question = new Map([
//   ["question", "What is the best Programming Language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   ["wrong", 2],
//   [(true, "Correct 😁")],
//   [(false, "Try again!")],
// ]);
// // console.log(question);

// //Convert Object to Map
// console.log(Object.entries(restaurant.operningHours));

// const hoursMap = new Map(Object.entries(restaurant.operningHours));
// // console.log(typeof hoursMap);

// console.log(question.get("question"));

// for (const [key, value] of question) {
//   //   console.log(key, value);
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// // const answer = Number(prompt("Your Answer"));

// // console.log(answer);

// // const correctAnswer = answer === question.get(correct);
// // console.log(correctAnswer);

// // const correctAnswer = question.get(question.get("correct") === answer);
// // question.get(question.get("correct") === answer)
// //   ? console.log(question.get(true))
// //   : console.log(question.get(false));

// //Convert Map to Array

// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//Coding Challange #3 (Starts Here)

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// for (const [key, events] of gameEvents) {
//   console.log(events);
// }

// const events = new Set(gameEvents.values());
// console.log(events);

// const profile = {
//   firstName: "Hasibul",
//   lastName: "siam",
//   Age: 24,
//   sex: "Male",
// };

// const { lastName, ...rest } = profile;
// console.log(rest);

//Task 1:

// for (const [time, eventName] of gameEvents.entries()) {
//   console.log(typeof eventName);
//   const event = eventName;
// }

// const events = [...new Set(gameEvents.values())];
// console.log(events);

//Task 2:

// gameEvents.delete(64);
// console.log(gameEvents);

//Task 3:

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

//Task 4:

// for (const [gameTime, gameEvent] of gameEvents.entries()) {
//   //   console.log(gameTime, gameEvent);
//   gameTime < 45
//     ? console.log(`[FIRST HALF] ${gameTime}: ${gameEvent} `)
//     : console.log(`[Second HALF] ${gameTime}: ${gameEvent} `);
// }

//Strings (Hardcoded Part)

// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[3]);

// console.log("B737"[0]);
// console.log(airline.length);

// console.log(airline.lastIndexOf("r"));

// console.log(airline.indexOf("Portugal"));
// console.log(airline.slice(4, 7)); //Starting Index Number will be included and Before Ending Index number it stops execution

// //Strings (Dynamic Part)

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are Middle Seats

//   if (seat.slice(-1) === "B" || seat.slice(-1) === "E") {
//     console.log("Seat is in Middle");
//   } else {
//     console.log("Seat is not in Middle");
//   }
// };
// checkMiddleSeat("11B");
// checkMiddleSeat("22A");

// const airline = "TAP Air Portugal";

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = "jOnAS";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = "hello@jonas.io";
// const loginEmail = " Hello@Jonas.Io \n";

// // const lowerEmail = loginEmail.toLocaleLowerCase();
// // const trimmedEmail = lowerEmail.trim(); //Ignores the White Spaces
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(normalizedEmail);

// //Replacing

// const priceGB = "288,97e";
// const priceUS = priceGB.replace("e", "$").replace(",", ".");
// console.log(priceUS);

//Price Converter (BDT to USD)

// const inputAmount = Number(
//   prompt(`**Note: 1 BDT = 105 USD** \n Please Insert the price`)
// );

// const convertedAmount = inputAmount * 105;

// console.log(`After the Convertion ${inputAmount}BDT = ${convertedAmount}$`);
// 5;

//Price Converter (Pound to USD) £

// const inputAmount = Number(
//   prompt(`**Note: 1 Pound = 1.26 USD** \n Please Insert the price`)
// );

// const convertedAmount = inputAmount * 1.26 + "£";

// console.log(`After the Convertion ${convertedAmount.replace("£", "$")}`);
// 5;

// const announcement =
//   "All passengers come to boarding door 23. \n Boarding door 23!";

// console.log(announcement.replace(/door/g, "gate")); //With Regex

//String Split and Join

// const [firstName, lastName] = "Injamul Rashik".split(" ");

// console.log(firstName, lastName);

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

//Padding

// const message = "go to gate 23!";
// console.log(message.padStart(25, "+").padEnd(35, "+"));
// console.log("Jonas".padStart(25, "+"));

//Coding Challange #4 (Starts Here)

/*

underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_depurture

*/

// document.body.append(document.createElement("textArea"));
// var button = document.createElement("button");

// var span = document.createElement("span");
// span.innerHTML = "Click Here!";
// button.appendChild(span);
// document.body.append(button);

// button.onclick = function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;

//     const padding = `${output.padEnd(20)}${"✅".repeat(i + 1)}`;
//     console.log(padding);
//   }
// };
