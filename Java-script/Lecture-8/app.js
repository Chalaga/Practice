const password = document.querySelector('#password')
const email = document.getElementById('email')
const email_error = document.querySelector('.email_error')
// const password_error = document.querySelector('.password_error')



email.addEventListener(('input'), (e) => {
    var emailregex = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailvalue = e.target.value;
    const emailtest = emailregex.test(emailvalue);
    email_error.style.display = emailtest ? 'none' : 'Block';
})


password.addEventListener(('input'), () => {
    var PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const Passwordvalue = password.value
    const PasswordTest = PasswordRegex.test(Passwordvalue)

    const password_error = document.querySelector('.password_error').style.display = PasswordTest ? "none" : 'block'


})