// ---------------------------------Destructuring of Array and object ---------

const month = ["Jan", "Feb", "March", "April", "May", "June", "july", "aug"];
const newMonth = [...month];
newMonth.push("sep");

month.shift();
console.log("original", month);
console.log("copied", newMonth);

console.log("destructuring ", month[4]);
// what is diff between rest operator and spread operator

const [jan, feb, third = [], ...pooja] = [
  "January",
  "February",
  ["March", "BAt", "Girl"],
  "April",
  "May",
  "June",
  "july",
  "August",
];
const [a, bat, girl] = third;

console.log("bat ", bat);
console.log("pooja ", pooja);

// ______________________________________
const ab = {
  clr1: "red",
  clr2: "blue",
  gradient: {
    grad1: "red blue",
    grad2: "white black",
    moreClr: {
      clr1: "pink",
      clr23: "yellow",
    },
  },
};

console.log("clr2--", ab.clr2);
console.log("clr23--", ab.gradient.moreClr.clr23);

const {
  clr2,
  gradient: {
    grad1,
    moreClr: { clr23, ...restMore },
  },
  ...rest
} = {
  clr1: "red",
  clr2: "blue",
  gradient: {
    grad1: "red blue",
    grad2: "white black",
    moreClr: {
      clr1: "pink",
      clr23: "yellow",
    },
  },
};

console.log("restMore--", restMore);

const swiggy = {
  title: "Roti",
  itemCards: [
    {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
        info: {
          backgroundColor: "#FAE8E3",
          id: "43546798",
          name: "Rumali Roti",
          category: "Roti",
          description:
            "Aan exotic thin indian flatbread recipe made with plain flour or maida atta.",
          price: 3200,
          variantsV2: {},
          itemAttribute: {
            vegClassifier: "VEG",
          },
          ratings: {
            aggregatedRating: {
              rating: "3.9",
            },
          },
        },
      },
    },
  ],
};

const { itemCards = [], title = "" } = swiggy;
const [card1 = {}] = itemCards;
const {
  card: {
    info: {
      backgroundColor = "#000",
      name = "",
      description = "",
      itemAttribute: { vegClassifier = "" } = {},
      ratings: { aggregatedRating: { rating = 0 } = {} } = {},
    } = {},
  } = {},
} = card1;

console.log("card1", card1);
document.write(`
<p style="background-color:${backgroundColor}">Hii. I went to a famous resto where i ordered <strong>${name}</strong>. 
which is <strong>${description}</strong>. It was a <strong>${vegClassifier}</strong> dish 
and it's rating is <strong>.${rating}</strong>..
Which is pretty good. You must try this <strong>.${name}</strong>.
</p>
`);

// const swiggyData = {
//   "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//   info: {
//     id: "43546798",
//     name: "Rumali Roti",
//     category: "Roti",
//     description:
//       "Aan exotic thin indian flatbread recipe made with plain flour or maida atta.",
//     price: 3200,
//     variantsV2: {},
//     itemAttribute: {
//       vegClassifier: "VEG",
//     },
//     ratings: {
//       aggregatedRating: {
//         rating: "3.9",
//       },
//     },
//   },
// };

// const {
//   info: {
//     name = "",
//     ratings: { aggregatedRating: { rating = 0 } = {} } = {},
//   } = {},
// } = { ...swiggyData };
// // const { name = "", ratings:{aggregatedRating: { rating = 0 } = {}} = {} } = info;
// // const { aggregatedRating: { rating = 0 } = {} } = ratings;
// // const { rating = 0 } = aggregatedRating;

// console.log("rating", rating);
// document.write(
//   `I have order one ${name}. who rating is ${swiggy.itemCards[0].card.info.ratings.aggregatedRating.rating}`
// );

// document.write(
//   `I think this ${rating} is good rating. You should give rating to this ${name} more than ${rating}`
// );

const car = {
  model: "Tata",
  name1: {
    model: "Maruti",
    name1: {
      model: "Mahindra",
      name1: "vinay",
    },
  },
};
const name1 = "hi";
const {
  model: modelTata = "",
  name1: {
    model: modelMaruti = "",
    name1: { model: modelMahindra = "", name1: name2 = "" } = {},
  } = {},
} = { ...car };
console.log("printing name2 ==", name1, name2);

// ------------------------------ optional chaining ---------------------
const swiggyCopy = { ...swiggy };
// console.log("print--.", swiggyCopy.itemCards[0].card.info.backgroundColor);
console.log(
  "print--.",
  swiggyCopy?.itemCards[0]?.card?.info?.backgroundColor || "color"
);

const { itemCards: itemCardsCopy = [] } = swiggyCopy || {};
const [firstElement = {}] = itemCardsCopy || [];
const {
  card: { info: { backgroundColor: backgroundColor2 = "#000" } = {} } = {},
} = firstElement || {};

console.log("backgroundColor2", backgroundColor2);

// When to use optional chaining and destructuring
/**
 * Optional Chaining
 * this is used to extract values from object. It ensures not to
 * break code and throws error message.
 * We can pass a default value to handle undefined.
 * for optional chaining  we use like this(obj1?.obj2?.obj?.value)
 * It is preferrable when we are using any value at single time
 */

/**
 * Destruring is a process to extract values from object
 * It is little bit lengthy process
 * but it is prefferable when we are going to use same
 * veriable/keys name multiple times in the project. it
 * will save time to write lengthy names of object with optional
 * chaining or extractions
 */
