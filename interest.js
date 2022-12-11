const principalBox = document.getElementById("principal");
const interestBox = document.getElementById("interest");
const frequencyBox = document.getElementById("frequency");
const totalYearsBox = document.getElementById("totalYears");
const amountSpan = document.getElementById("amount");
const calculatorItem = document.getElementById("calculator");
const formualaItem = document.getElementById("formula");
const theForm = document.querySelector("form");
const description = document.querySelector("#description");
const aprSpan = document.querySelector("#apr");

principalBox.addEventListener("input", computeInterest);
interestBox.addEventListener("input", computeInterest);
frequencyBox.addEventListener("input", computeInterest);
totalYearsBox.addEventListener("input", computeInterest);
calculatorItem.addEventListener("click", showForm);
formualaItem.addEventListener("click", showFormula);

//this function displays the home page
function showFormula() {
  theForm.style.display = "none";
  description.style.display = "block";
}

//this function displays the calculator
function showForm() {
  theForm.style.display = "block";
  description.style.display = "none";
}

//this function computes the compounded interest
function computeInterest() {
  const principal = Number(principalBox.value);
  const interest = Number(interestBox.value);
  const frequency = Number(frequencyBox.value);
  const totalYears = Number(totalYearsBox.value);
  aprSpan.textContent = interest.toFixed(2);
  const interestRate = interest / 100;
  const total =
    principal * Math.pow(1 + interestRate / frequency, totalYears * frequency);
  amountSpan.textContent = total.toFixed(2);
}
