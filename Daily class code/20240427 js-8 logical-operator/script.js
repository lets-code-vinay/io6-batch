/**
 * 1. function delclaration
 *      use function funcName(){}
 * 2. function expression
 *      we use arrow function
 *      const funcName = () => {}
 *      ES6 Feature
 */

/**
 * Normal Function
 */
function calculateMarksSimple(
  studentName,
  physics,
  chemistry,
  maths,
  comp,
  english
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

calculateMarksSimple("Ankit", 98, 87, 90, 76, 89);
calculateMarksSimple(89, "Ankit", 98, 87, 90, 76);

/**
 * Normal Function --arrow
 */
const calculateMarksSimpleArrow = (
  studentName,
  physics,
  chemistry,
  maths,
  comp,
  english
) => {
  console.log(`Hi ${studentName} ! you are in Arrow function`);

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
};
calculateMarksSimpleArrow("Pooja", 98, 87, 90, 76, 89);

const calculateMarksSimpleDefault = (
  studentName = "",
  physics = 0,
  chemistry = 0,
  maths = 0,
  comp = 0,
  english = 0
) => {
  console.log("----------calculateMarksSimpleDefault----------");
  console.log(`Hi ${studentName} ! you are in Arrow function`);

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
};

calculateMarksSimpleDefault("Pooja", 98, 87, 90);

const calculateMarksStrict = ({
  studentName = "",
  physics = 0,
  chemistry = 0,
  maths = 0,
  comp = 0,
  english = 0,
}) => {
  console.log("----------calculateMarksStrict----------");
  console.log(`Hi ${studentName} ! you are in Arrow function`);

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
};

calculateMarksStrict({
  physics: 89,
  chemistry: 78,
  maths: 79,
  comp: 67,
  english: 90,
  studentName: "Taran",
});

const getRandomValue = ({ number = 0 }) => {
  const randomNumber = Math.random() * 1000;
  const value = randomNumber * number;

  return value.toFixed(2);
};

console.log("getRandomValue-->", getRandomValue({ number: 89 }));

/**
 * Operators
 * 1. Arithmetic operator
 * 2. Logical Operator
 *      >   greater than
 *      <   less than
 *      >=  greter than or equal to
 *      <=  less than or equal to
 *
 * 3. Bitwise Operator
 */
console.log("logical ope --1", 10 > 5); // true
console.log("logical ope --2", 10 < 5); // false
console.log("logical ope --3", 10 > 10); // false
console.log("logical ope --4", 10 < 10); // false
console.log("logical ope --5", 10 <= 10); // C: False, A: true, T:true, P:false
console.log("logical ope --6", 10 >= 10); // true
console.log("logical ope --7", 7 >= 10); // false
console.log("logical ope --8", 10 >= "10"); // true
console.log("logical ope --9", 10 >= "10F"); // false
console.log("logical ope --10", "A" <= "B"); // 65 <= 66
console.log("logical ope --11", "Red" <= "Blue"); // false

// ==  (double equal to) checks only values, not datatype
// === (triple equal to) checks values and datatype

console.log(" equal to -- 1--", 10 == 10); // true
console.log(" equal to -- 2--", 10 == "10"); // true
console.log(" equal to -- 3--", 10 === "10"); // true, value== value, number == string
console.log(" equal to -- 4--", 1 === true); // P: true, C:true A:false, T:true -- false
console.log(" equal to -- 5--", 1 == true); // P: true, C:false A:true, T:false -- true
console.log(" testing to -- 1--", 10 > 9 > 8); // P:true, C:true, A: true, T:true
console.log(" testing to -- 2--", 10 > 9 > false); // P:, C:, A: , T:
console.log(" testing to -- 3--", true > false); // P:, C:, A: , T:

// 10 > 9 == true
// true > 8  == 1 > 8 == false

// 10   -- datatype= number, value= 10
// "10" -- datatype= string, value=10

console.log(" equal to -- 6--", "red" == "Red"); //
// not  ( ! )
console.log("not--1--", !true); // not true == false
console.log("not--2--", !false); // not false == true
console.log("not --3--", !Boolean(""));
console.log("not --4--", !10);
console.log("not equal to--1--", 10 != 10); // 10 == 10 == true, !true == false
console.log("not equal to--2--", true != !false); // P: true, C: false, T: false, A:true
// true != true , true == true --> !true --> false

// Logical AND  (&&)
// Logical OR   (||)

console.log("and--false && false--", false && false); // false
console.log("and--false && true--", false && true); // false
console.log("and--true && false--", true && false); // false
console.log("and--true && true--", true && true); // true

console.log("OR--false || false--", false || false); // false
console.log("OR--false || true--", false || true); // true
console.log("OR--true || false--", true || false); // true
console.log("OR--true || true--", true || true); // true
