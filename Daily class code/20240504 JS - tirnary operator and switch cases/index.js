if (2 + 2 == 4) {
  console.log("this is a true statement");
} else {
  console.log("this is a false statement");
}

// ternary Operator

3 + 3 < 5 ? console.log("this is true") : console.log("this is false");

// Ramesh's age is 45 and Rakesh age is 65. please find who is eldest

const rameshAge = 45;
const rakeshAge = 65;

if (rameshAge > rakeshAge) {
  console.log("Ramesh is elder");
} else {
  console.log("Rakesh is elder");
}

rameshAge > rakeshAge
  ? console.log("Ramesh is elder2")
  : console.log("Rakesh is elder2");

/**
 * If the age of Ra, Shyam and Ajay entered through keyboard. Write the program to find the youngest
 */
// const ajay = Number(prompt("Enter Ajay's Age"));
// const ram = Number(prompt("Enter Ram's Age"));
// const shyam = Number(prompt("Enter Shyam's Age"));

// if (ajay < ram && ajay < shyam) {
//   console.log("Ajay is youngest");
// } else if (ram < ajay && ram < shyam) {
//   console.log("Ram is youngest");
// } else if (shyam < ajay && shyam < ram) {
//   console.log("Shyam is youngest");
// }

// ajay < ram && ajay < shyam
//   ? console.log("Ajay is youngest-2")
//   : ram < ajay && ram < shyam
//   ? console.log("Ram is youngest-2")
//   : console.log("Shyam is youngest-2");

const day = "sunday";

if (day == "monday") {
  console.log("This is Monday");
} else if (day == "tuesday") {
  console.log("This is tuesday");
} else if (day == "wednesday") {
  console.log("This is tuesday");
} else if (day == "thursday") {
  console.log("This is Thursday");
} else if (day == "friday") {
  console.log("This is Friday");
} else if (day == "saturday") {
  console.log("This is Saturday");
} else if (day == "sunday") {
  console.log("This is Sunday");
}

switch (day) {
  case "monday":
    console.log("This is Monday");
    break;
  case "tuesday":
    console.log("Tuesday printed");
    break;
  case "wednesday":
    console.log("Wednesday printed");
    break;
  case "thursday":
    console.log("Thursday printed");
    break;
  case "friday":
    console.log("Friday printed");
    break;
  case "saturday":
    console.log("Saturday printed");
    break;
  case "sunday":
    console.log("Sunday printed");
    break;
  default:
    console.log("Wrong value entered");
    break;
}
