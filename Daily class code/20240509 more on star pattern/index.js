// left half triangle star pattern
// *
// * *
// * * *
// * * * *

const leftHalfTriangle = (numberOfRow) => {
  for (let i = 1; i <= numberOfRow; i++) {
    for (let j = 1; j <= i; j++) {
      document.write("* ");
    }
    document.write("<br>");
  }
};
let numberOfRow = Number(
  prompt("Enter the number of row to create a star pattern")
);
leftHalfTriangle(numberOfRow); // function call with parameter

// i   j    condition of j
// 1   1    1<=1  true
// 1   2    2<=1  false

// 2   1    1<=2  true
// 2   2    2<=2  true
// 2   3    3<=2  false

// 3   1    1<=3  true
// --------

// Exercise ---
// right triangle star pattern
//      *
//    * *
//  * * *
//* * * *

// reverse left triangle
// * * * * *
// * * * *
// * * *
// * *
// *

const reverseLeftTriangle = (num) => {
  for (let a = num; a >= 1; a--) {
    for (let b = 1; b <= a; b++) {
      document.write("* ");
    }
    document.write("<br>");
  }
};
let number = Number(prompt("Enter number of rows to print the star pattern"));
reverseLeftTriangle(number);

// a   b   condition of b
// 5   1     1 <= 5  true
// 5   2     2 <= 5  true
// 5   3     3 <= 5  true
// ........
// ........

// 4   1    1<=4   true
