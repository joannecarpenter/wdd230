const baseURL = "https://joannecarpenter.github.io/wdd230/";
const membersURL = "https://joannecarpenter.github.io/wdd230/chamber/data/members.json";

// Link to table in html
const businesses = document.querySelector('#businesses');

async function getMembers(url) {
    try {   
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            //console.table(data.members);  //DEBUG - REMOVE AFTER FUNCTIONALITY CONFIRMED
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
        //name.setAttribute('class', 'tableData');
        name.textContent = member.name;
        row.appendChild(name);

        let address = document.createElement('td');
        //address.setAttribute('class', 'tableData');
        address.textContent = member.address;
        row.appendChild(address);

        let phone = document.createElement('td');
        //phone.setAttribute('class', 'tableData');
        phone.textContent = member.phone;
        row.appendChild(phone);

        let url = document.createElement('td');
        //url.setAttribute('class', 'tableData');
        let anchor = document.createElement('a');
        let link = member.url;
        anchor.setAttribute('href', link);
        anchor.textContent = 'Website';
        url.appendChild(anchor);
        row.appendChild(url);

        let industryInfo = document.createElement('td');
        //industryInfo.setAttribute('class', 'tableData');
        industryInfo.innerHTML = member.icon + ` ${member.industry}`;
        row.appendChild(industryInfo);

        // Append tr to the table
        businesses.appendChild(row);
   
    });
}

/* CANNOT GET ANY OF THIS TO WORK 
NEXT THOUGHT IS to add a class attribute to each <td> called list, 
add css styles for .list and .grid,
then create a function that sets the appropriate class attribute (like add remove)
when the button is clicked*/

/* Toggle Menu Buttons for Directory Page */
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const tableData = document.querySelector('td');



gridButton.addEventListener('click', () => {
	tableData.classList.add('grid');
    tableData.classList.remove('list');	
})

listButton.addEventListener('click', () => {
	tableData.classList.add('list');
    tableData.classList.remove('grid');	
})
