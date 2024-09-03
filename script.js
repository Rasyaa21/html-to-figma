document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const username = 'admin';
    const password = 'admin';

    const userInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;


    if (userInput === username && passwordInput === password) {
        alert('Login Success')
        window.location.href = '/index.html'
    } else {
        alert('Login Failed')
    }

})