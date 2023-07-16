// ------ Selectors ------
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecast1 = document.querySelector('#day-one');
const forecast2 = document.querySelector('#day-two');
const forecast3 = document.querySelector('#day-three');

// ------ API Call URLs ------
// const dailyUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=36.45&lon=-76.02&units=imperial&appid=3cadb9387b7787320f13861c558ffe18';
// const fiveDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=36.45&lon=-76.02&units=imperial&appid=3cadb9387b7787320f13861c558ffe18';

const dailyUrl = getWeatherUrl('weather', '36.45', '-76.02');
const fiveDayUrl = getWeatherUrl('forecast', '36.45', '-76.02');

function getWeatherUrl(weatherDetail, latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/${weatherDetail}?lat=${latitude}&lon=${longitude}&units=imperial&appid=3cadb9387b7787320f13861c558ffe18`;
    return url;
}

// ------ API Fetches ------
async function getCurrentData(url) {
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayWeather(data); 
        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
            console.log(error);
        }       
    }

async function getForecastData(url) {
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayForecast(data); 
        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
            console.log(error);
        }       
    }


// ------ Data Displays ------
function displayWeather(data) {
    currentTemp.textContent = `${Math.round(data.main['temp'])} \u00B0F.`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description = `${data.weather[0].description}`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', 'image icon for current weather');
    captionDesc.textContent = description;
}

function displayForecast(data) {
    const today = new Date();

    // Day One
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    let day1Parts = tomorrow.toDateString().split(' ');
    let day1Date = `${day1Parts[0]}, ${day1Parts[1]} ${day1Parts[2]}`;
    const day1Temp = Math.round(data.list[0]['main']['temp']);
    forecast1.textContent = `${day1Date}:  ${day1Temp} \u00B0F`;

    // Day Two
    let day2 = new Date();
    day2.setDate(today.getDate() + 2);
    let day2Parts = day2.toDateString().split(' ');
    let day2Date = `${day2Parts[0]}, ${day2Parts[1]} ${day2Parts[2]}`;
    const day2Temp = Math.round(data.list[8]['main']['temp']);
    forecast2.textContent = `${day2Date}:  ${day2Temp} \u00B0F`;

    // Day Three
    let day3 = new Date();
    day3.setDate(today.getDate() + 3);
    let day3Parts = day3.toDateString().split(' ');
    let day3Date = `${day3Parts[0]}, ${day3Parts[1]} ${day3Parts[2]}`;
    const day3Temp = Math.round(data.list[16]['main']['temp']);
    forecast3.textContent = `${day3Date}:  ${day3Temp} \u00B0F`;
}

getCurrentData(dailyUrl);
getForecastData(fiveDayUrl);

// Currituck, NC latitude & longitude --> 36.44640531846864, -76.01701020821504