/**
 * -- API ----
 * 1. Application programming interface
 * 2. Works as a postman to connect FE to BE/DB
 * 3. It is just like a string with some url or ip address
 * 4. It get data we use some special method like
 *    a. Fetch (JS)
 *    b. Axios (React/Angular)
 * 5. Api works on HTTP method
 *      HTTP:- Hyper text transfer protocol
 * 6. There are some method in API
 *    a. GET
 *        (To get data from API)
 *        No Payload or body
 *    b. POST
 *        (TO send data to API: some time it returns data or some time only message)
 *         login, signup, registration form
 *    c. PUT
 *        (To update any data in database)
 *    d. PATCH
 *        (To update any data in Database)
 *    e. DELETE
 *        (To delete any data from Database)
 *  7. Status Code
 *      200 : Success
 *      202 : Success
 *      400 : Internal Server error
 *      404 : No record Found
 *      500 : Server Error
 *  8. Api Is used with Promises
 *      Bcz JS is single Threaded, Asynchronous programming languages
 *      If we fetch any API it will return Promise
 *
 */

/**
 * ----------Promise-------
 * It makes asynchronous function to synchronous
 * Promises have three stages
 *  a. Fulfilled
 *  b. pending
 *  c. reject
 *
 * METHOD:
 * 1. new Promise(resolve, reject)
 * 2. .then()
 * 3. async/await
 */

/**
 * 1st method using new Promise()
 */
const fetchData = () => {
  const dataFromPromise = new Promise((resolve, reject) => {
    const api = fetch("https://dummyjson.com/products");
    console.log("api", api);
    if (Boolean(api)) {
      resolve(api);
    } else {
      reject("failed-----");
    }
  });

  console.log("dataFromPromise", dataFromPromise);
  let data = null;
  dataFromPromise
    .then((res) => res.json())
    .then((response) => {
      data = response;
    });

  setTimeout(() => {
    console.log("data--", data);
  }, 5000);
};

fetchData();

/**
 * second method -- using .then()
 */
const fetchDataFromApi = () => {
  let apiData = {};
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => (apiData = data));

  setTimeout(() => {
    console.log("apiData--2", apiData);
  }, 1000);
};

/**
 * third method----
 */
const thirdMethod = async () => {
  const api = "https://dummyjson.com/products";
  const data = await fetch(api);
  const response = await data.json();
  console.log("response--3--", response);
};
