const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    let isValid = true;

    const nameInput = document.getElementById('name');
    const nameError = document.querySelector('#name + .errorMessage');
    const name = nameInput.value.trim();
    
    if (name === '') {
        nameError.textContent = 'Name is required.';
        nameInput.parentNode.classList.add('error');
        nameInput.parentNode.classList.remove('success');
        isValid = false;
    } else {
        nameError.textContent = '';
        nameInput.parentNode.classList.add('success');
        nameInput.parentNode.classList.remove('error');
    }

    const emailInput = document.getElementById('email');
    const emailError = document.querySelector('#email + .errorMessage');
    const email = emailInput.value.trim();
    
    if (email === '') {
        emailError.textContent = 'Email is required.';
        emailInput.parentNode.classList.add('error');
        emailInput.parentNode.classList.remove('success');
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.parentNode.classList.add('error');
        emailInput.parentNode.classList.remove('success');
        isValid = false;
    } else {
        emailError.textContent = '';
        emailInput.parentNode.classList.add('success');
        emailInput.parentNode.classList.remove('error');
    }

    const passwordInput = document.getElementById('password');
    const passwordError = document.querySelector('#password + .errorMessage');
    const password = passwordInput.value.trim();
    
    if (password === '') {
        passwordError.textContent = 'Password is required.';
        passwordInput.parentNode.classList.add('error');
        passwordInput.parentNode.classList.remove('success');
        isValid = false;
    } else if (password.length < 6) { 
        passwordError.textContent = 'Password must be at least 6 characters.';
        passwordInput.parentNode.classList.add('error');
        passwordInput.parentNode.classList.remove('success');
        isValid = false;
    } else {
        passwordError.textContent = '';
        passwordInput.parentNode.classList.add('success');
        passwordInput.parentNode.classList.remove('error');
    }

    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordError = document.querySelector('#confirmPassword + .errorMessage');
    const confirmPassword = confirmPasswordInput.value.trim();
    
    if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Confirm Password is required.';
        confirmPasswordInput.parentNode.classList.add('error');
        confirmPasswordInput.parentNode.classList.remove('success');
        isValid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordInput.parentNode.classList.add('error');
        confirmPasswordInput.parentNode.classList.remove('success');
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordInput.parentNode.classList.add('success');
        confirmPasswordInput.parentNode.classList.remove('error');
    }
    if (isValid) {
        myForm.submit();
    }
});
