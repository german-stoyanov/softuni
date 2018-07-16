import $ from 'jquery'


    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_r186g5mm7";
    const masterSecret = "65d61545fd4b40f1ab5ae39e11027838"
    const kinveyAppSecret = "c6c9470ea74a43e6b08575a856416dd6";

    // Creates the authentication header
    function makeAuth(type) {
        if(type === 'basic'){
            return 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
        }else if(type==='kinvey'){
            return 'Kinvey ' + sessionStorage.getItem('authtoken');
        }else{
            return 'Basic ' + btoa(kinveyAppKey + ':' + masterSecret)
        }

        
    }

    // Creates request object to kinvey
    function makeRequest(method, module, endpoint, auth) {
        return  {
            method,
            url: kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint,
            headers: {
                'Authorization': makeAuth(auth),
            }
        };
    }

    // Function to return GET promise
    function get (module, endpoint, auth) {
        return $.ajax(makeRequest('GET', module, endpoint, auth));
    }

    // Function to return POST promise
    function post (module, endpoint, auth, data) {
        let req = makeRequest('POST', module, endpoint, auth);
        
        req.data = data
        
        return $.ajax(req);
    }

    // Function to return PUT promise
    function update (module, endpoint, auth, data) {
        let req = makeRequest('PUT', module, endpoint, auth);
        req.data = data;
        return $.ajax(req);
    }

    // Function to return DELETE promise
    function remove (module, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', module, endpoint, auth));
    }

    export default {
        get,
        post,
        update,
        remove
    }
