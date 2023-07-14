const bannerButton = document.querySelector('.banner-close');
const container = document.querySelector('#banner-container');



bannerButton.addEventListener('click', () => {
    container.style.display = 'none';
});