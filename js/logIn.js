let userName = document.querySelector('#userName'),
    userPass = document.querySelector('#userPass');
let logInBtn = document.querySelector('.enter'),
    registryBtn = document.querySelector('.registry');

logInBtn.addEventListener('click', function() {
    if(userName.value === 'root' && userPass.value === '1993099a') {
        window.location.href = './task_maneger.html';
    } else {
        alert('Wrong password or login. Please try again or registry');
    }
});
registryBtn.addEventListener('click', function() {
    window.location.href = './registry.html';
});
