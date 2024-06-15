/**
 * -------Timing functions------
 *  As we know JS is a single threaded asynchronous programming language.
 *  It's execution won't stop for anything.
 *  To get some delay or pause we use timing function like setTimeout, setInterval
 *
 */

const errMsg = document.querySelector(".error-message");
const btn = document.querySelector(".pin-btn");
const defuseBtn = document.querySelector(".defuse-btn");

let bomb = null;

const handleBtnClick = () => {
  errMsg.innerHTML = `<h1 style="color:red">This is a BOMBBB about to blast</h1>`;
  errMsg.style.display = "block";

  bomb = setTimeout(() => {
    errMsg.style.display = "none";
  }, 5000);
};

const handleBtnDefuse = () => {
  console.log("bomb", bomb);
  clearTimeout(bomb);
  clearInterval(setInt);
};

const callMason = () => {
  console.log("calling mason");

  setTimeout(() => {
    mason();
  }, 5000);
};

const mason = () => {
  console.log(' hiii, i"m mason');
};

callMason();

let count = 0;

var setInt = setInterval(() => {
  count += 1;
  console.log("Hi.. Pooja", count);
}, 2000);
