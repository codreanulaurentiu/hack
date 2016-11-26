var userText = 'Username', emailText = 'Email', firstNameText = 'First Name', lastNameText = 'First Name', plainPassFirstText = 'Password', plainPassSecondText ='Repeat Password';
var userField = false, emailField = false, firstNameField = false, lastNameField = false, ppFirstField = false, ppSecondField = false;

$( document ).ready(function() {
    checkButton();
    function checkButton () {
        if (userField == false || emailField == false || firstNameField == false || lastNameField == false || ppFirstField == false || ppSecondField == false) {
            $('.button-block').prop('disabled', true);
        } else {
            $('.button-block').prop('disabled', false);
        }
    }

    $('#register_username').focusin(function() {
        var label = $(this).prev();
        if (label.text() !== 0) {
            label.text(" ");
            userField = true;
            checkButton();
        }
    });

    $('#register_username').focusout(function() {
        var label = $(this).prev();
        if ($(this).val() == '') {
            label.text(userText);
            userField = false;
            checkButton();
        }
    });

    $('#register_email').focusin(function() {
        var label = $(this).prev();
        if (label.text() !== 0) {
            label.text(" ");
            emailField = true;
            checkButton();
        }
    });

    $('#register_email').focusout(function() {
        var label = $(this).prev();
        if ($(this).val() == '') {
            label.text(emailText);
            emailField = false;
            checkButton();
        }
    });

    $('#register_firstName').focusin(function() {
        var label = $(this).prev();
        if (label.text() !== 0) {
            label.text(" ");
            firstNameField = true;
            checkButton();
        }
    });

    $('#register_firstName').focusout(function() {
        var label = $(this).prev();
        if ($(this).val() == '') {
            label.text(firstNameText);
            firstNameField = false;
            checkButton();
        }
    });

    $('#register_lastName').focusin(function() {
        var label = $(this).prev();
        if (label.text() !== 0) {
            label.text(" ");
            lastNameField = true;
            checkButton();
        }
    });

    $('#register_lastName').focusout(function() {
        var label = $(this).prev();
        if ($(this).val() == '') {
            label.text(lastNameText);
            lastNameField = false;
            checkButton();
        }
    });

    $('#register_plainPassword_first').focusin(function() {
        var label = $(this).prev();
        if (label.text() !== 0) {
            label.text(" ");
            ppFirstField = true;
            checkButton();
        }
    });

    $('#register_plainPassword_first').focusout(function() {
        var label = $(this).prev();
        if ($(this).val() == '') {
            label.text(plainPassFirstText);
            ppFirstField = false;
            checkButton();
        }
    });

    $('#register_plainPassword_second').focusin(function() {
        var label = $(this).prev();
        if (label.text() !== 0) {
            label.text(" ");
            ppSecondField = true;
            checkButton();
        }
    });

    $('#register_plainPassword_second').focusout(function() {
        var label = $(this).prev();
        if ($(this).val() == '') {
            label.text(plainPassSecondText);
            ppSecondField = false;
            checkButton();
        }
    });
});