const password = document.getElementById('password'); //pw input
const confirmPassword = document.getElementById('confirmPassword'); //cPW input
const validation = document.getElementById('passwordValidation'); //pw span
const passwordMatch = document.getElementById('passwordMatch'); //cPW span

const btn = document.getElementById('submitButton');

password.addEventListener('input', () => {
    passwordCheck();
});

confirmPassword.addEventListener('input', () => {
    matchConfirm();
})

function passwordCheck() {
    if (password.value.length > 0 && password.value.length < 8) {
        validation.classList.remove('toggle');
        console.log('invalid');
    }
    else if (password.value.length > 7) {
        validation.classList.add('toggle');
        console.log('valid')
    }
};

function matchConfirm() {
    if (password.value !== confirmPassword.value) {
        passwordMatch.classList.remove('toggle');
    }
    else if (password.value === confirmPassword.value) {
        passwordMatch.classList.add('toggle');
    }
}