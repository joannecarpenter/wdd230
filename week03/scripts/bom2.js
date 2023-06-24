const userInput = document.querySelector('input');
const inputAddButton = document.querySelector('button');
const scriptureList = document.querySelector('ul');

inputAddButton.addEventListener('click', () => {
    let inputItem = userInput.value;
    if (inputItem != '') {
        displayList(inputItem);
        chaptersArray.push(inputItem);
        setChapterList();
        inputItem = '';
        userInput.focus;
    }
});

function displayList(item) {
    const scriptureItem = document.createElement('li');
    const deleteButton = document.createElement('button');

    scriptureItem.textContent = item;     
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    scriptureItem.appendChild(deleteButton);
    scriptureList.appendChild(scriptureItem);

    deleteButton.addEventListener('click', () => {
        scriptureList.removeChild(scriptureItem);
        deleteChapter(scriptureItem.textContent);
        userInput.focus();
    });
}

function setChapterList() {
    localStorage.setItem('scriptureList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('scriptureList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);  // slices off the last character, red X
    chaptersArray = chaptersArray.filter((scriptureItem) => scriptureItem !== chapter);
    setChapterList();
}
// Assign the chaptersArray to the value of the result of this function or an empty array
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
})
