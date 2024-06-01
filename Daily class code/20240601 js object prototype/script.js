/**
 * Object prototypes
 *
 * 1. Object.assign()
 *    To merge two objects or assign any second object values to onject 1
 *  2. Object.keys()
 *      Creates an array of all keys of the Object
 *  3.Onject.values()
 *      Creates an array of all values of the Object
 *
 */

const swiggy = {
  card: {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
  },
};

const info = {
  backgroundColor: "#FAE8E3",
  id: "43546798",
  name: "Rumali Roti",
  category: "Roti",
  description:
    "Aan exotic thin indian flatbread recipe made with plain flour or maida atta.",
  price: 3200,
  variantsV2: {},
};

const obj3 = {
  itemAttribute: "Non-veg",
  vegClassifier: "VEG",
};

const ratings = {
  rating: "3.9",
  aggregatedRating: 7000,
};

const mergedObj = Object.assign(obj3, ratings, info);

mergedObj.rating = 5;

console.log("mergedObj", mergedObj, ratings);

const mergedOnj2 = { ...obj3, ...ratings, ...info };

console.log("mergedOnj2", mergedOnj2);

const infoKeys = Object.keys(info);
const infoValues = Object.values(info);

console.log("infoKeys-->", infoKeys, infoValues);
