/* Hamburger Mobile Menu Button */
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

/* Dark Mode Button */
const modeButton = document.querySelector('#mode');
const main = document.querySelector('main');

modeButton.addEventListener('click', () => {
	if (modeButton.textContent.includes('☑️')) {
		main.style.background = '#000';
		main.style.color = '#fff';
		modeButton.textContent = 'X';
		modeButton.style.color = 'white';

	} else {
		main.style.background = 'white';
		main.style.color = '#000';
		modeButton.textContent = '☑️';
	}
});
