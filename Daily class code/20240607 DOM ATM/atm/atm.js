let userData = [
  { accNum: "787878", name: "Ankit", balance: "12000", pin: "7878" },
  { accNum: "121212", name: "Pooja", balance: "20000", pin: "1212" },
  { accNum: "123456", name: "Taran", balance: "21200", pin: "1234" },
  { accNum: "554466", name: "Chahat", balance: "212000", pin: "5544" },
  { accNum: "987654", name: "Vinay", balance: "200", pin: "9876" },
];

/**
 * @description on main screen
 */

let selectedUserData = {};

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
      selectedUserData = user;
    }
  });
  console.log("selectedUserData  -1-", selectedUserData);
};

const handleExitBtn = () => {
  const mainScreen = document.querySelector(".main-screen");
  const servicesScreen = document.querySelector(".main-section");
  const balScreen = document.querySelector(".balance-section");
  const wDScreen = document.querySelector(".withdraw-section");
  const depScreen = document.querySelector(".deposit-section");

  servicesScreen.classList.add("display-none");
  balScreen.classList.add("display-none");
  wDScreen.classList.add("display-none");
  depScreen.classList.add("display-none");

  mainScreen.classList.remove("display-none");

  selectedUserData = {};
};

const goToServicesScreen = () => {
  const balScreen = document.querySelector(".balance-section");
  const servicesScreen = document.querySelector(".main-section");
  const wDScreen = document.querySelector(".withdraw-section");
  const depScreen = document.querySelector(".deposit-section");

  balScreen.classList.add("display-none");
  servicesScreen.classList.remove("display-none");
  wDScreen.classList.add("display-none");
  depScreen.classList.add("display-none");
};

const handleBalEnq = () => {
  const balScreen = document.querySelector(".balance-section");
  const servicesScreen = document.querySelector(".main-section");
  const balance = document.querySelector(".balance");

  servicesScreen.classList.add("display-none");
  balScreen.classList.remove("display-none");

  balance.innerText = selectedUserData?.balance;
  balance.style.color = "blue";
  balance.style.fontWeight = "800";
};

/**
 * @description Withdraw amount
 */
const handleWithdraw = () => {
  const servicesScreen = document.querySelector(".main-section");
  const wDScreen = document.querySelector(".withdraw-section");

  wDScreen.classList.remove("display-none");
  servicesScreen.classList.add("display-none");
};

/**
 * @description Withdrawing amount in btn click
 */
const withdraw = () => {
  const wdAmt = document.querySelector("#wd-amount");
  const errMsg = document.querySelector(".error-message");

  if (!wdAmt.value) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `Please enter valid amount!!`;
  } else if (wdAmt.value < 100) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `Please enter amount more than 100 !!`;
  } else if (wdAmt.value > selectedUserData.balance) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `Sorry!! you have insufficient balance in your account !!`;
  } else {
    const updatedAmtOfSelUser = userData.map((user) => {
      if (user.accNum == selectedUserData.accNum) {
        const remainingAmt = user.balance - wdAmt.value;

        selectedUserData = { ...user, balance: String(remainingAmt) };
        return selectedUserData;
      }
      return user;
    });

    userData = updatedAmtOfSelUser;

    goToServicesScreen();
  }
};

const deposit = () => {
  const depAmt = document.querySelector(".deposit-amount");
  const errMsg = document.querySelector(".error-message");

  const depositAmt = depAmt.value;

  if (!depositAmt) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `Please enter a valid amount`;
  } else if (depositAmt < 100) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `Please enter amount more than 100Rs.`;
  } else {
    const updatedUserData = userData.map((user) => {
      if (user.accNum == selectedUserData.accNum) {
        const finalAmt = Number(user.balance) + Number(depositAmt);

        selectedUserData = { ...user, balance: finalAmt };
        return selectedUserData;
      }
      return user;
    });
    console.log("updatedUserData", updatedUserData);
    userData = updatedUserData;
    goToServicesScreen();
  }
};

/**
 * @description opening deposit screen on button click
 */
const handleDeposit = () => {
  const depScreen = document.querySelector(".deposit-section");
  const servicesScreen = document.querySelector(".main-section");

  servicesScreen.classList.add("display-none");
  depScreen.classList.remove("display-none");
};
