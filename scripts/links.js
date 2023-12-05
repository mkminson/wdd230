const baseURL = "https://mkminson.github.io/wdd230/";
const linksURL = "https://mkminson.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayWeeks(data);
}

getLinks();

const displayWeeks = (weeksData) => {
    weeksData.weeks.forEach((week) => {
        // Create elements to add to the div element
        let weekList = document.createElement('ul');
        let weekNum = document.createElement('li');

        // Build the div content out to show the week, and titles with links
        weekNum.textContent = `${week.week} : `;
        week.links.forEach((link, index) => {
            let titleLink = document.createElement('a');
            titleLink.href = link.url;
            titleLink.textContent = `${link.title}`;

            //Add | before all links except 1st one
            if (index > 0) {
                weekList.appendChild(document.createTextNode(' | '));
            }

            weekList.appendChild(titleLink);
        });

        // Append the section with the created elements
        weekNum.appendChild(weekList);
        cards.appendChild(weekNum);
    });
};
