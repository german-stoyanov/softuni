$('#btnLoad').on('click',loadData);
$('#btnCreate').on('click',createElement);

function createElement() {
    let name = $('#person').val();
    let phone = $('#phone').val();
    let data = JSON.stringify({name,phone});
    let req = {
        method:'POST',
        url: 'https://phonebook-7714c.firebaseio.com/phonebook.json',
        data
    }
    $.ajax(req).then((res)=>createLi(name,phone,res.name))
        .catch(throwError);
    $('#person').val('');
    $('#phone').val('');
}

function loadData() {
    $('#phonebook').empty();
    let req = {
        method:'GET',
        url: 'https://phonebook-7714c.firebaseio.com/phonebook.json'
    }
    $.ajax(req).then(appendContacts)
        .catch(throwError);

}

function appendContacts(reponse) {
    let contacts = reponse;
    for(let key in contacts){
        createLi(contacts[key].name,contacts[key].phone,key)
    }
}

function createLi(name,phone,key) {
    let element =($(`<li>${name}: ${phone}</li> `)
        .append($('<a href="#">[Delete]</a>').on('click',()=>deleteData(key,element))));
    $('#phonebook').append(element)
}

function throwError(err) {
    console.log(err);
}

function deleteData(key,element) {
    let req = {
        method:'Delete',
        url: 'https://phonebook-7714c.firebaseio.com/phonebook/'+key+'.json'
    }
    $.ajax(req).then(()=>element.remove())
        .catch(throwError);
}

