const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('Email');
const password = document.getElementById('password');
const passwordAgain = document.getElementById('passwordAgain"');


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}


// event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if(username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
});