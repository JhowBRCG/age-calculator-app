const form = document.querySelector("#form");
const inputs = document.querySelectorAll("input");
const results = document.querySelectorAll("p span");

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getDate();
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

form.addEventListener("submit", (element) => {
  element.preventDefault();
  const monthInput = document.getElementById("month");
  const dayInput = document.getElementById("day");
  const yearInput = document.getElementById("year");

  validationInputEmpty();

  if (dayInput.value <= 0 || dayInput.value > 31) {
    dayInput.nextElementSibling.textContent = "Must be a valid day";
  }

  if (monthInput.value > 12 || monthInput.value <= 0) {
    monthInput.nextElementSibling.textContent = "Must be a valid month";
  }

  if (yearInput.value > currentYear) {
    yearInput.nextElementSibling.textContent = "Must be in the past";
  }

  ageCalc();
});

function validationInputEmpty() {
  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
      input.nextElementSibling.textContent = "This field is required";
    } else {
      input.classList.remove("error");
      input.nextElementSibling.textContent = "";
    }
  });
}

function ageCalc() {
  const userBirthDay = document.getElementById("day").value;
  const userBirthYear = document.getElementById("year").value;
  const userBirthMonth = document.getElementById("month").value;

  if (userBirthDay > currentDay) {
    currentDay += month[currentMonth - 1];
    currentMonth--;
  }

  if (userBirthMonth > currentMonth) {
    currentMonth += 12;
    currentYear--;
  }

  let dayResult = currentDay - userBirthDay;
  let monthResult = currentMonth - userBirthMonth;
  let yearResult = currentYear - userBirthYear;

  results[0].textContent = yearResult;
  results[1].textContent = monthResult;
  results[2].textContent = dayResult;
}
