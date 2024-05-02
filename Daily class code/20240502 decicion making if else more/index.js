// console.log("this is js file");

// More on if...else condition

// Nested if---else statement
// if (expression) {
//   // some code
// } else if (expression) {
//   // some code
// } else {
// }

// // if---else statement
// if (expression) {
//   // some code
// } else {
//   // some code
// }

// Ques: Write a program to find the Zodiac name.
//    User Can enter the month and day date

// Example : -
// Input : Day = 10, Month = December
// Output : Sagittarius
// Explanation :
// People born on this date have a zodiac Sagittarius.

// Input : Day = 7, Month = September
// Output : Virgo

// WESTERN ASTROLOGY STAR SIGN DATES :

// Aries (March 21-April 19)
// Taurus (April 20-May 20)
// Gemini (May 21-June 20)
// Cancer (June 21-July 22)
// Leo (July 23-August 22)
// Virgo (August 23-September 22)
// Libra (September 23-October 22)
// Scorpio (October 23-November 21)
// Sagittarius (November 22-December 21)
// Capricorn (December 22-January 19)
// Aquarius (January 20-February 18)
// Pisces (February 19-March 20)

// 11 october

// arrow function
// const Name = () => {};
// Name();
// simple function using function keyword
// function Name() {}
// Name();

const get_Zodiac_Name = (day, month) => {
  console.log("inside function");
  let zodiac_name = "";
  if (month === "March") {
    if (day >= 21) {
      zodiac_name = "Aries";
    } else {
      zodiac_name = "Pisces";
    }
  } else if (month === "April") {
    if (day > 20) {
      zodiac_name = "Taurus";
    } else {
      zodiac_name = "Aries";
    }
  } else if (month === "May") {
    if (day >= 21) {
      zodiac_name = "Gemini";
    } else {
      zodiac_name = "Taurus";
    }
  } else if (month === "June") {
    if (day >= 21) {
      zodiac_name = "Cancer";
    } else {
      zodiac_name = "Gemini";
    }
  } else if (month === "July") {
    if (day >= 23) {
      zodiac_name = "Leo";
    } else {
      zodiac_name = "Cancer";
    }
  } else if (month === "August") {
    if (day >= 23) {
      zodiac_name = "Virgo";
    } else {
      zodiac_name = "Leo";
    }
  } else if (month === "September") {
    if (day >= 23) {
      zodiac_name = "Libra";
    } else {
      zodiac_name = "Virgo";
    }
  } else if (month === "October") {
    if (day >= 23) {
      zodiac_name = "Scorpion";
    } else {
      zodiac_name = "Libra";
    }
  } else if (month === "November") {
    if (day >= 22) {
      zodiac_name = "Sagittarius";
    } else {
      zodiac_name = "Scorpion";
    }
  } else if (month === "December") {
    if (day >= 22) {
      zodiac_name = "Capricorn";
    } else {
      zodiac_name = "Sagittarius";
    }
  } else if (month === "January") {
    if (day >= 20) {
      zodiac_name = "Aquarius";
    } else {
      zodiac_name = "Capricorn";
    }
  } else if (month === "February") {
    if (day >= 19) {
      zodiac_name = "Pisces";
    } else {
      zodiac_name = "Aquarius";
    }
  } else {
    window.alert("Please enter valid month or Day");
  }
  document.write("Your Zodiac Name is : ", zodiac_name);
};

let date_day = Number(prompt("please enter day date"));
let month = String(prompt("please enter month of birth"));
console.log("input", date_day, month);
get_Zodiac_Name(date_day, month);
