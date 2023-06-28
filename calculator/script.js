"use strict";

const display = document.querySelector(".display");
display.textContent = 0;

const btnParent = document.querySelector(".calculator");
const btnop = document.querySelectorAll(".op");

let displayNumber = "";
const excludedBtn = ["c", "="];
let op = "";

function calculate() {
  const separators = ["+", "\\-", "*", "÷"];
  const separatorRegex = new RegExp("[" + separators.join("") + "]", "g");
  let [num1, num2] = displayNumber.split(separatorRegex);
  op = displayNumber[num1.length];
  num1 = Number(num1);
  num2 = Number(num2);
  let result;
  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    default:
      result = num1 / num2;
      break;
  }
  return result;
}

btnParent.addEventListener("click", (event) => {
  if (
    event.target.tagName === "BUTTON" &&
    !excludedBtn.includes(event.target.textContent)
  ) {
    displayNumber += event.target.textContent;
    display.textContent = displayNumber;
    if (
      event.target.textContent === "+" ||
      event.target.textContent === "-" ||
      event.target.textContent === "*" ||
      event.target.textContent === "÷"
    ) {
      btnop.forEach(function (element) {
        element.setAttribute("disabled", "disabled");
      });
    }
    console.log(displayNumber);
  }
  //  else if (event.target.textContent === "←") {
  //   displayNumber = displayNumber.slice(0, -1);
  //   display.textContent = displayNumber;
  // }
  else if (event.target.textContent === "c") {
    displayNumber = 0;
    display.textContent = displayNumber;
    btnop.forEach(function (element) {
      element.removeAttribute("disabled");
    });
  } else if (event.target.textContent === "=") {
    let result = calculate();
    display.textContent = result;
    displayNumber = 0;
    btnop.forEach(function (element) {
      element.removeAttribute("disabled");
    });
  }
});
