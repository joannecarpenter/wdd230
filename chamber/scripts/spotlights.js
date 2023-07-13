const spotlightContainer = document.querySelector('#spot-box');
// Create an array to store the possible spotlights
const spotlights = [];

const baseURL = "https://joannecarpenter.github.io/wdd230/";
const membersURL = "https://joannecarpenter.github.io/wdd230/chamber/data/members.json";


async function getMembers(url) {
    try {   
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            //console.log(data);  //DEBUG - REMOVE AFTER FUNCTIONALITY CONFIRMED
            //console.table(data.members);
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
            //console.log(spotlights);
        }                    
    });
}


function GetRandomMember(){
    let randomIndex = Math.floor(Math.random() * spotlights.length) + 1;
    return spotlights[randomIndex];
};

// Randomly select 3 members from the spotlights array, and add them to the page
function displaySpotlights(){
    let count = 1;
    do {
        let randomMember = GetRandomMember();
        //console.log(randomMember);

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
        
        // Increment count to ensure this only gets repeated 3 times
        count ++;

    } while (count < 4);

}