/**
 * What is the meaning of Loops?
 *
 * in JS we have 2 types of looping
 * 1. while, do while
 * 2. for loop  <--
 */

console.log("My name is Vinay");

// for
// initializer
// condition
// increment/decrement
// WARNING-- A wrong loop can go to hell(infinite)

let a = 10;
// a = a + 1;
// a += 1;

// a = a - 2

// pre-increment ==>   ++a -- Add first, then print
// post-increment ==>   a++  -- print first , then add

console.log("-->", a++, ++a, a); // A: 11, C:11, T:12, P: 11
// console.log("-->", ++a, a); // 11 --> a = 1 + a
// console.log("-->", a++, a); // a = a + 1

// a  == a+1

// 10 --> 11, 1+11,

let b = 20;

// console.log("b--", --b); // 20-1 // 19
// console.log("b--", b--); // 20 - 1 // 19
// console.log("b--", b--, --b); // T: 18, C:18, A:18, P:19
// 20 --> 19  19-1  18

console.log("b--", --b, b--); // T:19 , C:19, A:19, P:19
console.log("b-->", b); // P: 20, C: 20, T: 20, A: 20

for (let i = 1; i <= 5; i++) {
  console.log("Hi ankit", i);
}

// print table of 5
// 5 x 1 = 5
//
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

for (let i = 10; i >= 1; i--) {
  if (i % 2 == 0) {
    console.log(`--> 5 x ${i} = ${5 * i}`); // 5 x 9 = 45
  }
}

// Nested For loop
// table to print from 1 to 50
for (let i = 1; i <= 50; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`table of ${i} X ${j}`, i * j);
  }
}

// output

// loop render for first time of the value of i = 1
// i        j     condition for j
// 1        1     1 < = 10
// 1st -> table of 1 X 1 =>   1
// 1        2     2 <=10
// 1nd -> table of 1 X 2 =>   2
// 1        3     3 <=10
// 3rd -> table of 1 X 3 =>   3
// -----------
//  ------------
// 1       9        9<=10
// 9th -> table of 1X9 =>     9
// 1       10      10<=10
// 10th -> table of 1 X 10 => 10
// 11th
// 1       11    11 <=10    false

// loop render for second time of the value of i = 2
// 2<=50
// i        j     condition for j
// 2        1       1 <=10
// 2        2       2 <= 10
// 2        3       3 <= 10
// -----------------------
// ----------------------
// 2        9       9 <=10
// 2        10      10 <=10

// 1st -> table of 2 X 1 =>  2
// 2nd -> table of 2 X 2 =>  4
// 3rd -> table of 2 X 3 =>  6
// -----------
//  ------------
// 9th -> table of 2 X 9 =>  18
// 10th-> table of 2 X 10 => 20

// 11th
// 2       11        11 <=10   false

// loop render for second time of the value of i = 3

// Exercise
// print table from 20 to 30 using nested for loop
// Done by Taran, Chahat & Ankit

// Test Exercise
let ab = 50;
let cb = 50;
console.log("test", ab++); // 50(t) 50(A) 50(C) 50(P)
// ab = ab+1
console.log("test1", ++ab); // 51(T) 51(A) 51(C) 51(P)
// ab = 1+ab

console.log("test3 =>", ab--); // 50(A) 50(C) 50(T) 50(P)  51
console.log("test 4", --cb); // 49(A) 49(C) 49(T) 48(P)   49

console.log("guess", cb--); // 49(A) 49(C) 49(T) 49(P)   49

// 49 + 50 => 99

console.log("guess1", cb++ + ab--); // 101(A) 100(C) 102(T) 100(P)   99

// print Table of even number and odd number from 1 to 20
// 1. Even Number table  (even number => 2,4,6,8.....)
// 2. Odd Number Table  (1,3,5,7.....)
