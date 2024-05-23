/**
 * Array Prototypes
 * 1. .length
 *      To find the length or counts of elements present in array
 * 2. forEach
 *      This is a ES6 feature
 *      This is a callback function
 *      It can mutate original array
 *      It doesn't return anything
 * 3. .map()
 *      This is a ES6 feature
 *      This is a callback function
 *      It return new array
 *      It doesn't mutate original array
 * 4. .filter()
 *      This is a ES6 feature
 *      This is a callback function
 *      It return new array on basis of condition
 *      It doesn't mutate original array
 * 5. .at()
 *      It will return or find the value from given index
 *      it is similar to array[index]
 * 6. .concat()
 *      Merging two or more arrays
 *      arr1.concat(arr2).concat(arr3)
 *        this is similar using spread operator
 *        [...arr1, ...arr2, ...arr3]
 * 7. .every()
 *      To check each elements of the array if they are all fulfilling the condition.
 *      If all elements will pass the condition than it will return true, else false (even a single element got failed)
 *        const checkPos = arr3.every((ele, ind) => ele % 2 == 0); // false/true
 * 8. .some()
 *      To check each elements of the array if any of them fulfilling the condition.
 *      If any element passes the condition than it will return true, else false (when all element got failed)
 *        const checkPos = arr3.some((ele, ind) => ele % 2 == 0); // false/true
 * 9. .fill()
 *      To update values inside array we use .fill()
 *      arr4.fill("VINAY") // It will replace all elements with "VINAY"
 *      arr4.fill("vINAY", 3) // It will replace elements from 3rd index
 *      arr4.fill("vINAY", 3, 6) // It will  replace elements from 3rd index to 6th index
 *
 * 10. .push()
 *      Use to push value in the last index of array
 *      const arr1 = [500, -200, 10, 100, 50, -45, 89, 78, -4];
 *      arr1.push(98) // [500, -200, 10, 100, 50, -45, 89, 78, -4,98]
 * 11.  .pop()
 *      use to delete/pop value from the last index of array
 *      const arr1 = [500, -200, 10, 100, 50, -45, 89, 78, -4];
 *      arr1.pop() // [500, -200, 10, 100, 50, -45, 89, 78]
 * 12.  .unshift()
 *      use to push the value in the first index of array
 *      const arr1 = [500, -200, 10, 100, 50, -45, 89, 78, -4];
 *      arr1.shift('name') // ['name',500, -200, 10, 100, 50, -45, 89, 78,-4]
 * 13.  .shift()
 *      use to delete/pop the value in the first index of array
 *      const arr1 = [500, -200, 10, 100, 50, -45, 89, 78, -4];
 *      arr1.shift() // [ -200, 10, 100, 50, -45, 89, 78,-4]
 * 14 . TRICK to add values in array
 *      use spread operator to shallow copy
 *      const arr = [1,5,4,78,2]
 *      const newArr = [...arr, 56] // adding value at last
 *      const newArr2 = [99,...arr] // adding value at starting
 *      const newArr3 = [99,...arr, 45,78,'red'] // adding multiple values
 * 15. .from()
 *      convert any string to array
 *      const name = 'Pooja';
 *      Array.from(name) // ["P","o","o","j","a"]
 * 16. Array.isArray()
 *      To check if the given data is in array form or not
 *      Array.isArray(["P", "o", "o", "j", "a"])
 *      It will return Boolean values
 * 17. Array.of()
 *      It will return an array of given data
 *      Example: Array.of("Red", 45, "Girl", names, true)
 * 18. .flat()
 *      To remove internal and merge into main array
 *      ex: const newData = [45, [78, 41], [2354, [1567]], 48546];
 *          newData.flat() // it will merge 1st level array
 *          newData.flat().flat() // it will merge till 2nd level array
 * 19. .includes()
 *      It is used to check if given value is existed in array or not
 *        Ex:  console.log("includes", names.includes("Ravina")); // it will check Ravina in names array if found return true else false
 * 20.  indexOf()
 *        It will return the index of given element
 *        If element existed in array it will return the index number
 *        If element is not found then it will return -1
 *          Ex: names.indexOf("Chaht")  // -1 or 2
 * 21.  lastIndexOf()
 *        It will return the last index of given element
 *        If element existed in array it will return the index number
 *        If element is not found then it will return -1
 *          Ex: names.indexOf("Chaht")  // -1 or 2
 * 22. .join()
 *      It will make string of all elements of array
 *      EX: let names = ["Ravi", "Chander", "Chahat"];
 *          names.join("_") // Ravi_Chander_Chahat
 * 23. reverse()
 *      To reverse elements in array
 *      EX: let names = ["Ravi", "Chander", "Chahat"];
 *          names.reverse() // ["Chahat", "Chander","Ravi" ]
 * 24. .slice()
 *      Cut array from given index
 *        EX: let names = ["Ravi", "Chander", "Chahat", 'Taran', 'Ankit'];
 *          names.slice(1) // ["Chander", "Chahat" , 'Taran', 'Ankit'];
 *          names.slice(2) // ["Chahat", 'Taran', 'Ankit'];
 *          names.slice(1,3) // [ "Chander","Chahat"];
 *          names.slice(-3) // [ "Chahat", 'Taran', 'Ankit'];
 * 26. .sort()
 *        It will sort array in alphabetical order
 *          example: [1, 45, 78, 455, 121, 454, 561, 4].sort(); //  [1,121,4,45,454,455,561,78]
 *                   ["Ravi", "Chander", "Chahat", 'Taran', 'Ankit'].sort(); //['Ankit',"Chahat","Chander","Ravi",'Taran',]
 * 27. .splice()
 *        It adds or remove any elements from array
 *         const month = ["Jan", "March", "April", 'Dog', "June", "july", "aug"];
 *           if You want a new array starts from April
 *              months.splice(2)
 *           if in this array you want to remove all elements after March
 *              months.splice(1, 0)
 *           if you want to add any value in array as per required location. For example add MAY after apr
 *              months.splice(3, 0, 'May)
 *              It will add May but will not remove any value
 *           if you want to add and remove any value on location. For example add MAY after apr and remove Dog
 *              months.splice(3, 1, 'May)
 *
 */

// array.length
const arr1 = [500, -200, 10, 100, 50, -45, 89, 78, -4];

console.log("1. length--", arr1.length);

// array.forEach()
const forEachMulti = arr1.forEach((element, index) => {
  console.log("multiplication", element * 2);
  return element * 2;
});

console.log("2. forEachMulti--", forEachMulti);

// .map()
const mapMulti = arr1.map((element, index) => {
  console.log("multiplication in map", element * 2);
  return element * 2;
});
console.log("3. mapMulti--", mapMulti, arr1);

const cardWallet = ["debit card", "credit card", "pan card", "adhar card"];
// .filter()
console.log('"debit card"', "adhar card".length);
const filterStr = cardWallet.filter((element, index) => element.length >= 10);
console.log("filterStr", filterStr);

const negArr = arr1.filter((ele, index) => ele < 0);
console.log("negArr", negArr);

const posArr = arr1.filter((ele, index) => ele >= 0);
console.log("posArr", posArr);

const str = "d45edb^i67tc5a12r0d##"; // 45675120 // 45675120
const strToArr = str.split("");
const arrOfNum = strToArr.filter((ele, index) => !isNaN(ele));

console.log("arrOfNum", arrOfNum);
const joiningNumbers = arrOfNum.join("");
console.log("joiningNumbers", joiningNumbers);

const arr2 = [500, -200, 10, 100, 50, -45, 89, 78, -4];
let index = 5;
console.log("find value at given index", arr2[index]);
// by using at() prototype
console.log("find element using at()", arr2.at(index));

// concating two array
// [500, -200, 10, 100, 50, -45, 89, 78, -4, "debit card", "credit card", "pan card", "adhar card"]
console.log("concatination--", arr2.concat(cardWallet).concat(arr1));
console.log("concating two arrays using spread operator", [
  ...arr2,
  ...cardWallet,
  ...arr1,
]);

// entries
// const entriesArr = arr2.entries();
// console.log("entries-->", entriesArr.next().value);

// every
const arr3 = [500, 200, 10, 100, 50, 40, 890, 78, -41];
const pos = arr3.filter((element, index) => element % 2 == 0);
console.log("pos", pos);
const checkPos = arr3.every((ele, ind) => ele % 2 == 0);
console.log("checkPos", checkPos);

// some
const arr4 = [501, 2001, 101, 1005, 505, 405, 8907, 78, -413];

const checkSome = arr4.some((ele, ind) => ele % 2 == 0);
console.log("checkSome", checkSome);

// fill
console.log("fill--", arr4.fill("vINAY", 3, 6));
// [501, 2001, 101, 1005, 505, 2, 2, 2, 2];

const arr5 = ["Chahat", "ankit", "pooja", "taran", "pooja", "vinay", "pooja"];
const findPooja = arr5.find((ele, i) => ele == "pooja");
console.log("findPooja", findPooja);

const findPoojaIndex = arr5.findIndex((ele, i) => ele == "pooja");
console.log("findPoojaIndex", findPoojaIndex);

const findLastPooja = arr5.findLast((ele, i) => ele == "pooja");
console.log("findLastPooja", findLastPooja);

const findPoojaLastIndex = arr5.findLastIndex((ele, i) => ele == "pooja");
console.log("findPoojaLastIndex", findPoojaLastIndex);

// const num = prompt("Enter number in decimal");
// // 23.58 // 2358
// // 124575415751.268954 -- 124575415751268954

// // console.log("num in decimal", num);
// // 235.4474 * 10000
// // 1. string -> array
// // 2. find index of decimal
// // 3. decimal index - length  -- 7 -3 == 4

// const arrayOfNum = num.split("");
// console.log("arrayOfNum", arrayOfNum);
// const indexofDecimal = arrayOfNum.findIndex(
//   (ele, index) => ele == "." && index
// );

// // console.log("indexofDecimal", indexofDecimal);
// const requiredNumToMul = arrayOfNum.length - indexofDecimal;
// console.log("requiredNumToMul", requiredNumToMul);

// switch (requiredNumToMul) {
//   case 1:
//     console.log("number is here---", Number(num) * 1);
//     break;
//   case 2:
//     console.log("number is here---", Number(num) * 10);
//     break;
//   case 3:
//     console.log("number is here---", Number(num) * 100);
//     break;
//   case 4:
//     console.log("number is here---", Number(num) * 1000);
//     break;
//   case 5:
//     console.log("number is here---", Number(num) * 10000);
//     break;
//   case 6:
//     console.log("number is here---", Number(num) * 100000);
//     break;
//   default:
//     console.log(
//       "number is here---",
//       Number(num),
//       "Decimal number is exceeding"
//     );

//     break;
// }

// 18-May-2024
// .concat()
let ar = [3, 5, 7, 9];
let ar2 = [3, 5, 7, 9, 0];

console.log("concatination of string", ar.concat(ar2)); // [357935790] (A), [357935790] (C), [357935790] (T)

// .fill()
let name1 = ["A", "S", "H", "U", "T", "O", "S", "H"];
console.log(name1.length); // 4(A) 4(C) 4(P) 4(T)
console.log("index", name1); // 0-3(A) 0-3(C) 0-3(P) 0-3(T)

console.log("fill value", name1.fill("test value"));
console.log("fill value1", name1.fill("test value", 0));
console.log("fill value2", name1.fill("test value", 2, 4));

// ["A", "S", "H", "U"] (C), ["A", "S", "H", "U"] (T), ["A", "S", "H", "U", "test value"] (A)

// let var = 5   // chahat (Nahi Pata)

var let = 6; // chahat (Nahi Pata)
// var const = 9
// const var = 9  // chahat (Nahi Pata)

// let const = 6  // chahat (Nahi Pata)

console.log("let", let);
let test = 5;
var test1 = 5;

// Example ---
let nameArray = ["Raaja", "Aditya", "DevaAadidev", "Deva"];
// nameArray.push("Ashutosh");
// .push()
// console.log(".push method", nameArray);

// output -- ["Raaja", "Aditya", "DevaAadidev", "Deva","Ashutosh"]
// let newName = prompt("Enter new name");
// const pushValueInToArray = (newName) => {
//   nameArray.push(newName);
// };
// pushValueInToArray(newName);
// console.log("nameArrray", nameArray);

// .pop()
nameArray.pop();
console.log(nameArray);

// Exercise make pop method Dynamic

// .unshift()

let numberArr = [3, 5, 6, 7, 8, 5, 5, 4];
numberArr.unshift(90);
console.log("unshift", numberArr);

// .shift()
let numberArr2 = [3, 5, 6, 7, 8, 5, 5, 4];
numberArr2.shift();
console.log("shift", numberArr2);

// Small Todo app  exercise
// value through prompt
// insert the entered value in the array
// show the value in the browser

// let newName = prompt("Enter new name");
// const pushValueInToArray = (newName) => {
//   nameArray.push(newName);
// };
// pushValueInToArray(newName);
// console.log("nameArrray", nameArray);
// document.write(nameArray);

// ----------------------------- May 21 --------------------
let names = ["Ravi", "Chahat", "Chander", "Chahat"];

// let firstName = prompt("Enter first name");
// names.push(newName);
// names.unshift(firstName);
names.unshift("Vinay");
names.push("Ankit");

// names.pop();
// names.shift();
// names.shift();
const newNames = ["Info", ...names, "Pooja"];
console.log("names--", newNames, names);

const stdName = "Pooja Mehra";
console.log("split", stdName.split(" "));
console.log("from", Array.from(stdName));

console.log("isArray--1--", Array.isArray(names));
console.log("isArray--2--", Array.isArray(["P", "o", "o", "j", "a"]));
console.log("isArray--3--", Array.isArray(["a"]));
console.log("isArray--4--", Array.isArray([]));
console.log("isArray--5--", Array.isArray("[]"));
console.log("isArray--6--", Array.isArray(Array.from("Pooja")));
console.log("isArray--7--", Array.isArray("Pooja".split(" ")));
// console.log("isArray--8--", Array.isArray((names.length = 0)));

console.log("Array.of----", Array.of("Red", 45, "Girl", names, true));

const data = [
  45,
  78,
  45,
  [45, 78, 41, [2354, 1567], 48546],
  45,
  [
    45421,
    45,
    [1354, [234, 5, 5632, 232, [454, 2634, 64]], 2567],
    14,
    5457,
    152,
    452,
    154,
  ],
];
// console.log("Ankit", data[4][3][2][2]);
// console.log("Chahat", data[5][2][2][1]);
// console.log("Pooja", data[4[2][2][3][1]]);
// console.log("Taran", data[4][2][0][3][1]);
console.log("vinay--", data[5][2][1][4][1]);

const newData = [45, [78, 41], [2354, [1567]], 48546];
console.log("flat--", data.flat().flat().flat().flat());

console.log("includes", names.includes("Ravina"));

console.log("indexOf", names.indexOf("Chahat"));
console.log("lastIndexOf", names.lastIndexOf("Chahat"));

let joinedArray = names.join("_");
console.log("join--", joinedArray);

// -------------------------may 23 2024 ----------------------
console.log("names", names);
console.log("names reversed", [...names].reverse());

const animals = ["elephant", "camel", "ant", "duck", "bison"];
const slicedAnimals = animals.slice(-2);
console.log("slicedAnimals--", slicedAnimals);

console.log("sortedAnimals", animals.sort());
console.log("sortedNumbers", [1, 45, 78, 455, 121, 454, 561, 4].sort());

// [1,4,45,78,121,454,455,561]
// [1,121,4,45,454,455,561,78]

const months = [
  "Jan",
  "March",
  "April",
  "Dog",
  "CAt",
  "June",
  "july",
  "aug",
  "sep",
];
// console.log("spliced months", months.splice(1));
// console.log("spliced months", months.splice(2, 4));
months.splice(1, 0, "Feb");
months.splice(4, 2, "May");
console.log("spliced months", months);

// C:
// A:
// T:
