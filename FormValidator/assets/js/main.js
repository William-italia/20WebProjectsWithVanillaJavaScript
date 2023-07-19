const form = document.getElementById('form');
const username = document.getElementById('Username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const passwordAgain = document.getElementById('PasswordConfirmation');


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkRequired(inputArr) {
    inputArr.forEach((input) => {
      if(input.value.trim() === '') {
        showError(input, `${input.id} is requerid`)
    } else {
        showSuccess(input);
        }     
    });
};

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${input.id} is required at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${input.id} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordMatch(input1, input2) {
    if(input2.value !== input1.value) {
        showError(input2, 'passwords do not match')
    } else if(input2.value === '') {
        showError(input2, 'Password is required')
    } else {
        showSuccess(input2);
    }
}

function checkEmail(input) {

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${input.id} is not valid`);
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username, email, password, passwordAgain]);
    checkLength(username, 3, 30);
    checkLength(password, 6, 20);
    checkPasswordMatch(password, passwordAgain);
    checkEmail(email);
});


// function CheckEmail(input) {
    //     // Expressão regular para validar o formato do email
    //     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     // Verificar se o email corresponde ao formato esperado
    //     if(emailRegex.test(input.value.trim())) {
    //         showSuccess(input);
    //     } else {
    //         showError(input, 'Email is not valid');
    //     }
    //   };

// // check password
// function checkPasswordsMatch(input1, input2) {
//     if (input2.value !== input1.value) {
//         showError(input2, 'passwords do not match');
//     } else {
//         showSuccess(input2);
//     }
// }


// // check re quired fields
// function checkRequired(inputArr) {
//     inputArr.forEach(function(input) {
//        if(input.value.trim() === '') {
//         showError(input, `${getFieldName(input)} is requerid`)
//     } else {
//         showSuccess(input);
//     }
// });
// }


// // event listeners
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     checkRequired([username, email, password, passwordAgain]);
//     checkLength(username, 3, 30);
//     checkLength(password, 6, 20);
//     CheckEmail(email)
//     checkPasswordsMatch(password, passwordAgain);
// });
// // show error
// function showError(input, message) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;
// }

// // show success
// function showSuccess(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }

// // check email is valid
// function CheckEmail(input) {
//     // Expressão regular para validar o formato do email
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // Verificar se o email corresponde ao formato esperado
//     if(emailRegex.test(input.value.trim())) {
//         showSuccess(input);
//     } else {
//         showError(input, 'Email is not valid');
//     }
//   };


  
// // check re quired fields
// function checkRequired(inputArr) {
//     inputArr.forEach(function(input) {
//        if(input.value.trim() === '') {
//         showError(input, `${getFieldName(input)} is requerid`)
//     } else {
//         showSuccess(input);
//     }
// });
// }

// // Check input length
// function checkLength(input, min, max) {
//     if(input.value.length < min) {
//         showError(input, `${getFieldName(input)} is required at least ${min} characters`)
//     } else if(input.value.length > max) {
//         showError(input, `${getFieldName(input)} must be less than ${max} characters`)
//     } else {
//         showSuccess(input);
//     }
// }


// // GetFieldName
// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }



// // event listeners
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     checkRequired([username, email, password, passwordAgain]);
//     checkLength(username, 3, 30);
//     checkLength(password, 6, 20);
//     CheckEmail(email)
//     checkPasswordsMatch(password, passwordAgain);
// });


  //////////////////////////////////////
   // if(username.value === '') {
    //     showError(username, 'Username is required');
    // } else {
    //     showSuccess(username);
    // }
    
    // if(email.value === '') {
    //     showError(email, 'Email is required');
    // } else if(!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid');
    // } else {
    //     showSuccess(email);
    // }
    
    // if(password.value === '') {
    //     showError(password, 'Password is required');
    // } else {
    //     showSuccess(password);
    // }
    
    // if(passwordAgain.value === '') {
    //     showError(passwordAgain, 'Password Confirmation is required');
    // } else {
    //     showSuccess(passwordAgain);
    // }