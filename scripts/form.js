const pw1 = document.querySelector("#pwd");
const pw2 = document.querySelector("#pwd2");
const message = document.querySelector("#formmessage");

pw2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pw1.value !== pw2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visibility = "show";
        pw2.style.backgroundColor = "#fff0f3";
        pw1.value = "";
        pw2.value = "";
        pw2.focus();
    } else {
        message.style.display = "none";
        pw2.style.backgroundColor = "#fff";
        pw2.style.color = "#000";
    }
}

const email = document.querySelector("#email");
const emailPattern = /[a-zA-Z0-9._%+-]+@byui\.edu$/;

email.addEventListener("focusout", checkPattern);

function checkPattern() {
    if (!emailPattern.test(email.value)) {
        message.textContent = "Please enter a valid email address ending in @byui.edu.";
        message.style.visibility = "show";
        email.style.backgroundColor = "#fff0f3";
        email.value = "";
        email.focus();
    } else {
        message.style.display = "none";
        email.style.backgroundColor = "#fff";
        email.style.color = "#000";
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}