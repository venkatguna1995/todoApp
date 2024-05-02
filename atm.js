const prompt = require("prompt-sync")({ sigint: true });

// 3banks hdfc,Sbi,axis, deposit,balance,withdra,statement,trasnsfer,exit

const dbSbi = { name: "Ganesh", password: "123456" };
const dbHdfc = { name: "Rajesh", password: "123456" };
const DbAxis = { name: "Satish", password: "123456" };

var userName = prompt("Enter userName : ");
var password = prompt("Enter Password : ");

var selectedOpt;
function banking(name, password) {
  let options = {
    deposit: 1,
    balance: 2,
    withdraw: 3,
    statement: 4,
    trasnsfer: 5,
    exit: 6,
  };
  if (
    (name == dbSbi.name && password == dbSbi.password) ||
    (name == dbHdfc.name && password == dbHdfc.password) ||
    (name == DbAxis.name && password == DbAxis.password)
  ) {
    console.log("Welocome to The ATM");
    return options;
  } else {
    console.log("invalid User");
  }
}

if (userName && password) {
  const Data = banking(userName, password);
  if (Data) {
    console.table(Data);
    selectedOpt = prompt("Choose Option : ");
    switch (true) {
      case selectedOpt == "1":
        console.log("welcome to Deposit");
        break;
      case selectedOpt == "2":
        console.log("welcome to balance");
        break;
      case selectedOpt == "3":
        console.log("welcome to withdraw");
        break;
      case selectedOpt == "4":
        console.log("welcome to statement");
        break;
      case selectedOpt == "5":
        console.log("welcome to trasnsfer");
        break;
      case selectedOpt == "6":
        console.log("Thank you!");
        break;
    }
  }
} else {
  console.log("please enter userName and password");
}


