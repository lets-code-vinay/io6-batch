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

/**
 * @description Get all elements
 */
const mainScreen = document.querySelector(".main-screen");
const servicesScreen = document.querySelector(".main-section");
const balScreen = document.querySelector(".balance-section");
const wDScreen = document.querySelector(".withdraw-section");
const depScreen = document.querySelector(".deposit-section");
const balance = document.querySelector(".balance");
const wdAmt = document.querySelector("#wd-amount");
const errMsg = document.querySelector(".error-message");
const depAmt = document.querySelector(".deposit-amount");
const transferScreen = document.querySelector(".transfer-section");
const payeeAccount = document.querySelector(".payee-account");
const transferAmount = document.querySelector("#transfer-amount");
const pinScreen = document.querySelector(".pin-section");
const oldPinField = document.querySelector(".old-pin");
const newPinField = document.querySelector(".new-pin");
const accNo = document.querySelector("#main-screen-acc-no");
const mainPin = document.querySelector("#main-screen-pin");
const successMsg = document.querySelector(".success-message");
const serviceSec = document.querySelector(".main-section");
const userName = document.querySelector(".user-name");

const goToMainScreen = () => {
  // @desciption getting elements

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
  servicesScreen.classList.add("display-none");
  balScreen.classList.add("display-none");
  wDScreen.classList.add("display-none");
  depScreen.classList.add("display-none");
  transferScreen.classList.add("display-none");
  pinScreen.classList.add("display-none");

  mainScreen.classList.remove("display-none");

  selectedUserData = {};
};

const goToServicesScreen = () => {
  balScreen.classList.add("display-none");
  servicesScreen.classList.remove("display-none");
  wDScreen.classList.add("display-none");
  depScreen.classList.add("display-none");
  transferScreen.classList.add("display-none");
  pinScreen.classList.add("display-none");
};

const handleBalEnq = () => {
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
  wDScreen.classList.remove("display-none");
  servicesScreen.classList.add("display-none");
};

/**
 * @description Withdrawing amount in btn click
 */
const withdraw = () => {
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
  servicesScreen.classList.add("display-none");
  depScreen.classList.remove("display-none");
};

/**
 * @description Enable screen of transfer
 */
const handleTransfer = () => {
  transferScreen.classList.remove("display-none");
  servicesScreen.classList.add("display-none");
};

/**
 * @description transferring amount
 */
const transfer = () => {
  const beneficiary = payeeAccount.value;
  const tAmt = transferAmount.value;

  if (!beneficiary) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `Please enter beneficiary account number.`;
  } else if (beneficiary.length != 6) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `Please enter a valid 6 digit beneficiary account number.`;
  } else if (!tAmt) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `Please enter amount to transfer.`;
  } else if (Number(tAmt) > Number(selectedUserData.balance)) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `You don't have sufficient balance to transfer.`;
  } else if (selectedUserData.accNum == beneficiary) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `You can not transfer amount to yourself.`;
  }
  console.log(
    "selectedUserData.accNum == beneficiary",
    selectedUserData.accNum == beneficiary,
    selectedUserData.accNum,
    beneficiary
  );
  const isBeneficiaryExist = userData.find(
    (user) => user.accNum == beneficiary
  );

  if (!isBeneficiaryExist || Object.keys(isBeneficiaryExist).length == 0) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `We don't have any account with ${beneficiary} account number.`;
  }

  const updatedUserData = userData.map((user) => {
    if (user.accNum == beneficiary) {
      const benBal = Number(user.balance) + Number(tAmt);
      return { ...user, balance: benBal };
    }
    if (user.accNum == selectedUserData.accNum) {
      const remainingAmount = Number(selectedUserData.balance) - Number(tAmt);
      selectedUserData = { ...user, balance: remainingAmount };
      return { ...user, balance: remainingAmount };
    }

    return user;
  });
  console.log("updatedUserData", userData, updatedUserData);
  goToServicesScreen();
};

/**
 * @description button click to show pin screen
 */
const handleChangePin = () => {
  console.log("is btn clicked");
  servicesScreen.classList.add("display-none");
  pinScreen.classList.remove("display-none");
};

let isPinMatched = false;

/**
 * @description old pin validation
 */
const matchPins = () => {
  const oldPin = Number(oldPinField.value);
  console.log("oldPin", oldPin);
  if (!oldPin || 0) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `Please enter Pin code.`;
  } else if (String(oldPin).length != 4) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `Pin code must be of 4 digits`;
  } else if (Number(oldPin) != Number(selectedUserData.pin)) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `Pin code isn't matched. Try again`;
  } else if (oldPin == selectedUserData.pin) {
    isPinMatched = true;
    newPinField.classList.remove("display-none");
    errMsg.classList.add("display-none");

    successMsg.classList.remove("display-none");
    successMsg.innerText = `Pin code has been matched successfully`;
  }
};

/**
 * @description getting input event to disable success msg
 */
const handleEnterNewPin = () => {
  successMsg.classList.add("display-none");
};

const changePins = () => {
  const newPin = newPinField.value;
  successMsg.classList.add("display-none");

  if (!newPin) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `Please enter New Pin code.`;
  } else if (String(newPin).length != 4) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `New Pin code must be of 4 digits`;
  } else if (Number(newPin) == Number(selectedUserData.pin)) {
    errMsg.classList.remove("display-none");
    errMsg.innerText = `New Pin should be different from old pin.`;
  } else {
    const updatedUserData = userData.map((user) => {
      if (user.accNum == selectedUserData.accNum) {
        return { ...user, pin: newPin };
      }
      return user;
    });

    console.log("updatedUserData", userData, updatedUserData);
    userData = updatedUserData;
    goToServicesScreen();
  }
};
