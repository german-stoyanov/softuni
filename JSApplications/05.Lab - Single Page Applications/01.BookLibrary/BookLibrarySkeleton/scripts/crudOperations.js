const BASE_URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_Sk3myrR5f';
const APP_SECRET = '2157cd00ccae45728f1f25f9cf40a250';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)}
const BOOKS_PER_PAGE = 5;

function loginUser() {
    let username = $('#formLogin').find('input[name=username]').val();
    let password = $('#formLogin').find('input[name=passwd]').val();
    let data = {username,password};
    $.ajax({
        method:'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        headers: AUTH_HEADERS,
        data,
        success: (res)=>{
            signInUser(res, 'Login successful.')
        },
        error: handleAjaxError
    })
    // POST -> BASE_URL + 'user/' + APP_KEY + '/login'
    // signInUser(res, 'Login successful.')
}

function registerUser() {
    let username = $('#formRegister').find('input[name=username]').val();
    let password = $('#formRegister').find('input[name=passwd]').val();
    let data = {username,password}
    $.ajax({
        method:'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/',
        headers: AUTH_HEADERS,
        data,
        success: (res)=>{
            signInUser(res, 'Registration successful.')
        },
        error: handleAjaxError
    })
    // POST -> BASE_URL + 'user/' + APP_KEY + '/'
    // signInUser(res, 'Registration successful.')
}

function listBooks() {
    // TODO
    $.ajax({
        url:  BASE_URL + 'appdata/' + APP_KEY + '/books',
        headers: {'Authorization': 'Kinvey '+sessionStorage.getItem('authToken')},
        success: function (res) {
            showView('viewBooks');
            displayPaginationAndBooks(res.reverse());
        },
        error: handleAjaxError
    })
    // GET -> BASE_URL + 'appdata/' + APP_KEY + '/books'
    // displayPaginationAndBooks(res.reverse())
}


function createBook() {
    let author = $('#formCreateBook [name=author]').val();
    let title = $('#formCreateBook [name=title]').val();
    let description = $('#formCreateBook [name=description]').val();
    let data = {author,title,description};

   $.ajax({
        method: 'POST',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        headers:  {'Authorization': 'Kinvey '+sessionStorage.getItem('authToken')},
        data,
        success: function () {
            listBooks();
            showInfo('Book created.')
        },
        error: handleAjaxError
    })

}

function deleteBook(book) {
    // TODO
    $.ajax({
        method:"DELETE",
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id,
        headers: {'Authorization': 'Kinvey '+sessionStorage.getItem('authToken')},
        success: function (res) {
            listBooks();
          showInfo('Book Deleted.')
        },
        error: handleAjaxError
    })
    // DELETE -> BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id
    // showInfo('Book deleted.')
}

function loadBookForEdit(book) {
    showView('viewEditBook');
    let id = book._id;
    let title = book.title;
    let author = book.author;
    let description = book.description;
    let editForm = $('#formEditBook');
    editForm.find('input[name=id]').val(`${id}`);
    editForm.find('input[name=title]').val(`${title}`);
    editForm.find('input[name=author]').val(`${author}`);
    editForm.find('textarea[name=description]').val(`${description}`);
}

function editBook() {
    let editForm = $('#formEditBook');
    let id = editForm.find('input[name=id]').val();
    let title = editForm.find('input[name=title]').val();
    let author = editForm.find('input[name=author]').val();
    let description = editForm.find('textarea[name=description]').val();
    let data = {title,author,description};
    console.log(data);
    console.log(id)
    $.ajax({
        method:"PUT",
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + id,
        headers: {'Authorization': 'Kinvey '+sessionStorage.getItem('authToken')},
        data,
        success: function () {
            showInfo('Book edited.');
            listBooks();
        },
        error: handleAjaxError
    })
    // PUT -> BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id
    // showInfo('Book edited.')
}

function logoutUser() {
    sessionStorage.clear();
    showHomeView();
    showHideMenuLinks();
    showInfo('Logout successful.')
}

function signInUser(res, message) {
    showInfo(message)
    console.log(res)
    sessionStorage.setItem('username',res.username);
    sessionStorage.setItem('authToken',res._kmd.authtoken);
    sessionStorage.setItem('userId',res._id);
    showHomeView();
    showHideMenuLinks();
}

function displayPaginationAndBooks(books) {
    let pagination = $('#pagination-demo');
    if(pagination.data("twbs-pagination")){
        pagination.twbsPagination('destroy')
    }
    pagination.twbsPagination({
        totalPages: Math.ceil(books.length / BOOKS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            $('#books table tr').each((index,el)=>{
                if(index!==0){
                    el.remove();
                }
            })
            let startBook = (page - 1) * BOOKS_PER_PAGE;
            let endBook = Math.min(startBook + BOOKS_PER_PAGE, books.length);
            $(`a:contains(${page})`).addClass('active');
            for (let i = startBook; i < endBook; i++) {
                let bookBody = $(`<tr>
                <td>${books[i].title}</td>
                <td>${books[i].author}</td>
                <td>${books[i].description}</td>
                </tr>`);
                if(books[i]._acl.creator===sessionStorage.getItem('userId')){
                    bookBody.append($('<td>')
                        .append($('<a href="#">[Delete]</a>').click(()=>{deleteBook(books[i])}))
                        .append($('<a href="#">[Edit]</a>').click(()=>loadBookForEdit(books[i]))));
                }

                bookBody.appendTo($('#books table'))
            }
        }
    })
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error."
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description
    showError(errorMsg)
}