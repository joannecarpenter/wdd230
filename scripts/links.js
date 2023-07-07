const baseURL = "https://joannecarpenter.github.io/wdd230/";
const linksURL = "https://joannecarpenter.github.io/wdd230/data/links.json";

async function getLinks(url) {
    try {   
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            //displayLinks(data);
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
        let listItem = document.createElement('li');
        let week = item.week;
        listItem.textContent = week;
        
        links.forEach((link) => {
            let linkAnchor = document.createElement('a');
            let url = link.url;
            let title = link.title;
            linkAnchor.setAttribute('href', url);
            linkAnchor.setAttribute('title', title);
            listItem.appendChild(linkAnchor);
        });
        
    });
}