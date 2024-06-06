/**
 * --------DOM--------
 * Document Object Model
 *
 * Get elements in DOM
 * 1. getElementsByTagName
 *    Array of elements will be returned on basis of matched tags
 * 2. getElementsByClassName
 *    Array of elements will be returned on basis of matched class
 * 3. getElementByID
 *      It will return single node
 */

/**
 * ----Events ------
 * 1. selectedElement.addEvenListener('click', function)
 * 2. inline event call -- <button onclick='handleClick()')>Click</button>
 *
 * a. click -- single mouse click
 * b. dblclick -- double mouse click
 * c. change -- to get values from input field --> it gives events from where we extract --> event.target.value
 * d. keydown -- it will return event with some data like keyCode, key, key value
 * e. keyup  --- It will fire event when pressed key goes up.
 * d. keypress -- It will fire event when keys got pressed.  This is similar to keydown
 * e. mouseover -- when mouse hovered to any element where we have provided this event/ it will fire the event and call the function
 * f. mouseleave -- When we go hover out from that element then it will fire the event and call the function
 * g. mousemove -- whenever we move mouse on the element it will call the function and fires the event
 *
 *
 * b. onhover
 * c. mouseEnter
 * d. mouseLever
 * e. keyDown
 * f. keyup
 * g. keypress
 * h. dblclick
 */

// const allLabels = document
// console.log("window", window);
// console.log("document", document);
const [label1, label2] = document.getElementsByTagName("label");
// const [label_1, label_2] = allLabels || [];

console.log("abc", label2);
label2.style.color = "red";

label1.style.color = "blue";

const allABCclasses = document.getElementsByClassName("abc");
console.log("allABCclasses", allABCclasses);

const selectedBtn = document.getElementById("submit-btn");
console.log("selectedBtn", selectedBtn);

selectedBtn.style.color = "blue";
selectedBtn.style.backgroundColor = "pink";
selectedBtn.style.border = "1px solid yellow";

// Storing toggle value
let isHidden = false; // true
const handleChangeClrOfTitle = () => {
  // updating value on each click
  isHidden = !isHidden;

  // extracting element from DOM
  const [title1, title2] = document.getElementsByClassName("abc");

  // On condition basis showing title
  if (isHidden) {
    title1.style.display = "none";
  } else {
    title1.style.display = "block";
  }
};

selectedBtn.addEventListener("click", handleChangeClrOfTitle);

// --- changing theme of layout
// 1. Get the btn
const themeBtn = document.getElementById("theme-btn");

// 2. adding click event
themeBtn.addEventListener("mouseout", handleTheme);
themeBtn.addEventListener("mouseleave", handleTheme);

// 4. toggle variable
let isThemeClicked = false;

// 3. creating click function
function handleTheme() {
  // 5. toggle the variable value to true/false
  isThemeClicked = !isThemeClicked;

  // 6. get and target element
  const mainContainer = document.getElementById("main-container");
  const title1 = document.getElementById("title-1");
  const subTitle = document.getElementById("sub-title");

  if (isThemeClicked) {
    mainContainer.style.backgroundColor = "black";
    title1.style.color = "yellow";
    subTitle.style.color = "white";
  } else {
    mainContainer.style.backgroundColor = "#fff";
    title1.style.color = "#4caf50";
    subTitle.style.color = "#000";
  }
}

// ---------------------------------------------------------------------------

const loginData = { name: "", pw: "" };

const nameField = document.getElementById("first");
const pwField = document.getElementById("password");
const testBtn = document.getElementById("test-btn");

nameField.addEventListener("keypress", handleName);
pwField.addEventListener("change", handlePW);
testBtn.addEventListener("click", handleTest);

function handleName(e) {
  console.log("e.target.value", e);
  loginData.name = e.target.value;
}

function handlePW(event) {
  loginData.pw = event.target.value;
}

function handleTest() {
  console.log("loginData", loginData);
}

const mainContainer = document.getElementById("main-body");
mainContainer.addEventListener("scroll", handleScroll);

function handleScroll(e) {
  console.log("scrolling test", e);
}
