document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Your authentication logic goes here
    // For simplicity, let's say username is "admin" and password is "password"
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});
