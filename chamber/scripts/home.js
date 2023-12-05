const baseURL = "https://mkminson.github.io/wdd230/chamber/";
const linksURL = "https://mkminson.github.io/wdd230/chamber/data/members.json";

const spotlight1 = document.querySelector('.s1image');
const spotlight2 = document.querySelector('.s2image');
const info1 = document.querySelector('.slinfo1');
const info2 = document.querySelector('.slinfo2');

async function getBusinessData() {
    const response = await fetch(linksURL);
    const data = await response.json();

    setSpotlight(data.directory);
}

getBusinessData();

const setSpotlight = (data) => {
    let upperLevel = [];
    let busInfo1 = document.createElement('ul');
    let busInfo2 = document.createElement('ul');

    for (let i = 0; i < data.length; i++) {
        if (data[i].membership === "Gold" || data[i].membership === "Silver") {
            upperLevel.push(data[i]);
        }
    }

    let firstSpotlight = getRandomIndex(upperLevel.length);
    let secondSpotlight = getRandomIndex(upperLevel.length);

    // Ensure the two spotlights are different
    while (firstSpotlight === secondSpotlight) {
        secondSpotlight = getRandomIndex(upperLevel.length);
    }

    let busName1 = document.createElement('li');
    let busAdd1 = document.createElement('li');
    let busPhone1 = document.createElement('li');
    let linkAnchor1 = document.createElement('a');

    let busName2 = document.createElement('li');
    let busAdd2 = document.createElement('li');
    let busPhone2 = document.createElement('li');
    let linkAnchor2 = document.createElement('a');

    busName1.textContent = upperLevel[firstSpotlight].name;
    busAdd1.textContent = upperLevel[firstSpotlight].address;
    busPhone1.textContent = upperLevel[firstSpotlight].phone;
    linkAnchor1.setAttribute('href', upperLevel[firstSpotlight].url);
    linkAnchor1.textContent = upperLevel[firstSpotlight].url;

    busName2.textContent = upperLevel[secondSpotlight].name;
    busAdd2.textContent = upperLevel[secondSpotlight].address;
    busPhone2.textContent = upperLevel[secondSpotlight].phone;
    linkAnchor2.setAttribute('href', upperLevel[secondSpotlight].url);
    linkAnchor2.textContent = upperLevel[secondSpotlight].url;

    spotlight1.setAttribute('src', `${upperLevel[firstSpotlight].logo}`);
    spotlight1.setAttribute('alt', `${upperLevel[firstSpotlight].name} Logo`);
    spotlight1.setAttribute('loading', 'lazy');
    spotlight1.setAttribute('width', '250');
    spotlight1.setAttribute('height', '250');

    spotlight2.setAttribute('src', `${upperLevel[secondSpotlight].logo}`);
    spotlight2.setAttribute('alt', `${upperLevel[secondSpotlight].name} Logo`);
    spotlight2.setAttribute('loading', 'lazy');
    spotlight2.setAttribute('width', '250');
    spotlight2.setAttribute('height', '250');

    busInfo1.appendChild(busName1);
    busInfo1.appendChild(busAdd1);
    busInfo1.appendChild(busPhone1);
    busInfo1.appendChild(linkAnchor1);
    info1.appendChild(busInfo1);

    busInfo2.appendChild(busName2);
    busInfo2.appendChild(busAdd2);
    busInfo2.appendChild(busPhone2);
    busInfo2.appendChild(linkAnchor2);
    info2.appendChild(busInfo2);
}

function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}

document.addEventListener('DOMContentLoaded', function () {
    const meetAndGreetBanner = document.getElementById('meetAndGreetBanner');
    const closeBannerBtn = document.getElementById('closeBannerBtn');

    const currentDate = new Date();
    const currentDay = currentDate.getDay();

    if (currentDay >= 1 && currentDay <= 3) {
        meetAndGreetBanner.style.display = 'show';

        closeBannerBtn.addEventListener('click', function () {
            meetAndGreetBanner.style.display = 'none';
        });
    }
});

function closeBanner() {
    const meetAndGreetBanner = document.getElementById('meetAndGreetBanner');
    meetAndGreetBanner.style.display = 'none';
}
