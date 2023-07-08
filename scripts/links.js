const baseURL = "https://joannecarpenter.github.io/wdd230/";
const linksURL = "https://joannecarpenter.github.io/wdd230/data/links.json";

// Create the <ul>
const list = document.getElementById('list');

async function getLinks(url) {
    try {   
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            // console.table(data.weeks);  <--DEBUG
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
            console.log(error);
    }
}

getLinks(linksURL);

const displayLinks = (weeks) => {
    weeks.forEach((item) => {
        // Create the <li>
        let listItem = document.createElement('li');
        // Set the textContent for the <li>
        listItem.textContent = `${item['week']}: `;
        
        // Make a loop here to go through each link in that array of links
        // until the index equals the length of the links array minus 1
        let loopTime = item['links'].length;
        let i = 0;
        do {
            // Create the <a>
            let anchor = document.createElement('a');
            // let link = linksArray[i].url;
            let link = item.links[i].url;
            let linkDescription = item.links[i].title;   
        
            // continue code to create the anchor content
            // Set the href attribute for the <a>
            anchor.setAttribute('href', link);
            // Set the textContent for the <a>
            anchor.textContent = linkDescription;
            
            // Append the <a> to the <li>
            listItem.appendChild(anchor);
            // Append the <li> to the <ul>
            list.appendChild(listItem);
            // Increment i
            i++;
        } while (i < loopTime);
    });
}
