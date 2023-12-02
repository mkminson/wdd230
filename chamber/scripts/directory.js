const baseURL = "https://mkminson.github.io/wdd230/chamber/";
const linksURL = "https://mkminson.github.io/wdd230/chamber/data/members.json";

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

async function getBusinessData() {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayBusinesses(data.directory);
}

getBusinessData();

const displayBusinesses = (businesses) => {
    let busList = document.createElement('ul');

    businesses.forEach((business) => {
        //create elements to add to grid.article element
        let members = document.createElement('section');
        let logoImg = document.createElement('img');
        let busName = document.createElement('li');
        let busAdd = document.createElement('li');
        let busPhone = document.createElement('li');
        let linkAnchor = document.createElement('a');

        //build list
        busName.textContent = business.name;
        busAdd.textContent = business.address;
        busPhone.textContent = business.phone;

        //set logo attributes
        logoImg.setAttribute('src', `${baseURL}${business.logo}`);
        logoImg.setAttribute('alt', `${business.name} Logo`);
        logoImg.setAttribute('loading', 'lazy');
        logoImg.setAttribute('width', '250');
        logoImg.setAttribute('height', '250');

        //set anchor attribute
        linkAnchor.setAttribute('href', business.url);
        linkAnchor.textContent = business.url;

        //append all the info to the article
        members.appendChild(logoImg);
        members.appendChild(busName);
        members.appendChild(busAdd);
        members.appendChild(busPhone);
        members.appendChild(linkAnchor);

        busList.appendChild(members);
    });

    display.appendChild(busList);
}
