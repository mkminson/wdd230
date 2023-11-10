const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.body;
const card = document.querySelector(".card"); // Select the card element

function toggleDarkMode() {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        card.classList.remove("dark-mode"); // Remove the "dark-mode" class from the card
        // Rest of your code...
    } else {
        body.classList.add("dark-mode");
        card.classList.add("dark-mode");  // Add the "dark-mode" class to the card
        modeButton.textContent = "🔆";
    }
}

modeButton.addEventListener("click", toggleDarkMode);