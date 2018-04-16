function attachEvents() {
    $('#btnLoad').on('click',loadData);
    $('#btnCreate').on('click',createElement);

    function createElement() {
        let person = $('#person').val();
        let phone = $('#phone').val();
        let data = JSON.stringify({person,phone});
        let req = {
            method:'POST',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            data
        };
        $.ajax(req).then((res)=>createLi(person,phone,res.person))
            .catch(throwError);
        $('#person').val('');
        $('#phone').val('');
    }

    function loadData() {

        let req = {
            method:'GET',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json'
        }
        $.ajax(req).then(appendContacts)
            .catch(throwError);

    }

    function appendContacts(reponse) {
        let contacts = reponse;
        $('#phonebook').empty();
        for(let key in contacts){
            createLi(contacts[key].person,contacts[key].phone,key)
        }
    }

    function createLi(person,phone,key) {
        let element =($(`<li>${person}: ${phone}</li> `)
            .append($('<button>[Delete]</button>').on('click',()=>deleteData(key,element))));
        $('#phonebook').append(element)
    }

    function throwError(err) {
        console.log(err);
    }

    function deleteData(key,element) {
        let req = {
            method:'Delete',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook/'+key+'.json'
        }
        $.ajax(req).then(()=>element.remove())
            .catch(throwError);
    }
}


