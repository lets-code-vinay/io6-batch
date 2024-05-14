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
const Cosmatics = ["lipstic", "nail paint", "foundation"];

const ladiesPurse = [
  "money",
  "tissues",
  "moisturizer",
  "mobile",
  cardWallet,
  Cosmatics,
];

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

console.log("arrExample-->", arrExample);

for (let i = 0; i < arrExample.length; i++) {
  console.log(`index is ${i} and element is ${arrExample[i]}`);
}

arrExample.length = 45;
arrExample[40] = "Ankit";
console.log("arr of Example--", arrExample.length, arrExample[40], arrExample);
