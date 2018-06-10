const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_ry-tnYyiG';
const APP_SECRET = '0257485b986b4bd89c1a49683d2c2e1b';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)}


function loginUser() {
    let regForm = $('#formLogin');
    let username = regForm.find('input[name=username]').val();
    let password = regForm.find('input[name=passwd]').val();
    let data = {username: username, password: password};

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        data,
        headers: AUTH_HEADERS,
        success: function (res) {
            signInUser(res, 'Login successful.');
        },
        error: handleAjaxError
    })
    // POST -> BASE_URL + 'user/' + APP_KEY + '/login'
    // signInUser(res, 'Login successful.')
}

function registerUser() {
    let regForm = $('#formRegister');
    let username = regForm.find('input[name=username]').val();
    let password = regForm.find('input[name=passwd]').val();
    let data = {username: username, password: password};
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/',
        data,
        headers: AUTH_HEADERS,
        success: function (res) {
            signInUser(res, 'Registration successful.');
        },
        error: handleAjaxError
    })
}

function listAds() {
    // TODO
    $.ajax({
        method: 'GET',
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads',
        headers: {'Authorization': 'Kinvey '+sessionStorage.getItem('authToken')},
        success:function (res) {
            displayAds(res.reverse())
        },
        error: handleAjaxError
    })
    // GET -> BASE_URL + 'appdata/' + APP_KEY + '/books'
    // displayPaginationAndBooks(res.reverse())
}

function displayAds(res) {
    showView('viewAds');
   $('#ads table tr').each((index,el)=>{
       if(index!==0){
           el.remove();
       }
   });
   console.log(res)
   res = res.sort((a,b)=>b.viewCount-a.viewCount);
    res.forEach(ad=>{
        let adBody =
            $(`<tr>
                    <td>${ad.title}</td>
                    <td>${ad.publisher}</td>
                    <td>${ad.description}</td>
                    <td>${ad.price}</td>
                    <td>${ad.dateofPublishing}</td>
            </tr>`);

        if(sessionStorage.getItem('userId') === ad._acl.creator){
            adBody
                .append($('<td>')
                    .append($(`<a href="#">[Read More]</a>`).click(()=>{makeReqForDetails(ad)}))
                    .append($(`<a href="#">[Delete]</a>`).click(()=>{deleteAd(ad)}))
                    .append($(`<a href="#">[Edit]</a>`).click(()=>{loadAdForEdit(ad)})))
        } else {
            adBody
                .append($('<td>')
                    .append($(`<a href="#">[Read More]</a>`).click(()=>{makeReqForDetails(ad)})))

        }
        adBody.appendTo($('#ads table'))
    })
}

async function makeReqForDetails (ad) {


    let id = ad._id;
    let req = {
        method: 'GET',
        headers: {'Authorization': 'Kinvey '+sessionStorage.getItem('authToken')},
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads'+'/'+id,
        success: function () {
            console.log('success')
        },
        error: handleAjaxError
    }
    showDetails(await $.ajax(req));


}
function showDetails(ad) {
    $('#viewDetails').empty();
    showView('viewDetails');
    let body = $(`<div><img src="${ad.imageURL}"></div>`)
    body
        .append($('<br>'))
        .append($('<label>Title:</label>'))
        .append($(`<h1>${ad.title}</h1>`))
        .append($('<label>Description:</label>'))
        .append($(`<p>${ad.description}</p>`))
        .append($('<label>Publisher:</label>'))
        .append($(`<div>${ad.publisher}</div>`))
        .append($('<label>Date:</label>'))
        .append($(`<div>${ad.dateofPublishing}</div>`))
        .append($(`<label>Views: ${ad.viewCount}</label>`))
        .append($('<button>Back To Ads</button>').click(function () {
            listAds()
        }))
    body.appendTo($('#viewDetails'))
}

function createAd() {
    let createForm = $('#formCreateAd');
    let data = {
        title: createForm.find('input[name=title]').val(),
        description: createForm.find('textarea[name=description]').val(),
        publisher: sessionStorage.getItem('username'),
        price: createForm.find('input[name=price]').val(),
        dateofPublishing: createForm.find('input[name=datePublished]').val(),
        imageURL: createForm.find('input[name=imageURL]').val(),
    };

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads',
        headers: {'Authorization': 'Kinvey '+sessionStorage.getItem('authToken')},
        data,
        success: function (res) {
            listAds();
            showInfo('Ad created.')
        },
        error: handleAjaxError
    })

}

function deleteAd(ad) {
    // TODO
    let id = ad._id;
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads'+'/'+id,
        headers: {'Authorization': 'Kinvey '+sessionStorage.getItem('authToken')},
        success:function () {
            listAds();
            showInfo('Ad deleted.')
        },
        error: handleAjaxError
    })
    // DELETE -> BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id
    // showInfo('Book deleted.')
}

function loadAdForEdit(ad) {
    showView('viewEditAd');
    let editForm = $('#formEditAd');
    editForm.find('input[name=id]').val(`${ad._id}`);
    editForm.find('input[name=publisher]').val(`${ad.publisher}`);
    editForm.find('input[name=title]').val(`${ad.title}`);
    editForm.find('textarea[name=description]').val(`${ad.description}`);
    editForm.find('input[name=datePublished]').val(`${ad.dateofPublishing}`);
    editForm.find('input[name=price]').val(`${ad.price}`);
    editForm.find('input[name=imageURL]').val(`${ad.imageURL}`);
}

function editAd() {
    let editForm = $('#formEditAd');
    let id = editForm.find('input[name=id]').val();
    let publisher = editForm.find('input[name=publisher]').val();
    let title = editForm.find('input[name=title]').val();
    let description = editForm.find('textarea[name=description]').val();
    let dateofPublishing = editForm.find('input[name=datePublished]').val();
    let price = editForm.find('input[name=price]').val();
    let imageURL = editForm.find('input[name=imageURL]').val();
    let data = {
        publisher,
        title,
        description,
        dateofPublishing,
        price,
        imageURL
    };
    $.ajax({
        method:'PUT',
        data,
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads'+'/'+id,
        headers: {'Authorization': 'Kinvey '+sessionStorage.getItem('authToken')},
        success: function (res) {
            listAds();
            showInfo('Ad Edited!')
        },
        error: handleAjaxError
    })
}

function logoutUser() {

    $.ajax({
        method: 'POST',
        url: BASE_URL + `user/${APP_KEY}/`+'_logout',
        headers: {'Authorization': 'Kinvey '+sessionStorage.getItem('authToken')},
        success: logoutSuccess,
        error: handleAjaxError
    })
}

function logoutSuccess() {
    sessionStorage.clear();
    showHomeView();
    showHideMenuLinks();
    showInfo('Logout successful.');
}

function signInUser(res, message) {
    sessionStorage.setItem('username', res.username);
    sessionStorage.setItem('authToken', res._kmd.authtoken);
    sessionStorage.setItem('userId', res._id);

    showHomeView();
    showHideMenuLinks();
    showInfo(message);
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error."
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description
    showError(errorMsg)
}