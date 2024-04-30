/**
 * If cost and selling price of any article entered through key-board. Find the profit and loss
 */

// const costOfArticle = prompt("Enter cost of article");
// const salePriceOfArticle = prompt("Enter Sale price of article ");

const findProfitLoss = (cost = 0, sellPrice = 0) => {
  const costPrice = Number(cost);
  const sellingPrice = Number(sellPrice);

  console.log(costPrice, sellingPrice);

  // To check if any invalid input entered like string
  if (isNaN(costPrice) || isNaN(sellingPrice)) {
    return console.error("Please enter a valid input");
  }

  // restrict user to enter amount greater than zero
  if (costPrice <= 0) {
    return console.warn(`Please enter amount of Cost Price greater than zero`);
  } else if (sellingPrice <= 0) {
    return console.warn(
      `Please enter amount of Selling Price greater than zero`
    );
  }

  if (costPrice > sellingPrice) {
    console.log("You are in loss of", costPrice - sellingPrice);
  } else if (costPrice < sellingPrice) {
    console.log("You are in profit of", sellingPrice - costPrice);
  } else {
    console.log("You are in No profit/ No loss");
  }
};

// findProfitLoss(costOfArticle, salePriceOfArticle);

/**
 * Arithmetic Operator
 *  1. Addition  +
 *  2. Subtraction  -
 *  3. Multiplication  *
 *  4. Division /
 *  5. Modulus
 */

// Addition
console.log("addition 1-->", 10 + 19); // 29 Number
console.log("addition 2-->", 15 + "15"); //1515 string
console.log("addition 3-->", "15" + "15"); // 1515 string
console.log("addition 4-->", false + "15"); // false15  string
console.log("addition 5-->", false + null); // 0
console.log("addition 6-->", undefined + null); // NaN
console.log("addition 7-->", undefined + "", undefined); //"undefined"
console.log("addition 8-->", "R" + "P"); //

// Subtraction
console.log("subtraction 1-->", 91 - 78); // 13
console.log("subtraction 2-->", 90 - "70", typeof (90 - "70")); // 20 Number
console.log("subtraction 3-->", "90" - 70, typeof ("90" - 70)); // 20 Number
console.log("subtraction 4-->", "90" - "70", typeof ("90" - "70")); // 20 Number
console.log("subtraction 5-->", true - "70", typeof (true - "70")); // -69 Number
console.log("subtraction 6-->", true - true); // 0
console.log("subtraction 7-->", false - true); // -1
console.log("subtraction 8-->", false - null); // 0
console.log("subtraction 9-->", undefined - null); // NaN
console.log("subtraction 10-->", "Red" - "red"); // NaN
console.log("subtraction 11-->", "R" - "P"); // NaN

// multiplication
console.log("multiplication 1-->", "R" * "P"); // NaN
console.log("multiplication 2-->", "15" * "P"); // NaN
console.log("multiplication 3-->", "15" * "15", typeof ("15" * "15")); // 225 Number
console.log("multiplication 4-->", 15 * 10); // 150
console.log("multiplication 5-->", 15 * false); // 0
console.log("multiplication 6-->", true * false); // 0
console.log("multiplication 7-->", true * null); // 0
console.log("multiplication 8-->", true * undefined); // NaN
console.log("multiplication 9-->", true * null); // 0
console.log("multiplication 10-->", undefined * null); // NaN
console.log("multiplication 11-->", undefined * Boolean(null)); // NaN
console.log("multiplication 12-->", Boolean(undefined) * Boolean(null)); // 0

// Division
console.log("Division 1-->", "R" / "P"); // NaN
console.log("Division 2-->", "R" / "15"); // NaN
console.log("Division 3-->", "15" / "10"); // 1.5 Number,
console.log("Division 4-->", 15 / "10"); // 1.5 Number,

// Modulus --> %
// To get the remainder of division

console.log("Modulus 1-->", 51 % 7);
console.log("Modulus 2-->", 49 % 7);
console.log("Modulus 3-->", "49" % 7);
console.log("Modulus 4-->", "49" % true);
console.log("Modulus 4-->", "49" % 49);

/**
 * Find if number is even or odd
 */

let num = prompt("Enter any number to find Even Odd");
if (num % 2 == 0) {
  console.log(num, "Number is Even");
} else {
  console.log(num, "Number is Odd");
}
