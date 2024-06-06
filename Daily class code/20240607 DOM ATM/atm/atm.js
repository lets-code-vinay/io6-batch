const userData = [
  { accNum: "787878", name: "Ankit", balance: "12000", pin: "7878" },
  { accNum: "121212", name: "Pooja", balance: "20000", pin: "1212" },
  { accNum: "123456", name: "Taran", balance: "21200", pin: "1234" },
  { accNum: "554466", name: "Chahat", balance: "212000", pin: "5544" },
  { accNum: "987654", name: "Vinay", balance: "200", pin: "9876" },
];

/**
 * @description on main screen
 */

const userMainScreenData = { accNo: "", pin: "" };

const goToMainScreen = () => {
  // @desciption getting elements
  const accNo = document.querySelector("#main-screen-acc-no");
  const mainPin = document.querySelector("#main-screen-pin");
  const errMsg = document.querySelector(".error-message");
  const successMsg = document.querySelector(".success-message");
  const serviceSec = document.querySelector(".main-section");
  const mainScreen = document.querySelector(".main-screen");
  const userName = document.querySelector(".user-name");

  const isUserRegistered = userData.every((user) => user.accNum != accNo.value);
  const isWrongPinEntered = userData.some(
    (user) => user.accNum == accNo.value && user.pin != mainPin.value
  );

  console.log("isUserRegistered", isUserRegistered, isWrongPinEntered);

  console.log("testing", accNo.value, mainPin.value);

  if (!accNo.value) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = "Please Enter Account Number";
  } else if (!mainPin.value) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = "Please Enter Valid Pin Number";
  } else if (Boolean(accNo.value) && accNo.value.length !== 6) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = "Please enter 6 digit Account Number";
  } else if (Boolean(mainPin.value) && mainPin.value.length !== 4) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = "Please enter 4 digit Pin code";
  } else if (isUserRegistered) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = "This Account is not registered with us!!";
  } else if (isWrongPinEntered) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = "You have entered a wrong PIN. !!";
  } else {
    errMsg.classList.add("display-none");
  }

  userData.forEach((user) => {
    console.log("user--", user);
    if (user.accNum == accNo.value && user.pin == mainPin.value) {
      mainScreen.classList.add("display-none");
      serviceSec.classList.remove("display-none");
      userName.innerText = user.name;
    }
  });
};
