// Hidden Timestamp
const date = new Date();
document.getElementById('time').value = date;


// Title/Position Input Error Testing
const title = document.getElementById('title');
const form = document.getElementById('form');
 
const errorElement = document.getElementById('error');

function testTitle() {
    let userInput = title.value; // pulls user's input from the title field and stores it in the variable "userInput"
    const titlePattern = /^[a-zA-Z\-\s]{7,}$/;  // establishes the title pattern and storess it in the variable "titlePattern"
    return titlePattern.test(userInput);  // Compares established titlePattern to userInput in title field; Returns true or false
}

form.addEventListener('submit', (e) => 
{
    let messages = [];
    let testResult = testTitle();
    if (testResult === false) {
        messages.push('Title/Position must be more than 7 characters and cannot include special characters.');
    }
    
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
   
})
