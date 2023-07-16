// Select the spotlight div
const spotlightContainer = document.querySelector('#spot-box');
// Create an array to store the possible spotlights
const spotlights = [];
// Create an array to store the random indexes used to choose random members from the spotlights array
const randomIndexes = [];


const baseURL = "https://joannecarpenter.github.io/wdd230/";
const membersURL = "https://joannecarpenter.github.io/wdd230/chamber/data/members.json";


async function getMembers(url) {
    try {   
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();

            filterMembers(data.members);
            displaySpotlights();
        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
            console.log(error);
    }
}

getMembers(membersURL);

// Filter members to silver and gold levels only, and add them to the spotlights array 
const filterMembers = (members) => {
    members.forEach((member) => {
        let name = member.name;
        let membership = member.memLevel;
        let info = `${member.icon}  ${member.industry}`;
        let website = member.url;

        // If membership is silver or gold, add them to the spotlights array
        if (membership === 'Silver' || membership === 'Gold') {
            let memberDetails = `${name}, ${info}, ${website}`;
            spotlights.push(memberDetails); 
        }                    
    });
}

function displaySpotlights() {
    for (let i = 0; i < 3; i++) {
        // Choose a random number based on the length of the spotlights array and use that as the member index
        let randomIndex = Math.floor(Math.random() * spotlights.length);

        // Eliminate repeats of the same index number choice
        let exists = randomIndexes.includes(randomIndex)
        if (exists) {
            i--; 
            continue; }
        randomIndexes.push(randomIndex);
        let randomMember = spotlights[randomIndex];
        
        // Split the member string into pieces to be placed in the document
        let memberParts = randomMember.split(', ');
        let name = memberParts[0];
        let info = memberParts[1];
        let website = memberParts[2];

        // Create the elements and content for company profile
        let profile = document.createElement('div');
        profile.setAttribute('class', 'profile');

        let companyName = document.createElement('h3');
        companyName.textContent = name;
        profile.appendChild(companyName);

        let companyInfo = document.createElement('p');
        companyInfo.innerHTML = info;
        profile.appendChild(companyInfo);

        let companyWeb = document.createElement('a');
        companyWeb.setAttribute('href', website);
        companyWeb.textContent = 'Website';
        profile.appendChild(companyWeb);

        // Add company profile to spotlight box
        spotlightContainer.appendChild(profile);        
    };
}