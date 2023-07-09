const baseURL = "https://joannecarpenter.github.io/wdd230/";
const membersURL = "https://joannecarpenter.github.io/wdd230/chamber/data/members.json";

// Link to section in html for appending all business cards
const cards = document.querySelector('#businesses');

async function getMembers(url) {
    try {   
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.table(data.members);  //DEBUG - REMOVE AFTER FUNCTIONALITY CONFIRMED
            displayMembers(data.members);
        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
            console.log(error);
    }
}

getMembers(membersURL);

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create div container for appending each businesses <ul>
        let card = document.createElement('div');
        card.setAttribute('class', 'business');
        // Create ul for appending each business's li item details
        let details = document.createElement('ul');

        // Create new li for each piece of info
        // Insert appropriate json file data to each li
        // Append each <li> to the <ul>
        let name = document.createElement('li');
        name.setAttribute('class', 'name');
        name.textContent = member.name;
        details.appendChild(name);

        let streetAddress = document.createElement('li');
        streetAddress.textContent = member.streetAddress;
        details.appendChild(streetAddress);

        let cityStateZip = document.createElement('li');
        cityStateZip.textContent = member.cityStateZip;
        details.appendChild(cityStateZip);

        let phone = document.createElement('li');
        phone.textContent = member.phone;
        details.appendChild(phone);

        let url = document.createElement('li');
        let anchor = document.createElement('a');
        let link = member.url;
        anchor.setAttribute('href', link);
        anchor.textContent = 'Website';
        url.appendChild(anchor);
        details.appendChild(url);

        let industryInfo = document.createElement('li');
        industryInfo.innerHTML = `${member.icon}  ${member.industry}`;
        details.appendChild(industryInfo);


        // Append ul (business details) to the div (card)
        card.appendChild(details);
        // Append the div (card) to the section (cards)
        cards.appendChild(card);
    });
}


/* Toggle Menu Buttons for Directory Page */
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
//const section = document.querySelector("section");

gridButton.addEventListener("click", () => {
	cards.classList.add("grid");
	cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
	cards.classList.remove("grid");
});
