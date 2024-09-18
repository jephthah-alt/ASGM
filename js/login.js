document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById('signup-name').value.trim();
    let email = document.getElementById('signup-email').value.trim();
    let password = document.getElementById('signup-password').value.trim();
    let confirmPassword = document.getElementById('signup-confirm-password').value.trim();

    // Get error elements
    let nameError = document.getElementById('signup-name-error');
    let emailError = document.getElementById('signup-email-error');
    let passwordError = document.getElementById('signup-password-error');
    let confirmPasswordError = document.getElementById('signup-confirm-password-error');

    let isValid = true;

    // Clear previous errors
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';
    document.getElementById('signup-name').classList.remove('error');
    document.getElementById('signup-email').classList.remove('error');
    document.getElementById('signup-password').classList.remove('error');
    document.getElementById('signup-confirm-password').classList.remove('error');

    // Regex for email and password validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // Validate fields
    if (name === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        document.getElementById('signup-name').classList.add('error');
        isValid = false;
    }

    if (email === '') {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        document.getElementById('signup-email').classList.add('error');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email format';
        emailError.style.display = 'block';
        document.getElementById('signup-email').classList.add('error');
        isValid = false;
    }

    if (password === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        document.getElementById('signup-password').classList.add('error');
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Password must be 6 to 20 characters, with at least one numeric digit, one uppercase, and one lowercase letter';
        passwordError.style.display = 'block';
        document.getElementById('signup-password').classList.add('error');
        isValid = false;
    }

    if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Confirm your password';
        confirmPasswordError.style.display = 'block';
        document.getElementById('signup-confirm-password').classList.add('error');
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        document.getElementById('signup-confirm-password').classList.add('error');
        isValid = false;
    }

    // If all is valid, save user and redirect
    if (isValid) {
        localStorage.setItem('user', JSON.stringify({ name: name, email: email, password: password }));
        window.location.href = 'page.html'; // Redirect to login page after sign-up
    }
});
