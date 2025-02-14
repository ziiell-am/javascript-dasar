// layout
let registerLayout = document.getElementById('registerLayout');
let loginLayout = document.getElementById('loginLayout');
let button = document.getElementById('buttonLayout');

// button
let registerButton = document.getElementById('registerButton');
let loginButton = document.getElementById('loginButton');
let logoutButton = document.getElementById('logoutButton');

// message
let loginSuccess = document.getElementById('loginSuccess');
let tryAgain = document.getElementById('tryAgain');

// value register
let emailRegister = document.getElementById('emailRegister');
let usernameRegister = document.getElementById('usernameRegister');
let passwordRegister = document.getElementById('passwordRegister');

// value login
let usernameLogin = document.getElementById('usernameLogin');
let passwordLogin = document.getElementById('passwordLogin');

registerLayout.style.display = 'none';
logoutButton.style.display = 'none';
loginSuccess.style.display = 'none';
tryAgain.style.display = 'none';

function onRegister() {
    localStorage.setItem('emailRegister', emailRegister.value);
    localStorage.setItem('usernameRegister', usernameRegister.value);
    localStorage.setItem('passwordRegister', passwordRegister.value);
    registerLayout.style.display = 'block';
    loginLayout.style.display = 'none';
    logoutButton.style.display = 'none';
    if (
        localStorage.getItem('emailRegister') &&
        localStorage.getItem('usernameRegister') &&
        localStorage.getItem('passwordRegister')
    )   {
        location.reload();
    }
}

function onLogin() {
    if (usernameLogin.value == 'ziel' && passwordLogin.value == '111') {
        loginSuccess.style.display = 'block';
        logoutButton.style.display = 'block';
        loginButton.style.display = 'none';
        registerButton.style.display = 'none';
        loginLayout.style.display = 'none';
    } else if (
        localStorage.getItem('emailRegister') &&
        localStorage.getItem('usernameRegister') &&
        localStorage.getItem('passwordRegister') 
    ) {
        loginSuccess.style.display = 'block';
        logoutButton.style.display = 'block';
        loginButton.style.display = 'none';
        registerButton.style.display = 'none';
        loginLayout.style.display = 'none';
    } else {
        tryAgain.style.display='block'
    }
}

function onLogout () {
    localStorage.clear()
    location.reload()
}