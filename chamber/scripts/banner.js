const bannerButton = document.querySelector('.banner-close');
const container = document.querySelector('#banner-container');



bannerButton.addEventListener('click', () => {
    container.style.display = 'none';
});

const day = new Date().getDay();

if ((day < 1) || (day > 3)) {
    container.style.display = 'none';
}