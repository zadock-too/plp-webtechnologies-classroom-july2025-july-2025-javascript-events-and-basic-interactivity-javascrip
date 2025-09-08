// Color Changer Feature
// Changes the background color of the page randomly
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Counter Feature
// Implements a simple counter with increment and decrement functionality
const countDisplay = document.getElementById('countDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
});

// Form Validation
// Custom form validation with error messages
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Username validation
    if (username.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});