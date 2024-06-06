/**
 * Object prototypes
 *
 * 1. Object.assign()
 *    To merge two objects or assign any second object values to onject 1
 *  2. Object.keys()
 *      Creates an array of all keys of the Object
 *  3.Object.values()
 *      Creates an array of all values of the Object
 *  4. Object.create() 
 *      Use to copy any object to create clone object
 *      It is better to use spread operator to copy any object
 *  5. Object.entries()
 *      It make array from object 
 *      Ex: [
              ["name", "Hardik"],
              ["age", 10],
              ["5", "class"],
            ]
 *  6. Object.fromEntries()
              It makes object from Array
            Ex:
              from this [
                          ["name", "Hardik"],
                          ["age", 10],
                          ["5", "class"],
                        ] 
                        to this
                        {
                          name: "Hardik",
                          age: "10",
                          '5: "class",
                        };
 *  7. .hasOwnProperty()
            It checks if object containing any value given inside the parenthesis
            ratings.hasOwnProperty('rating) // true
            ratings.hasOwnProperty('car) // false
 * 8. Object.hasOwn()
            it is similar to hasOwnProperty. but it was introduced lately.
            Object.hasOwn(ratings, 'rating) // true
            Object.hasOwn(ratings, 'car) // true

  * 9. Object.seal()
            It restricts user to add any value inside the object.
            But he can update any value of object
            Add  ❌❌❌❌
            Update ✔️✔️✔️
  * 10. Object.freeze()
            It restricts user to add or update any key value of the object
            Add ❌❌❌❌
            Update ❌❌❌❌❌❌
  * 11. Object.isSealed()
            It checks if the object is sealed or not with Object.seal()
            it will return always boolean in true/false
  * 12. Object.isFrozen()
            It checks if the object is frozen or not with Object.freeze()
            it will return always boolean in true/false
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

// 1st method to create object
const company = {};
company.name = "Mozilla";
company.est = 1998;
company.emp = 1541524;
company.dep = {};
company.dep.hr = 784;

console.log("company", company);

// let appleCompany = Object.create(company);
let appleCompany = { ...company };

appleCompany.name = "Apple";
appleCompany.est = 1980;
appleCompany.emp = 1541524;
appleCompany.dep = {};
appleCompany.dep.hr = 784;
console.log("appleCompany", appleCompany);

const student = {
  name: "Hardik",
  age: "10",
  class: "5",
};

console.log("entries", Object.entries(student));

// [
//   ['name', 'Hardik'],['age', 10],['class', '5']
// ]

const stdFromArr = [
  ["name", "Hardik"],
  ["age", 10],
  ["5", "class"],
];
console.log("fromEntries", Object.fromEntries(stdFromArr));

console.log("hasOwnProperty--", ratings.hasOwnProperty("rating"));
console.log("hasOwnProperty 2--", ratings.hasOwnProperty("car"));

console.log("hasOwn--", Object.hasOwn(ratings, "rating"));
console.log("hasOwn 2--", Object.hasOwn(ratings, "car"));

// Object.seal(student);
Object.freeze(student);

student.name = "Priya"; // <-----
student.isIntelligent = false; // XXXX
console.log("student", student, Object.isFrozen(student));
// in seal we can not change or update any key value inside the object

/**
 * 1. What is Object?
 * 2. How to crate any Object
 * 3. How to add any key/value inside the object
 * 4. How to update any key/values of the object
 * 5. How to delete any value ofr object
 * 6. How to copy object?
 * 7. What is Deep copy and shallow copy?
 * 8. What is optional chaining?
 * 9. What is destructuring in object/Array
 * 10. Object.assign
 * 11. Object.keys
 * 12. Object.values()
 * 13. Object.entries()
 * 14. Object.fromEntries()
 * 15. objectName.hasownProperty('key_name')
 * 16. Object.hasOwn(objectName, 'key_name)
 * 17. Object.seal()
 * 18. Object.freeze()
 * 19. Object.isSealed();
 * 20. Object.isFrozen();
 * 21. What to do when we have same name key inside th object while destructuring
 *
 * */

const info1 = {
  id: "43546773",
  name: "Cheese Chilli",
  category: "Chinese",
  description:
    "Serves 1 | Spicy chilli is spooned over, and topped with, Shredded cheese for a bit of cheese in every paneer bite.",
  imageId: "p2srgpssaq3s6qcknwqb",
  inStock: 1,
  isVeg: 1,
  price: 22400,
  variants: {
    variantGroups: [
      {
        groupId: "4984811",
        name: "Quantity",
        variations: [
          {
            name: "Half",
            default: 1,
            id: "16290378",
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            name: "Full",
            price: 19200,
            id: "16290379",
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
      },
    ],
  },
  variantsV2: {},
  itemAttribute: {
    vegClassifier: "VEG",
    spiceLevel: "MEDIUMSPICY",
    portionSize: "Serves 1",
  },
  ribbon: {},
  showImage: true,
  itemBadge: {},
  badgesV2: {},
  ratings: {
    aggregatedRating: {
      rating: "4.0",
      ratingCount: "34 ratings",
      ratingCountV2: "34",
    },
  },
};

const { name = "", variants: { variantGroups = [] } = {} } = { ...info1 };
const [firstEle = {}] = variantGroups || [];
const { variations = [] } = firstEle || {};
const [, secEle = {}] = variations || [];
const { name: plateSize = "" } = secEle || {};
console.log("plateSize", plateSize, name);

// 8:54
// first print " cheese chilli "
// 8:55
// second print " name : full "
