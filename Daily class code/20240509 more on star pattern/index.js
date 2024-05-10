// left half triangle star pattern
// *
// * *
// * * *
// * * * *

// const leftHalfTriangle = (numberOfRow) => {
//   for (let i = 1; i <= numberOfRow; i++) {
//     for (let j = 1; j <= i; j++) {
//       document.write("* ");
//     }
//     document.write("<br>");
//   }
// };
// let numberOfRow = Number(
//   prompt("Enter the number of row to create a star pattern")
// );
// leftHalfTriangle(numberOfRow); // function call with parameter

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
document.write("right triangle star pattern");
document.write("<br>");

const rightTrianlge = () => {
  for (let i = 4; i >= 1; i--) {
    for (let j = 1; j <= i - 1; j++) {
      document.write(`&nbsp;&nbsp;`);
    }
    for (let a = 4; a >= i; a--) {
      document.write("*");
    }
    document.write("<br>");
  }
};
rightTrianlge();

// i   condition of i     j     condition of j      a     condition of a
// 4    4>=1 true         1      1<=4-1 true
// 4                      2       2<=4-1 true
// 4                      3       3<=4-1 true
// 4                      4       4<=4-1 false
// 4                      4                          4        4>=4  true
// 4                      4                          3        3>=4  false

// 3   3>= 1 true         1       1<=3-1 true
// 3                      2       2<=3-1 true
// 3                      3       3<=3-1  false
// 3                      3                           4        4>=3  true
// 3                      3                           3        3>=3   true
// 3                      3                           2        2>=3  false

// 2     2>=1 true        1            1<=2-1 true
// 2                      2            2<=2-1 false
// 2                      2                           4        4>=2  true
// 2                      2                           3        3>=2  true
// 2                      2                           2        2>=2  true
// 2                      2                           1        1>=2  false

// 1      1>=1 true       1           1<=1-1  false
// 1                      1                           4        4>=1  true
// 1                      1                           3        3>=1  true
// 1                      1                           2        2>=1  true
// 1                      1                           1        1>=1  true
// 1                      1                           0        0>=1  false

// 0    0>=1 false

// reverse left triangle
// * * * * *
// * * * *
// * * *
// * *
// *

// const reverseLeftTriangle = (num) => {
//   for (let a = num; a >= 1; a--) {
//     for (let b = 1; b <= a; b++) {
//       document.write("* ");
//     }
//     document.write("<br>");
//   }
// };
// let number = Number(prompt("Enter number of rows to print the star pattern"));
// reverseLeftTriangle(number);

// a   b   condition of b
// 5   1     1 <= 5  true
// 5   2     2 <= 5  true
// 5   3     3 <= 5  true
// ........
// ........

// 4   1    1<=4   true

// Exercise  ------
// Print number pattern
// 1
// 2 3
// 4 5 6
// 7 8 9 10
