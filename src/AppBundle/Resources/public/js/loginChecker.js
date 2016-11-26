var usernameText = 'Username', passwordText = 'Password';
var usernameField = false, passwordField = false;

$( document ).ready(function() {
    checkButton();
    function checkButton () {
        if (usernameField == false || passwordField == false) {
            $('.button-block').prop('disabled', true);
        } else {
            $('.button-block').prop('disabled', false);
        }
    }

    $('#login_Username').focusin(function() {
        var label = $(this).prev();
        if (label.text() !== 0) {
            label.text(" ");
            usernameField = true;
            checkButton();
        }
    });

    $('#login_Username').focusout(function() {
        var label = $(this).prev();
        if ($(this).val() == '') {
            label.text(usernameText);
            usernameField = false;
            checkButton();
        }
    });
    $('#login_Password').focusin(function() {
        var label = $(this).prev();
        if (label.text() !== 0) {
            label.text(" ");
            passwordField = true;
            checkButton();
        }
    });

    $('#login_Password').focusout(function() {
        var label = $(this).prev();
        if ($(this).val() == '') {
            label.text(passwordText);
            passwordField = false;
            checkButton();
        }
    });
});