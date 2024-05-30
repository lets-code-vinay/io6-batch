/**
 * -----Object-----
 * What is object?
 *  Object is a non-primitive data-type
 *  Here is concept of key-value
 *  here we use curly-braces
 */
const a = 10;
const alphabets = ["a", "c", "d"];

const car = {
  clr: " red",
  engine: "4cyl",
  brand: "Tata",
  model: [
    "Nexon Facelift",
    "Safari",
    "Harrier",
    { ev: "Punch EV", petrol: "Punch Petrol", diesel: "Punch Deisel" },
    "Punch",
    "Altroj",
    "Tiago",
  ],
  tyre: 4,
  manual: true,
  pass: 5,
  variant: "",
};

console.log("print value", car.model);
console.log("print value-of tyre-2-", car.tyre);
console.log("print value-of harreir-2-", car.model[2]);
console.log("print Punch petrol--", car.model[3].petrol);

// countries.data[0];
const countries = {
  error: false,
  msg: "filtered result",
  data: [
    {
      city: "Aba",
      country: "Nigeria",
      populationCounts: [
        {
          year: "1991",
          value: "500183",
          sex: "Both Sexes",
          reliabilty: "Final figure, complete",
        },
      ],
    },
    {
      city: "Abeokuta",
      country: "Nigeria",
      populationCounts: [
        {
          year: "1991",
          value: "352735",
          sex: "Both Sexes",
          reliabilty: "Final figure, complete",
        },
      ],
    },
    {
      city: "ABUJA",
      country: "Nigeria",
      populationCounts: [
        {
          year: "1991",
          value: "107069",
          sex: "Both Sexes",
          reliabilty: "Final figure, complete",
        },
        {
          year: "1991",
          value: "378671",
          sex: "Both Sexes",
          reliabilty: "Final figure, complete",
        },
      ],
    },
    {
      city: "Ado-Ekiti",
      country: "Nigeria",
      populationCounts: [
        {
          year: "1991",
          value: "156122",
          sex: "Both Sexes",
          reliabilty: "Final figure, complete",
        },
      ],
    },
    {
      city: "Akure",
      country: "Nigeria",
      populationCounts: [
        {
          year: "1991",
          value: "239124",
          sex: "Both Sexes",
          reliabilty: "Final figure, complete",
        },
      ],
    },
    {
      city: "Awka",
      country: "Nigeria",
      populationCounts: [
        {
          year: "1991",
          value: "104682",
          sex: "Both Sexes",
          reliabilty: "Final figure, complete",
        },
      ],
    },
    {
      city: "Bauchi",
      country: "Nigeria",
      populationCounts: [
        {
          year: "1991",
          value: "206537",
          sex: "Both Sexes",
          reliabilty: "Final figure, complete",
        },
      ],
    },
    {
      city: "Benin City",
      country: "Nigeria",
      populationCounts: [
        {
          year: "1991",
          value: "762719",
          sex: "Both Sexes",
          reliabilty: "Final figure, complete",
        },
      ],
    },
    {
      city: "Bida",
      country: "Nigeria",
      populationCounts: [
        {
          year: "1991",
          value: "111245",
          sex: "Both Sexes",
          reliabilty: "Final figure, complete",
        },
      ],
    },
    {
      city: "Calabar",
      country: "Nigeria",
      populationCounts: [
        {
          year: "1991",
          value: "310839",
          sex: "Both Sexes",
          reliabilty: "Final figure, complete",
        },
      ],
    },
  ],
};

console.log("Chahat", countries.data[0].city);
console.log("ankit", countries.data[7].populationCounts[0].sex);
console.log("pooja--", countries.data[2].populationCounts[1].value);
console.log("Taran--", countries.data[4].populationCounts[0].year);

const card = {
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
  name: "S K Food Plaza",
  area: "Ludhiana Junction",
  completeAddress: "New Shiv Puri, Ludhiana, Punjab, India",
  "my name": "Vinay",
};

console.log("card", card);

card.country = "India";
card.cName = "Ankit Agarwal";
card["my class"] = "10th";
console.log("card 2-", card);

delete card.completeAddress;
delete card["my name"];
console.log("card 3-", card);

const info = {
  id: "43546798",
  name: "Rumali Roti",
  category: "Roti",
  description:
    "Aan exotic thin indian flatbread recipe made with plain flour or maida atta.",
  inStock: 1,
  isVeg: 1,
  price: 3200,
  itemAttribute: {
    vegClassifier: "VEG",
  },
  ratings: {
    aggregatedRating: {
      rating: "3.9",
      ratingCount: "97 ratings",
      ratingCountV2: "97",
    },
  },
};

info.id = "121321";

console.log("info", info);

//--------------------------------------------

const aggregatedRating = {
  rating: "3.9",
  ratingCount: "97 ratings",
  ratingCountV2: "97",
  itemAttribute: {
    vegClassifier: "VEG",
  },
};

// const rating2 = aggregatedRating;
// const rating2 = { ...aggregatedRating }; // Shallow copy
// const rating2 = JSON.parse(JSON.stringify(aggregatedRating)); // Deep copy -01
const rating2 = structuredClone(aggregatedRating); // Deep copy -02

aggregatedRating.cName = "Ankit";

console.log("added in original object", aggregatedRating);

rating2.rating = "4.5";
// rating2.cName = "Pooja";
rating2.itemAttribute.vegClassifier = "Non-Veg";

console.log("copied object", rating2);
console.log("original object", aggregatedRating);

// Shallow copy
// using spread operator
// deep copy
// 1. lodash XXXXX library cloneDeep(object)
// 2. JSON.parse(JSON.stringify(object))
// 3. structuredClone(object)

const ab = {
  clr1: "red",
  clr2: "blue",
  gradient: {
    grad1: "red blue",
    grad2: "white black",
  },
};

// const xy = ab;
// const xy = { ...ab }; // shallow copy or shallow clone
const xy = structuredClone(ab);

ab.gradient.grad1 = "black pink";

console.log("original ab--", ab);
console.log("copy xy--", xy);

// ---------------------------------Destructuring of Array and object ---------

const month = ["Jan", "Feb", "March", "April", "May", "June", "july", "aug"];
console.log("destructuring ", month[2]);

const [jan, , , apr, ...rest] = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "july",
  "aug",
];

console.log("printing apr---", apr);
