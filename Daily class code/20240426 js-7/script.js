/**
 * Simple Calculations
 */

const num1 = 110;
const num2 = 784;

const sum = num1 + num2;
console.log("sum-->", sum);
console.log("sum-->1 -->", 100 + 100); // 200;
console.log("sum-->2 -->", "100" + 100); // A: 100, C:100 T:100100 P: 100100 -- 100100
console.log("sum-->3 -->", 100 + "100"); // A: 200, C: 100, T: 200, P: 100  -- 100100
console.log("sum-->4 -->", "100" + "100"); // A: 100, C: NaN, T:NaN ,P:100100 - 100100
console.log("sum-->5 -->", "100" - "100"); // C:0, T:0, A: 100, P:100  --- 0
console.log("sum-->6 -->", 100 - "100"); // A: 100, T: 0, P: 100, C: 0 --- 0
console.log("sum-->7 -->", "100" - 100); // C:0  A:100 T:0 P:100    --- 0
console.log("sum-->8 -->", 100 - 100); // 0 0 0 0  -- 0
console.log("sum-->9 -->", "100D" - 100); // P:NaN C:NaN A:No Idea T:NaN
console.log("sum-->10 -->", "100D" + 100); // P:NaN C:NaN A:No Idea T:NaN  -- 100D100
console.log("sum-->11 -->", 100 + 100 + true); // C:201 A:2001  T:201 P: 2001
console.log("sum-->12 -->", 100 + 100 + false); // C:201 A:2001  T:201 P: 2001
console.log("sum-->13 -->", 100 + 100 + Number(true), Number(true)); // C:201  A:2001  T:201  P:201
console.log("sum-->14 -->", 100 + "100" + true); // C:101100  A:1001001  T:100100true  P:1001001

/**
 * functions
 *  Functions are used to perform any particular tasks
 * 1. Predefined function
 *      Functions from Js is pre-defined function
 *        alert()
 *        console.log()
 *        Math.random()
 *
 * 2. user defined function
 *    the functions created by developer to minimize repetition, efforts
 */

function addTwoNumbers(n1, n2) {
  const sum = n1 + n2;
  console.log("sum in function--", sum);
}

addTwoNumbers(10, 78);

addTwoNumbers(12, 178);
addTwoNumbers(102, 878);
addTwoNumbers(1078, 7128);
addTwoNumbers(510, 478);
addTwoNumbers(170, 178);

function carpenter() {
  console.log("I made furniture");

  plumber();
}

function barber() {
  console.log("I will cut your hair");
}

function plumber() {
  console.log(" i will fix your pipes");
  barber();
}

carpenter();

/**
 * Create a program to calculate number and average of 5 subjects
 */

let studentName = "Ankit";
let phy = 80;
let chem = 90;
let math = 70;
let comp = 80;
let eng = 65;

function calculateMarks(
  studentName = "",
  physics = 0,
  chemistry = 0,
  maths = 0,
  comp = 0,
  english = 0
) {
  console.log(`Hi ${studentName} !`);

  const sumOfMarks = physics + chemistry + maths + comp + english;

  console.log(`You got ${sumOfMarks} / 100, 
  Your marks are in 
  Physics: ${physics}, 
  English: ${english},
  Chemistry: ${chemistry},
  Computer: ${comp},
  Maths: ${maths} 
    
  `);

  const average = sumOfMarks / 5;

  console.log(`Your average score is ${average}`);
  document.write(
    `<h1>${studentName}: Your average score is ${average}</h1></br>`
  );
}
/**
 * DRY
 * Do-not Repeat yourself
 */

calculateMarks(studentName, phy, chem, math, comp, eng);
calculateMarks("Chahat", 87, 81, 98, 67, 75);
calculateMarks("Pooja", 74, 81, 89, 76, 97);
calculateMarks("Taran", 34, 34, 34, 34);
calculateMarks();
calculateMarks(75, "Chahat", 87, 81, 98, 67);

function calculateStrictMarks({
  studentName = "",
  physics = 0,
  chemistry = 0,
  maths = 0,
  comp = 0,
  english = 0,
}) {
  console.log(`Hi ${studentName} !`);
  console.log("type of input", typeof physics, physics);
  const sumOfMarks =
    Number(physics) +
    Number(chemistry) +
    Number(maths) +
    Number(comp) +
    Number(english);

  console.log(`You got ${sumOfMarks} / 100, 
  Your marks are in 
  Physics: ${physics}, 
  English: ${english},
  Chemistry: ${chemistry},
  Computer: ${comp},
  Maths: ${maths} 
    
  `);

  const average = sumOfMarks / 5;

  console.log(`Your average score is ${average}`);
  document.write(
    `<h1>${studentName}: Your average score is ${average}</h1></br>`
  );
}

calculateStrictMarks({
  comp: 75,
  studentName: "Chahat",
  maths: 87,
  english: 81,
  physics: 98,
  chemistry: 67,
});

/**
 * Write a program to fins the area of square
 */

function areaOfSquare({ side = 0 }) {
  console.log(`Side of Square: ${side}`);
  const area = side * side;
  // const area = Math.pow(side, 2);
  console.log(`The Area of square is: ${area}`);
}

areaOfSquare({ side: 10 });
areaOfSquare({ side: 547 });
areaOfSquare(547);

// const sideFromKeyBoard = prompt("Enter Side of Square");

// areaOfSquare({ side: sideFromKeyBoard });

studentName = prompt("Enter name of Student");
phy = prompt("Enter physics marks");
chem = prompt("Enter Chemistry Marks");
math = prompt("Enter Math Marks");
comp = prompt("Enter Computer Marks");
eng = prompt("Enter English Marks");

calculateStrictMarks({
  comp: comp,
  studentName: studentName,
  maths: math,
  english: eng,
  physics: phy,
  chemistry: chem,
});
