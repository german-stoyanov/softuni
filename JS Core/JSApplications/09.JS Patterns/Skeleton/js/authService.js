let auth = (()=>{
    
    function isAuth () {
        return sessionStorage.getItem('authtoken')!== null;
    }
    
    function saveSession (userData) {
        sessionStorage.setItem('authtoken', userData._kmd.authtoken)
        sessionStorage.setItem('username', userData.username)
        sessionStorage.setItem('userId', userData._id)
    }

    function register(username, password) {
        remote.post('user','','basic',{username,password}).then(saveSession).catch(console.error)
    }

    function login(username, password) {
       return remote.post('user','login','basic',{username,password})
    }

    function logout() {
        remote.post('user','_logout','kinvey').then(()=>{
            sessionStorage.clear();
        }).catch(console.error)
    }

    return{
        isAuth,
        login,
        logout,
        register,
        saveSession
    }
})()