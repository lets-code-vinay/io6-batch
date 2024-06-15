/**
 * -------Local Storage ------------
 * 1. To store data on browser we use localStorage
 * 2. Here stored data will not removed until we delete it
 * 3. Storing capacity is 10MB or it could be vary from browser to browser and their version
 * 4. It takes data in string format-- localStorage.setITem('name', JSON.stringify(data))
 * 5. To retrieve data we need to parse it in JSON.parse(localStorage.getItem('name))
 * 6. To clear data use localStorage.clear()
 */

/**
 * -------Session Storage ------------
 * 1. To store data on browser we use sessionStorage
 * 2. Here stored data will not removed when Tab got closed, browser closed or system shut
 * 3. Storing capacity is 5MB or it could be vary from browser to browser and their version
 * 4. Mostly this is used for banking, finance websites
 * 5. It takes data in string format-- sessionStorage.setITem('name', JSON.stringify(data))
 * 6. To retrieve data we need to parse it in JSON.parse(sessionStorage.getItem('name))
 * 7. To clear data use sessionStorage.clear()
 *
 */

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

const data = { name: "Pooja", class: "10th" };
console.log(JSON.stringify(data), data);
localStorage.setItem("user-data", JSON.stringify(data));

localStorage.setItem("car-data", JSON.stringify(car));

// 1. localStorage
// 2. .setItem
// 3. ()
// 4. key-name : user-data
// 5.JSON.stringify()
// 6. data

const carData = JSON.parse(localStorage.getItem("car-data"));
console.log("carData", carData.clr);

// http://127.0.0.1:5500/Daily%20class%20code/20240612%20js%20storage%20api/index.html

/**
 * localStorage.clear() used to clear localStorage
 */
// setTimeout(() => {
//   localStorage.clear();
// }, 5000);

const submit = () => {
  const name = document.querySelector("#first");
  const pw = document.querySelector("#password");

  const userData = { name: name.value, password: pw.value };
  console.log("userData", userData);
  sessionStorage.setItem("user-data", JSON.stringify(userData));
};
// sessionStorage.setItem("car-data", JSON.stringify(car));

let loginData = {};

const get = () => {
  loginData = JSON.parse(sessionStorage.getItem("user-data"));
  console.log("loginData", loginData);
};

console.log("loginData222", loginData);

const clearData = () => {
  console.log("hitt");
  sessionStorage.clear();
};

const fetchData = () => {
  const api = fetch("https://dummyjson.com/products");

  const apiResponse = api.then((res) => {
    return res;
  });
  console.log("apiResponse", apiResponse);
};

fetchData();
