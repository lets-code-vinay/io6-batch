/**
 * Array
 *  1. Array is a non-primitive datatype
 *  2. It holds memory locations and sub-divide into sum-memories.
 *  3. It works like a container, it contains different type of data like
 *          number, string, object, null, boolean, undefined, array, variable.
 */

/**
 * Ladies purse: // it is like a container
 *      1. money
 *      2. tissue
 *      3.
 *      4. Cosmatic
 *      5. moisturizer
 *      6. cards
 *      7. mobile.
 *
 */
const cardWallet = ["debit card", "credit card", "pan card", "adhar card"];
const Cosmatics = ["lipstic", "nail paint", cardWallet, "foundation"];

const ladiesPurse = ["money", "tissues", "moisturizer", "mobile", Cosmatics];

console.log("printing- -from ladiesPurse--", ladiesPurse[4][2].length);
// P:
// C: ladiesPurse[4][2][]
// A: ladiespurse[4][2][number]
// T: ladiesPurse[4][2].length

// object example
const cards = {
  debit: "SBI Debit Card",
  pan: "Pan Card",
  credit: "Credit Card",
};

const sum = 10 + 20;

const arrExample = [
  100,
  "10",
  "Chahat",
  cards,
  null,
  true,
  undefined,
  [500, 200, 10, 100, 50],
  sum,
];
console.log("printing 10-->", arrExample[7][2]);
// A:
// P:
// C:
// T: arrExample[[2]]

console.log("arrExample-->", arrExample);

for (let i = 0; i < arrExample.length; i++) {
  console.log(`index is ${i} and element is ${arrExample[i]}`);
}

arrExample.length = 45;
arrExample[40] = "Ankit";
console.log("arr of Example--", arrExample.length, arrExample[40], arrExample);

/**
 * Prototype
 *  Those predefined methods or functions which are used to reduced developer's efforts
 */
const arr1 = [500, 200, 10, 100, 50, 45, 89];

const oddArr = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 == 0) {
    // 89 % 2 == 0
    console.log("arr1[i]--->", arr1[i]);
  }
}

// C:
// A:
// T: 3
// P: no sir

console.log("oddArr", oddArr);

const oddArr2 = arr1.filter((ele, index) => ele % 2 != 0);
console.log("oddArr2", oddArr2);

console.log("printing 100--", arr1[3]);
