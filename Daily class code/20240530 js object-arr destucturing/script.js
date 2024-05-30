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
