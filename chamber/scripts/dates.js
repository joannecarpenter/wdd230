document.querySelector('#year').innerHTML = new Date().getFullYear();
document.querySelector('#lastModified').innerHTML = new Date(document.lastModified);

// Using localStorage to store the latest visit date by the client, 
// display one of three possible messages about the time between page visits in the sidebar content area.
localStorage.setItem('lastVisit', '2023-06-25')

// Initialize the display element
const visitDisplay = document.querySelector('.visit-info');

// Today's date
const todayDate = new Date();
// Today's date expressed in milliseconds (epoch time)
const todayInMs = Date.now();

// Get last visit info from local storage
const lastVisit = localStorage.getItem('lastVisit');
// Convert lastVisitInfo to ms
const lastVisitInMs = Date.parse(lastVisit);

// Set milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;

// find difference between epoch times in ms and convert to days
let daysBetweenVisits = (todayInMs - lastVisitInMs) / msToDays;

// Display desired visit message (from function)
printVisitMessage();
function printVisitMessage() {
    if (daysBetweenVisits = 0) {
        visitDisplay.innerHTML = 'Welcome! Let us know if you have any questions.';
        return;
    }
    else if (daysBetweenVisits < 1) {
        visitDisplay.innerHTML = 'Back so soon! Awesome!';
        return;
    }
    else {
        visitDisplay.innerHTML = `You last visited ${lastVisit} days ago`;
        return;
    }
}

