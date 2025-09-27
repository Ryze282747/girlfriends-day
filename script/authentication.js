const correct_password = "03262025";
const password = document.getElementById("password");

// Save the actual password entered
let actualPassword = "";

function checkpassword(pwd) {
  if (pwd === correct_password) {
    window.location.href = "letter.html";
  }
}

function addvalue(e) {
  const value = e.target.value;

  actualPassword += value;
  password.value = "*".repeat(actualPassword.length);

  checkpassword(actualPassword);
}

function removelastchar() {
  actualPassword = actualPassword.slice(0, -1);
  password.value = "*".repeat(actualPassword.length);

  checkpassword(actualPassword);
}

    // Keypad button elements
const number_1 = document.getElementById("number-1");
const number_2 = document.getElementById("number-2");
const number_3 = document.getElementById("number-3");
const number_4 = document.getElementById("number-4");
const number_5 = document.getElementById("number-5");
const number_6 = document.getElementById("number-6");
const number_7 = document.getElementById("number-7");
const number_8 = document.getElementById("number-8");
const number_9 = document.getElementById("number-9");
const number_0 = document.getElementById("number-0");
const asterisk = document.getElementById("number-*");
const del = document.getElementById("del");

    // Attach event listeners
number_1.addEventListener("click", addvalue);
number_2.addEventListener("click", addvalue);
number_3.addEventListener("click", addvalue);
number_4.addEventListener("click", addvalue);
number_5.addEventListener("click", addvalue);
number_6.addEventListener("click", addvalue);
number_7.addEventListener("click", addvalue);
number_8.addEventListener("click", addvalue);
number_9.addEventListener("click", addvalue);
number_0.addEventListener("click", addvalue);
asterisk.addEventListener("click", addvalue);
del.addEventListener("click", removelastchar);