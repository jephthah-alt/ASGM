document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    let username = document.getElementById('login-username').value.trim();
    let password = document.getElementById('login-password').value.trim();

    // Get error elements
    let usernameError = document.getElementById('login-username-error');
    let passwordError = document.getElementById('login-password-error');

    let isValid = true;

    // Clear previous errors
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    document.getElementById('login-username').classList.remove('error');
    document.getElementById('login-password').classList.remove('error');

    // Validate fields
    if (username === '') {
        usernameError.textContent = 'Username is required';
        usernameError.style.display = 'block';
        document.getElementById('login-username').classList.add('error');
        isValid = false;
    }

    if (password === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        document.getElementById('login-password').classList.add('error');
        isValid = false;
    }

    if (isValid) {
        let user = JSON.parse(localStorage.getItem('user'));

        if (user && user.email === username && user.password === password) {
            window.location.href = 'incomplete.html'; // Redirect to incomplete page after login
        } else {
            usernameError.textContent = 'Invalid username or password';
            usernameError.style.display = 'block';
        }
    }
});
