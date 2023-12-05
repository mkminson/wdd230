const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.76&lon=-111.89&units=imperial&appid=831719fdf822c3ddb753dbe7ae53f42e';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.76&lon=-111.89&units=imperial&appid=0ec971aba10cb6d6aae6b9d2bd8dea04';

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast-container');

async function apiFetch() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);
    } else {
        throw Error(await response.text());
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

async function apiForecastFetch() {
    const response = await fetch(forecastUrl);
    if (response.ok) {
        const data = await response.json();
        displayForecast(data.list);
    } else {
        throw Error(await response.text());
    }
}

apiForecastFetch();

function displayForecast(forecastData) {
    forecastContainer.innerHTML = '';

    const firstThreeDaysData = forecastData.slice(0, 23);

    const groupedData = new Map();

    firstThreeDaysData.forEach(entry => {
        const forecastDate = new Date(entry.dt_txt);
        const dateKey = forecastDate.toDateString();

        if (!groupedData.has(dateKey)) {
            groupedData.set(dateKey, entry);
        }
    });

    groupedData.forEach(entry => {
        const forecastDate = new Date(entry.dt_txt);
        const dateKey = forecastDate.toDateString();
        const forecastTemp = entry.main.temp;
        const temperature = `${forecastTemp}&deg;F`;

        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');
        forecastCard.innerHTML = `<p>${dateKey}</p>`;
        forecastCard.innerHTML += `<p>${temperature}</p>`;
        forecastContainer.appendChild(forecastCard);
    });
}