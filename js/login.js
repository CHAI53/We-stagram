let password  = document.getElementById('pswd');
let loginBtn =   document.getElementsByClassName('login-btn');

function  changeOpacity() {
    loginBtn[0].style.backgroundColor = 'rgb(83, 171, 243)';
}

password.addEventListener('keydown', changeOpacity);

