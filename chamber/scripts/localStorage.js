const msToDays = 84600000;
const oneDay = Date.now();


const visitsDisplay = document.querySelector(".visits");
//get last visit time 
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls"));
//if no last visit time, set it.
if (lastVisit == 0) {
    localStorage.setItem("lastVisit-ls", oneDay);
    visitsDisplay.textContent = "Welcome! Let us know it you have any questions.";
}
else {
    //check time difference in days
    const difference = (oneDay - lastVisit) / msToDays;
    visitsDisplay.textContent = lastVisit;
    if (difference < 1) {
        visitsDisplay.textContent = "Back so soon! Awesome!";
    }
    else if (difference == 1) {
        visitsDisplay.textContent = "You last visited 1 day ago.";
    }
    else {
        visitsDisplay.textContent = "You last visited " + difference.toFixed(0) + " days ago.";
    }
    localStorage.setItem("lastVisit-ls", oneDay);
}

