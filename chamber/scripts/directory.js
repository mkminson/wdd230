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
    businesses.forEach((business) => {
        let busList = document.createElement('ul');

        business.info.forEach((item) => {
            let listItem = document.createElement('li');

            // Access the property names correctly
            if (item.name || item.address || item["phone number"] || item.url || item.logo || item.membership) {
                // Check if the property is present before creating a list item
                if (item.name) {
                    listItem.textContent += `${item.name}`;
                }
                if (item.address) {
                    listItem.textContent += ` | Address: ${item.address}`;
                }
                if (item["phone number"]) {
                    listItem.textContent += ` | Phone: ${item["phone number"]}`;
                }
                if (item.url) {
                    listItem.textContent += ` | URL: ${item.url}`;
                }
                if (item.membership) {
                    listItem.textContent += ` | Membership: ${item.membership}`;
                }

                if (item.logo) {
                    let logoImg = document.createElement('img');
                    logoImg.src = `${baseURL}${item.logo}`;
                    logoImg.alt = `${item.name} Logo`;
                    listItem.appendChild(logoImg);
                }

                busList.appendChild(listItem);
            }
        });

        display.appendChild(busList);
    });
}
