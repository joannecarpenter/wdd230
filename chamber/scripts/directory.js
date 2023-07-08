const baseURL = "https://joannecarpenter.github.io/wdd230/";
const membersURL = "https://joannecarpenter.github.io/wdd230/chamber/data/members.json";

// Link to table in html
const businesses = document.querySelector('#businesses');

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
        // Create table row for appending all table data items
        let row = document.createElement('tr');

        // Create new table data box for each piece of info
        // Insert appropriate json file data to each table box
        // Append each <td> to the <tr>
        let name = document.createElement('td');
        name.textContent = member.name;
        row.appendChild(name);

        let address = document.createElement('td');
        address.textContent = member.address;
        row.appendChild(address);

        let phone = document.createElement('td');
        phone.textContent = member.phone;
        row.appendChild(phone);

        let url = document.createElement('td');
        url.textContent = member.url;
        row.appendChild(url);

        let industryInfo = document.createElement('td');
        industryInfo.textContent = member.icon + ` ${member.industry}`;
        row.appendChild(industryInfo);

        // Append tr to the table
        businesses.appendChild(row);
   
    });
}