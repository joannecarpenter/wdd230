const userInput = document.querySelector('input');
const inputAddButton = document.querySelector('button');
const scriptureList = document.querySelector('ul');

inputAddButton.addEventListener('click', () => {
    const inputItem = userInput.value;
    if (inputItem != '') {
        const scriptureItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        scriptureItem.textContent = inputItem;     
        deleteButton.textContent = '❌';

        scriptureItem.appendChild(deleteButton);
        scriptureList.appendChild(scriptureItem);

        deleteButton.addEventListener('click', () => {
            scriptureList.removeChild(scriptureItem);
            userInput.focus();
        })
        
        inputItem = '';  
    }
});