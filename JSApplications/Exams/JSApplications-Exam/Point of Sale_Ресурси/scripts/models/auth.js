let auth = (() => {
    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);

    }

// user/login
    function login(username, password) {
        let userData = {
            username,
            password,

        };

        return requester.post('user', 'login', 'basic', userData);
    }

    function isAuth() {
        return sessionStorage.getItem('authtoken')!==null
    }

// user/register
    function register(username, password, repeatPassword) {
        let userData = {
            username:username,
            password:password,
        };

        return requester.post('user', '', 'basic', userData);
    }

// user/logout
    function logout() {
        let logoutData = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        return requester.post('user', '_logout', 'kinvey', logoutData);
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.find('span').text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.find('span').text(message);
        errorBox.show();
    }

    function attachNotificationEvents() {
        $("#infoBox, #errorBox").on('click', function () {
            $(this).fadeOut();
        });

        $(document).on({
            ajaxStart: function () {
                $("#loadingBox").show();
            },
            ajaxStop: function () {
                $("#loadingBox").hide();
            }
        });
    }




    return {
        isAuth,
        login,
        register,
        logout,
        saveSession,
        showInfo,
        showError,
        handleError,
        attachNotificationEvents
    }
})()