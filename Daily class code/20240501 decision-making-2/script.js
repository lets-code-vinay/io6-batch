const findTheSalary = () => {
  document.write(`<h1>Please find the salary of employee as per table</h1>`);
  const gender = prompt("Please enter the gender in M/F or Male/Female");
  // M , m -- F-f, Male- MALE, male
  // male -> MALE, m->M, F->F, FEMALE -> FEMALE
  const yearOfService = prompt("How much experience do you have?");
  // YOS --> >0
  // YOS --> must be a number input
  const qual = prompt(
    "May i know your qualification? PG for PostGraduate, G for Graduate"
  );

  // Please enter qualification in PG or G

  //g == M/F Male/Female
  //yos == 10
  // q == pg/g
  const g = gender.toUpperCase(); // m --> M, female --> FEMALE
  const q = qual.toUpperCase();
  const yos = Number(yearOfService);
  console.log(g, q, yos);

  // validating inputs
  if (g !== "M" && g !== "MALE" && g !== "F" && g !== "FEMALE") {
    return document.write(
      `<h1 style="color:red">Please enter valid Gender</h1></br>`
    );
  } else if (isNaN(yos)) {
    return document.write(
      `<h1 style="color:red">Please enter valid Year of Service in Number</h1></br>`
    );
  } else if (yos < 0 || yos > 20) {
    return document.write(
      `<h1 style="color:red">Year of Service must be greater than 0 and less than 20</h1></br>`
    );
  } else if (q !== "PG" && q !== "G") {
    return document.write(
      `<h1 style="color:red">Please enter qualification as PG and G</h1></br>`
    );
  }

  console.log("Checking no Error");

  // getting salary of employee as per inputs
  if ((g == "M" || g == "MALE") && yos >= 10 && q == "PG") {
    document.write(`<h1>This employee will get Salary of 15000/- </h1></br>`);
  } else if ((g == "M" || g == "MALE") && yos >= 10 && q == "G") {
    document.write(`<h1>This employee will get Salary of 10000/- </h1></br>`);
  } else if ((g == "M" || g == "MALE") && yos < 10 && q == "PG") {
    document.write(`<h1>This employee will get Salary of 10000/- </h1></br>`);
  } else if ((g == "M" || g == "MALE") && yos < 10 && q == "G") {
    document.write(`<h1>This employee will get Salary of 7000/- </h1></br>`);
  } else if ((g == "F" || g == "FEMALE") && yos >= 10 && q == "PG") {
    document.write(`<h1>This employee will get Salary of 12000/- </h1></br>`);
  } else if ((g == "F" || g == "FEMALE") && yos >= 10 && q == "G") {
    document.write(`<h1>This employee will get Salary of 9000/- </h1></br>`);
  } else if ((g == "F" || g == "FEMALE") && yos < 10 && q == "PG") {
    document.write(`<h1>This employee will get Salary of 10000/- </h1></br>`);
  } else if ((g == "F" || g == "FEMALE") && yos < 10 && q == "G") {
    document.write(`<h1>This employee will get Salary of 6000/- </h1></br>`);
  } else {
    document.write(`<h1>This employee is not eligible</h1></br>`);
  }
};

// findTheSalary();

const atmMachine = () => {
  const acc = Number(prompt(`Please enter account number`));

  let balance = "12000";
  let pin = 4561;
  const accNo = "123456";

  document.write(`<h1>Welcome to Info Bank</h1>`);

  // 1. Money withdraw
  // 2. pin change
  // 3. balance enquiry
  // 4. money transfer
  // 5. deposit

  if (isNaN(acc)) {
    return document.write(
      `<h1 style="color:red">Please enter valid account number.</h1></br>`
    );
  } else if (String(acc).length != 6) {
    return document.write(
      `<h1 style="color:red">Please enter valid account number of 6 digits.</h1></br>`
    );
  }

  const enteredPin = Number(prompt(`Please enter 4 digit pin`));

  if (isNaN(enteredPin)) {
    return document.write(
      `<h1 style="color:red">Please enter valid PIN Code.</h1></br>`
    );
  } else if (String(enteredPin).length != 4) {
    return document.write(
      `<h1 style="color:red">Please enter valid Pin code of 4 digits.</h1></br>`
    );
  }

  if (acc == accNo && pin == enteredPin) {
    document.write(`<h1>Hello Ankit ! Good morning</h1>`);
    document.write(`  <ol>
                        <li>Balance Enquiry</li>
                        <li>Withdraw</li>
                        <li>Pin Change</li>
                        <li>Deposit</li>
                        <li>Transfer</li>
                    </ol>`);
    document.write(`<h3>Please select an option</h3>`);

    setTimeout(() => {
      let option;
      option = prompt("Select any option");
      console.log("option", option);

      if (option == 1) {
        document.write(`<h1 style="color:blue">You have ${balance}:</h1>`);
      } else if (option == 2) {
        const amtToWD = prompt("Enter amount to withdraw");
        console.log("amt to wd", amtToWD, balance, balance > amtToWD);
        if (Number(balance) > Number(amtToWD)) {
          const finalAmt = balance - amtToWD;

          document.write(
            `<h1 style="color:blue">Please collect the amount</h1>`
          );
          document.write(`<h1 style="color:green">Balance : ${finalAmt}</h1>`);
          balance = finalAmt;
        } else {
          return document.write(
            `<h1 style="color:blue">Sorry!! you have don't sufficient balance</h1>`
          );
        }
      } else if (option == 3) {
        const oldPin = Number(prompt("Please enter your old PIN"));
        if (isNaN(oldPin)) {
          return document.write(
            `<h1 style="color:red">Please enter valid PIN Code.</h1></br>`
          );
        } else if (String(oldPin).length != 4) {
          return document.write(
            `<h1 style="color:red">Please enter valid Pin code of 4 digits.</h1></br>`
          );
        }

        if (oldPin == pin) {
          const newPin = Number(prompt("Please enter new Pin"));
          if (isNaN(newPin)) {
            return document.write(
              `<h1 style="color:red">Please enter valid PIN Code.</h1></br>`
            );
          } else if (String(newPin).length != 4) {
            return document.write(
              `<h1 style="color:red">Please enter valid Pin code of 4 digits.</h1></br>`
            );
          }
          pin = newPin;
          document.write(
            `<h1 style="color:blue">PIN Code has been changed successfully. </h1></br>`
          );
          console.log("new pin --", pin);
          return;
        } else {
          return document.write(
            `<h1 style="color:red">Sorry!! you have entered wrong PIN</h1>`
          );
        }
      } else if (option == 4) {
        const amtToDep = Number(prompt("Enter Amount to deposit"));

        if (isNaN(amtToDep)) {
          return document.write`<h1 style="color:red">Please enter a valid amount</h1>`;
        } else if (amtToDep <= 0) {
          return document.write`<h1 style="color:red">Amount must be greater than 0</h1>`;
        }

        balance = Number(balance) + Number(amtToDep);
        return document.write(
          `<h1 style="color:blue">Amount of ${amtToDep}/- has been deposited to your account now current balance is ${balance}/-</h1>`
        );
      }
    }, 2000);
  } else {
    document.write(`<h1 style="color:blue">oops!! Account doesn't match</h1>`);
  }
};

atmMachine();
