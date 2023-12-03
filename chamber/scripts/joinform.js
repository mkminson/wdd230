document.addEventListener("DOMContentLoaded", function () {
    var currentDate = new Date();
    var formattedDate = currentDate.toISOString();
    document.getElementById("timestamp").value = formattedDate;
});

const title = document.querySelector("#title");
const message = document.querySelector("#formmessage");
const titlePattern = /^[a-zA-Z\s-]{7,}$/;

title.addEventListener("focusout", checkPattern);

function checkPattern() {
    if (!titlePattern.test(title.value)) {
        message.textContent = "Please enter a title of at least 7 characters using only letters, spaces, or -.";
        message.style.visibility = "show";
        title.style.backgroundColor = "#fff0f3";
        title.value = "";
        email.focus();
    } else {
        message.style.display = "none";
        email.style.backgroundColor = "#fff";
        email.style.color = "#000";
    }
}