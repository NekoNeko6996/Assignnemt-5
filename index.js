//
document.getElementById('textarea').textContent = "1.YOU AGREEMENT\nBy using this Site, you agree to be bound by, and to comply with, these Terms and Condition. If you do not agree to these Terms and Condition, please do not use this site.";
const checkBox = document.getElementById('checkbox');
const username = document.getElementById('username');
const password = document.getElementById('pass');
const confirmPass = document.getElementById('confirm-pass');
const email = document.getElementById('email');

//checkbox//
function checkBox_F() {
    if(!checkBox.checked) {
        checkBox.setCustomValidity('Bạn cần đồng ý với điều khoảng dịch vụ của chúng tôi!');
    } else {
        checkBox.setCustomValidity('');
    }
}
checkBox_F();

//username//
const USERNAME_PATTERN = /^\w{4,}$/;
function username_F() {
    if(!USERNAME_PATTERN.test(username.value)) {
        username.setCustomValidity('Phải chứa ít nhất 4 ký tự, không chứa ký tự đặc biệt và không chứa khoảng trắng!');
    } else {
        username.setCustomValidity('');
    }
}
username_F();

//password//
const PASSWORD_PATTERN = /^.{8,}$/;
function password_F() {
    if(!PASSWORD_PATTERN.test(password.value)) {
        password.setCustomValidity('Mật khẩu phải có độ dài tối thiểu 8 ký tự!');
    } else {
        password.setCustomValidity('');
    }
}
password_F();

//confirm-pass// 
function confirmPass_F() {
    if(confirmPass.value != password.value) {
        confirmPass.setCustomValidity('Mật khẩu và nhập lại mật khẩu phải giống nhau!');
    } else {
        confirmPass.setCustomValidity('');
    }
}
confirmPass_F();

//email//
const EMAIL_PATTERN = /^[\w+\.]+@gmail\.com$/;
function email_F() {
    if(!EMAIL_PATTERN.test(email.value)) {
        email.setCustomValidity('Email là bắt buộc và phải đúng định dạng!')
    } else {
        email.setCustomValidity('');
    }
}
email_F();