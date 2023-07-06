const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=3cadb9387b7787320f13861c558ffe18';

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data)  // debug/check for accuracy
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
            console.log(error);
        }
    }

apiFetch(url);

function displayResults(data) {
    currentTemp.textContent = `${data.main['temp']} \u00B0F.`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description = `${data.weather[0].description}`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', 'image icon for current weather');
    captionDesc.textContent = description;
}