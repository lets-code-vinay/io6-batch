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
