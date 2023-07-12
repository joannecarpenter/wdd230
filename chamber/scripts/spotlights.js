const name1 = document.querySelector('#name1');
const info1 = document.querySelector('#info1');
const web1 = document.querySelector('#web1');
const name2 = document.querySelector('#name2');
const info2 = document.querySelector('#info2');
const web2 = document.querySelector('#web2');
const name3 = document.querySelector('#name3');
const info3 = document.querySelector('#info3');
const web3 = document.querySelector('#web3');

const baseURL = "https://joannecarpenter.github.io/wdd230/";
const membersURL = "https://joannecarpenter.github.io/wdd230/chamber/data/members.json";


async function getMembers(url) {
    try {   
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.table(data.members);  //DEBUG - REMOVE AFTER FUNCTIONALITY CONFIRMED
            //displayMembers(data.members);
        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
            console.log(error);
    }
}