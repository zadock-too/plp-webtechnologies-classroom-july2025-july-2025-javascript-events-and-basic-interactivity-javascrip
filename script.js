// Theme Toggle Feature
// Implements light/dark mode switching
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
});

// Color Changer Feature
// Changes the background color of the page randomly
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Counter Feature
// Implements a counter with increment, decrement, and reset functionality
const countDisplay = document.getElementById('countDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

function updateCounter() {
    countDisplay.textContent = count;
    countDisplay.style.color = count < 0 ? 'red' : count > 0 ? 'green' : 'black';
}

// FAQ Feature
// Implements collapsible FAQ sections
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    answer.style.display = 'none';

    question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
        question.classList.toggle('active');
    });
});

// Form Validation
// Enhanced custom form validation with real-time feedback
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Real-time validation
username.addEventListener('input', () => validateUsername());
email.addEventListener('input', () => validateEmail());
password.addEventListener('input', () => validatePassword());

function validateUsername() {
    const value = username.value.trim();
    if (value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long';
        return false;
    }
    usernameError.textContent = '✓';
    usernameError.style.color = 'green';
    return true;
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }
    emailError.textContent = '✓';
    emailError.style.color = 'green';
    return true;
}

function validatePassword() {
    const value = password.value;
    const hasLetters = /[a-zA-Z]/.test(value);
    const hasNumbers = /\d/.test(value);
    
    if (value.length < 6 || !hasLetters || !hasNumbers) {
        passwordError.textContent = 'Password must be at least 6 characters and include both letters and numbers';
        return false;
    }
    passwordError.textContent = '✓';
    passwordError.style.color = 'green';
    return true;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isValid = validateUsername() && validateEmail() && validatePassword();

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
        [usernameError, emailError, passwordError].forEach(error => {
            error.textContent = '';
            error.style.color = '';
        });
    }
});