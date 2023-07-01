// -------- Password Confirmation Check --------
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const message = document.querySelector('#message');

passwordConfirm.addEventListener('focusout', confirmPassword);

function confirmPassword() {
    if (password.value !== passwordConfirm.value) {
    
		message.textContent = 'PASSWORDS DO NOT MATCH!';
		message.style.visibility = 'show';
		passwordConfirm.style.backgroundColor = '#fff0f3';
		passwordConfirm.value = '';
		passwordConfirm.focus();
	} else {
		message.style.display = 'none';
		passwordConfirm.style.backgroundColor = '#fff';
		passwordConfirm.style.color = '#000';
	}
}

// -------- Range Value Display --------
const rangevalue = document.getElementById('rangevalue');
const range = document.getElementById('rating');

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}