// const baseURL = "https://mkminson.github.io/wdd230/";
// const linksURL = "https://mkminson.github.io/wdd230/data/members.json";

// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("article");

// //example using arrow function
// gridbutton.addEventListener("click", () => {
//     display.classList.add("grid");
//     display.classList.remove("list");
// });

// // example using defined function
// listbutton.addEventListener("click", showList);

// function showList() {
//     display.classList.add("list");
//     display.classList.remove("grid");
// }

// async function getBusinessData() {
//     const response = await fetch(linksURL);
//     const data = await response.json();
//     displayBusinesses(data.directory);
// }

// getBusinessData();

// const displayBusinesses = (businesses) => {
//     businesses.forEach((business) => {
//         let busList = document.createElement('ul');

//         business.info.forEach((item) => {
//             let listInfo = document.createElement('li');

//             if (item.name || item.address || item["phone number"] || item.url || item.logo) {
//                 listItem.textContent = `${item.name}: ${item.address}, Phone: ${item["phone number"]}, URL: ${item.url}}`;

//                 if (item.logo) {
//                     let logoImg = document.createElement('img');
//                     logoImg.src = `${baseURL}${item.logo}`;
//                     logoImg.alt = `${item.name} Logo`;
//                     listItem.appendChild(logoImg);
//                 }

//                 busList.appendChild(listItem);
//             }
//         });

//         display.appendChild(busList);

//     });
// }


const baseURL = "https://mkminson.github.io/wdd230/";
const linksURL = "https://mkminson.github.io/wdd230/data/members.json";

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

            if (item.name || item.address || item["phone number"] || item.url || item.logo) {
                // Check if the property is present before creating a list item
                listItem.textContent = `${item.name}: ${item.address}, Phone: ${item["phone number"]}, URL: ${item.url}`;

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
