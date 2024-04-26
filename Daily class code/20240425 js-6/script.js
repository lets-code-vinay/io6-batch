/**
 * BigInt
 */
let number =
  4578456496123426546416579867493435443544356142334423654423654463446354448794344364n;
console.log("number", number);

/**
 * infinity
 */
console.log("infinity-->", Infinity);
console.log("calculation", 1 / 0); // infinity
console.log("calculation", 0 / 1); // C: 0, A: , T:0

/**
 * NaN
 * Not a Number
 */

console.log("calculation 3--", 10 + "red"); // 10red
console.log("calculation 4--", 10 - "red"); // NaN
console.log("calculation 5--", 0 * "red"); // NaN
console.log("calculation 6--", 0 * "6"); // 0
console.log("calculation 7--", NaN * "6"); // NaN

/**
 * Boolean Datatype
 * True/False
 *   1 /  0
 */

console.log("boolean 1--", 10 > 5); // true
console.log("boolean 2--", Number(true), Number(false)); //
console.log("boolean 3--", 10 > 5 > 5); // C:T,  A: , T:T -- false
// true > 5  ---- 1 > 5 ---- false
console.log("boolean 4--", true > false); //

/**
 * Datatype -- Null
 * No Value
 * In memory location variable holds memory but inside that memory there is no value.
 * Typeof null is object
 */
const value = null;
console.log("value-0---", value);
console.log("null datatype typeof-0---", typeof value);

/**
 * undefined
 * Memory has been located, but value hasn't initialized or defined
 * type of undefined is undefined
 */

let val;
console.log("val-0---", val);
console.log("typeof undefined-0---", val, typeof undefined, typeof val);

/**
 * Check type of
 */
console.log("typeof 10---", typeof 10); // , number
console.log("typeof true---", typeof true); //Boolean
console.log("typeof 'true'---", typeof "true"); //string
console.log("typeof undefined---", typeof undefined); // undefined
console.log("typeof 'null'---", typeof "null"); // string
console.log("typeof null---", typeof null); // object
console.log("typeof 0---", typeof 0); // number
console.log("typeof NaN---", typeof NaN); // number
console.log("typeof 10n---", typeof 10n); // bigInt
console.log("typeof Number(true---", typeof Number(true), Number(true)); // true == 1
console.log("typeof test---", "10", 10, Number("10")); // 10
console.log("typeof --- 'Delhi'", typeof "Delhi");
console.log("typeof --- []", typeof []);
console.log("typeof --- {}", typeof {});
console.log("typeof --- Math", typeof Math);
console.log("typeof --- Infinity", typeof Infinity);

/**
 * Falsy Values
 * 1. false,
 * 2. 0,
 * 3. undefined
 * 4. null
 * 5. ''
 * 6. NaN
 */

/**
 * Pop up boxes
 * 1. alert
 *      Simple output
 * 2. prompt
 *      To get any value from keyboard
 * 3. confirm
 *      To get true/false value
 */

// alert("hello Chahat");

// const studentName = prompt("Enter your studentName");
// console.log("studentName--", studentName);

// const isPresent = confirm("Is chahat available in class?");
// console.log("isPresent--", isPresent);

/**
 * Conversion
 * To convert one datatype to another datatype
 *
 */

// How to convert in string
// 1. using String()
// 2. using abc.toString()
const age = 15;
console.log("type of age ", typeof age, String(age), typeof String(age));
console.log(
  "type of age2 ",
  age,
  typeof age,
  age.toString(),
  typeof age.toString()
);

console.log("convert boolean to string ", true, String(true), true.toString());
console.log(
  "convert boolean to string-false ",
  false,
  String(false),
  false.toString()
);
console.log(
  "convert undefined to string ",
  undefined,
  String(undefined),
  typeof undefined,
  typeof String(undefined)
);
console.log(
  "convert null to string ",
  null,
  typeof null,
  String(null),
  typeof String(null)
);

// How to convert to  boolean
// Boolean()

console.log("convert 10 to boolean--", 10, Boolean(10));
console.log("convert -10 to boolean--", -10, Boolean(-10));
console.log("convert 0 to boolean--", 0, Boolean(0));
console.log("convert Delhi to boolean--", "Delhi", Boolean("Delhi"));
console.log("convert empty string to boolean--", "", Boolean(""));
console.log("convert null to boolean--", null, Boolean(null));
console.log("convert undefined to boolean--", undefined, Boolean(undefined));
console.log("convert NaN to boolean--", NaN, Boolean(NaN));
console.log("convert true to boolean--", true, Boolean(true));
console.log("convert !true to boolean--", !true, Boolean(!true)); // not true == false
console.log("convert [] to boolean--", [], Boolean([]));
console.log("convert {} to boolean--", {}, Boolean({}));

// How to convert to number
// 1. Number()
// 2. abc.toInteger()
console.log("convert Delhi to number--", "Delhi", Number("Delhi"));
console.log("convert true to number--", true, Number(true));
console.log("convert false to number--", false, Number(false));
console.log("convert null to number--", null, Number(null));
console.log("convert undefined to number--", undefined, Number(undefined));
console.log("convert NaN to number--", NaN, Number(NaN));


