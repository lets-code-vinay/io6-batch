/*


const ab = 150;
const bc = 78;
console.log('Hi Pooja. I"m javascript--', ab + bc);
*/

// Single line comment
/**
 * This is for multiline comment
 *
 */

/**
 * JS output
 */
// 1. By console
console.log("Hello Ankit");

// 2. By Alert Box
// alert("Hi Team");
// alert("How are you?");

// 3. Document.write
document.write("<h1>Hello wonderfull people </h1>");

/**
 * Data-type use in JS
 *
 * 1. Primitive Data-type
 *      a. number
 *          0,1,2,3,4,5,6,7,8,9, 888, 758, -78,-8951
 *      b. String  ('Anything written in quotes')
 *           anything written in quotes
 *              Single quotes       '  '
 *              double quotes       "  "
 *              template literal    `  `
 *              /I love javascript/g
 *      c. Boolean  (true/false)
 *              true   1
 *              false  0
 *      d. null (it occupy memory location, but it has no value)
 *
 *      e. undefined (it occupy memory location, but needs value to be assigned)
 *                      or no values assigned yet
 * 2. Non-Primitive data-type
 *      a. Array
 *          it is like container of multiple value in a sequence
 *          [345, 'hwllo', false, 'apple', apple, undefined]
 *      b. Object
 *          it is like container of multiple value in key value pair
 *          {
 *          age:50,
 *          education:'b.a'
 *              }
 */

/**
 * Assign operator
 *   =
 * let abc = '500';
 */

/**
 * Variables
 */
let i;
let x = 10;

x = 20;

console.log("x", x); // 20

let y = 30;
y = x;
console.log("y--->", y); // x, 20, 30, undefined

let z = 30;
z = "x";
z = i;
console.log("z--->", z); //

// C 20 , x ,           x
// A 20 , undefined,    i
// T 20 , undefined ,   i
// P 20 , x ,           i

const fruits = ["Banana", "kiwi", "cherry"];

const student = {
  name: "Pooja",
  age: 30,
  sub: "Physics",
};

/**
 * let -- ES6 --
 *          local scope variable
 *          Value can be updated
 * const -- ES6
 *          local scope variable
 *          Value can not be updated with const
 * var --
 *          Global scope variable
 *          Value can be updated
 */

var apple = "red";
apple = "yellow";
apple = null;

console.log("apple--", apple);

/**
 * Rule to declare variable
 * 1. never declare variable with same names
 * 2. Never use reserved keywords
 *      this, if, for, return, break, switch, let, const, var, function, class
 * 3. Never initialize any variable with number or spcl character
 *      But we can use $ and _ at starting
 * 4. Never assign any value from reserved keyword
 * 5. Never use any space in variable
 * 6. Never use - (hyphen) in variable
 * 7. Never use any special character in Variable
 * 8. If you are using any multi word variable name, must use that in camelCase
 * 9. JS is case-sensitive language
 */

const fortKnight = "class is going on";

console.log("fort---", fortKnight);

const COLOR_RED = "#f00";
const color_red_light = "f01";
const COLOR_BLACK = "#000";

const age = 50;
const age2 = "50";

console.log("age--->", age, typeof age);
console.log("age2--->", age2, typeof age2);

const fees = 25000;
const fees2 = "30red";

/**
 * 1. Method to check if datatype is number
 */
console.log("using typeof-->", typeof fees == "number"); // 'number' == 'number'
console.log("using typeof fees2-->", typeof fees2 == "number"); // 'string' == 'number'

/**
 * 2. Method to check if datatype is number using isNaN()
 */
console.log("using isNaN- fees---> ", isNaN(fees));
console.log("using isNaN- fees2---> ", isNaN(fees2));
console.log("using isNaN- fees2---> ", isNaN("D10"));

/**
 * 3. Method to check if datatype is number using Number.isInteger()
 */
console.log("using Number.isInteger- fees---> ", Number.isInteger(fees));
console.log("using Number.isInteger- fees2---> ", Number.isInteger(fees2));

/**
 * Math Library
 */

const num1 = 121;
// To find any square root
console.log("math square root-->", Math.sqrt(num1));
console.log("math square root2-->", Math.sqrt(196));
console.log("math square root3-->", Math.sqrt(225));

// To get value of power of
console.log("power of 10, 3--> ", Math.pow(10, 3));
console.log("power of 19, 9-->", Math.pow(19, 9));
console.log("power of  1, 15 -->", Math.pow(1, 15));

// To get any random value
console.log("random 1 -->", Math.random() * 100);

//
let number1 = 64.5434512001;
console.log("math.ceil", Math.ceil(number1));
console.log("math.floor", Math.floor(number1));
console.log("math.round", Math.round(number1));

console.log("math.max", Math.max(10, 20, 25, 5, 3, -5, 1));
console.log("math.min", Math.min(10, 20, 25, 5, 3, -5, 1));

console.log("Math.trunc-->", Math.trunc(number1));

console.log("toFixed()-->", number1.toFixed(2));

let num2 = 121;
let num3 = "121";

console.log("num2", num2);
console.log(
  "num3",
  num3,
  Number(num3),
  Number("151"),
  Number("151REd"),
  Number("987"),
  Number("987.5"),
  Number("987.5a")
);

console.log("calculation1", 100 + 251);
console.log("calculation2", "100" + 251);

console.log("calculation3", 251 - 100);
console.log("calculation4", "251" - 100);
console.log("calculation5", 251 - "100");

console.log("calculation6", 251 * "10");
console.log("calculation7", 251 / "10");

/**
 * String Datatype
 */

/**
 * What is string?
 *
 * a. String is primitive data-type
 * b. Whatever written inside quotes (double, single quote), template literals(`` ) and /this is string/i
 */

let city = "Ludhiana";
city = `Amritsar`;
city = /Moga/g;
city = /Malrekotla/i;

/**
 * ES6 features list
 * 1. Template Literals
 * 2. Promises
 * 3. Array prototypes
 * 4. default
 */

/**
 * Template literals
 * 1. ES6 feature
 * 2. It uses backticks(` `) to wrap string
 * 3. We can write multiline string by using TL.
 */

let oldPara = `If you're looking for random paragraphs, 
            you've come to the right place. When a random word 
            or a random sentence isn't quite enough, 
            the next logical step is to find a random paragraph. 
            We created the Random Paragraph Generator with you in mind. 
            The process is quite simple. 
            Choose the number of random paragraphs you'd
            like to see and click the button. 
            Your chosen number of paragraphs will instantly appear.`;

let para = "I'm engineer.";
para = 'He said, "He is lawyer"';

/**
 * What are prototypes in JS?
 * Prototypes are kind of helping function to reduce effort and increase the productivity
 * String prototype
 *   string.length
 *   string.replace()
 * Array Prototype
 *   .map()
 *   .find()
 *   .filter()
 */

/**
 * String.length
 * 1. To check the counts of characters in string
 */
console.log("string length-1-->", para.length);
console.log("string.length --2-->", oldPara.length);

/**
 * String.toUpperCase()
 * 1. Convert all the letters to uppercase
 */
console.log("to uppercase 1--->", para.toUpperCase());

/**
 * String.toLowerCase()
 * 1. Convert all the letters to lowercase
 */
console.log("to lowercase 1--->", para.toLowerCase());

let isRaining = true;

let percentage = 500;

console.log(
  "percentage-->",
  typeof percentage,
  typeof isRaining,
  percentage,
  isRaining
);

/**
 * Convert any datatype to string
 * 1. String()
 * 2. abc.toString();
 */
console.log(
  "Convert to string using String()--",
  isRaining,
  String(isRaining),
  percentage,
  String(percentage)
);

console.log(
  "Convert to string using toString()--",
  isRaining,
  isRaining.toString(),
  percentage,
  percentage.toString()
);

para = 'He said, "He is Coolie"';
/**
 * String.includes()
 *
 * To check if any given string existing or not
 */
console.log("--includes", oldPara.includes("para"));

/**
 * String.replace()
 *
 * To replace any existed values with another value
 */

console.log("---replace--  1--", para.replace("is", "was"));
console.log("---replace--  2--", para.replace("coolie", "Doctor"));
console.log("---replace--  3--", para.replace("He", "She"));

/**
 * String.replaceAll()
 *
 * To replace all existed values with another value
 */

console.log("---replaceAll--  1--", para.replaceAll("He", "She"));

console.log("--replaceAll---2--", para.replaceAll(" ", "-"));

/**
 * String.split()
 */

console.log("--split --1", para.split(" "));
console.log("--split --2", para.split('"'));
console.log("--split --3", para.split(""));

let strToSplit = para.split("");
console.log("--strToSplit", strToSplit);
let reversedStr = strToSplit.reverse();
console.log("--reversedStr", reversedStr);

let joinedStr = reversedStr.join("");
console.log("--joinedStr", joinedStr);

/**
 * To reverse any string
 * 1. Split - split by empty space ("")
 * 2. reverse -
 * 3. join-  join by empty space('')
 */

let wordSplit = para.split(" ");
console.log("--wordSplit", wordSplit);
let wordRev = wordSplit.reverse();
console.log("--wordRev", wordRev);
let wordRevJoin = wordRev.join(" ");
console.log("--wordRevJoin", wordRevJoin);

/**
 * To find any place value of any character
 * 1. using String[index] schoolName[5]
 * 2. using .at(5)
 */
let schoolName =
  "Shaheed JAGSIR SINGH Govt. Senior Secondary SMART School BOHA (MANSA)  ";
console.log("find character on place --", schoolName.length, schoolName[70]);
console.log(
  "find character on place using at() --",
  schoolName.length,
  schoolName.at(5)
);

/**
 * Find character code
 */
console.log("fromCharCode-=-", String.fromCharCode(86));
console.log("fromCharCode-=-", String.fromCharCode(73));
console.log("fromCharCode-=-", String.fromCharCode(78));
console.log("fromCharCode-=-", String.fromCharCode(65));
console.log("fromCharCode-=-", String.fromCharCode(89));

/**
 * Find multiple character code
 */
console.log("fromCodePoint-=-", String.fromCodePoint(86, 73, 78, 65, 89));

let studentName = "Chahat";

console.log("concat 1 --", studentName + " " + "reads in" + " " + schoolName);
console.log(
  "concat 2 --",
  studentName,
  "reads in",
  schoolName,
  ". there",
  para.replaceAll("He", "She")
);
console.log(
  "concat 3 --",
  `${studentName} reads in ${schoolName}. there ${para.replaceAll("He", "She")}`
);

let thor = "The thunder God-Thor";
let hulk = "The Incredible Hulk";
let ironMan = "Invincible Iron-Man";

console.log(
  "concat 2.1--",
  thor + ", " + hulk + " " + "and" + " " + ironMan + " " + "are my fav avengers"
);

console.log(
  "concat 2.2--- ",
  thor,
  ",",
  hulk,
  "and",
  ironMan,
  "are my fav avengers."
);

console.log(
  "concat 2.3--",
  `${thor}, ${hulk} and ${ironMan} are my fav avengers`
);

console.log("includes--", ironMan.includes("M"));
console.log("search()--", ironMan.search("k"));

console.log("repeat()--", ironMan.repeat(14));

console.log("indexOf--", ironMan.indexOf(`I`));

console.log("lastIndexOf--", ironMan.lastIndexOf(`V`));
console.log("startsWith--", ironMan.startsWith(`Invinay`));

console.log("endsWith--", ironMan.endsWith(`man`));

let slicedSchoolName = schoolName.slice(10);
let slicedSchoolName2 = schoolName.slice(10, 20);
let slicedSchoolName3 = schoolName.slice(-12);

console.log("slicedSchoolName--", slicedSchoolName);
console.log("slicedSchoolName2--", slicedSchoolName2);
console.log("slicedSchoolName3--", slicedSchoolName3);

let subStrSchoolName = schoolName.substr(10, 20);
console.log("subStrSchoolName--", subStrSchoolName);

let subStringSchoolName = schoolName.substring(10, 30);
console.log("subStringSchoolName--", subStringSchoolName);

let spider = "            spider-man            ";

console.log(";spider", spider.trim());
console.log(";spider trimEnd", spider.trimEnd());
console.log(";spider trimStart", spider.trimStart());

let ave1 = "Ultron";

console.log("padStart--", ave1.padStart(10, "$"));
console.log("padStart 1--", ave1.padStart(ave1.length + 1, "%"));

console.log("padEnd--", ave1.padEnd(10, "$"));
console.log("padEnd 1--", ave1.padEnd(ave1.length + 10, "%"));
