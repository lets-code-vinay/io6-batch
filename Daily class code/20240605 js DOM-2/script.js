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
 */

// getting elements
const mainBody = document.getElementById("main-body");
const mainContainer = document.getElementById("main-container");
const title = document.getElementById("title");
const subTitle = document.getElementById("sub-title");

const userName = document.getElementById("user-name");
const userPW = document.getElementById("password");

const userData = { name: "", password: "" };

function handleSave() {
  console.log("save btn clicked", userData);
}

function handleUserName() {
  userData.name = userName.value;
}

function handlePassword() {
  userData.password = userPW.value;
}

let isThemeClicked = false;
function handleTheme() {
  isThemeClicked = !isThemeClicked;

  if (isThemeClicked) {
    console.log("is theme clicked", isThemeClicked);
    mainBody.style.backgroundColor = "#14145d";
    mainContainer.style.backgroundColor = "#020241";
    title.style.color = "pink";
    subTitle.style.color = "white";
  } else {
    mainBody.style.backgroundColor = "#F3F3F3";
    mainContainer.style.backgroundColor = "#fff";
    title.style.color = "#4CAF50";
    subTitle.style.color = "#000";
  }
}
