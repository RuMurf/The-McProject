$(document).ready(
    function () {
        redirect();
        /**
         * Event handler for when the user attempts to register
         */
        $("#reg-form").submit(function (event) {
            event.preventDefault();
            $.ajax({
                type: 'POST',
                url: '/users/register',
                dataType: 'json',
                data: {
                    'user_name': event.target.inputUsername.value,
                    'email': event.target.inputEmail.value,
                    'password': event.target.inputPassword.value
                },
                success: function (token) {
                    $(location).attr('href', '/users/profileSetup');
                    // Redirect to a login page
                },
                error: function (errMsg) {
                    swal(
                        'Oops...',
                        errMsg.responseJSON.body,
                        'error'
                    )
                }
            });
        });
        $("#log-form").submit(function (event) {
            event.preventDefault();
            $.ajax({
                type: 'POST',
                url: '/users/login',
                dataType: 'json',
                data: {
                    'email': event.target.inputEmail.value,
                    'password': event.target.inputPassword.value
                },
                success: function (token) {
                    $(location).attr('href', '/users/profile');
                    // Redirect to logged in page
                },
                error: function (errMsg) {
                    swal(
                        'Oops...',
                        errMsg.responseJSON.body,
                        'error'
                    )
                }
            });
        });
        function redirect(){
            var verify = $.cookie("Username");
            if (verify.length < 1)
                $(location).attr('href', '/users/login');
        }
    });
