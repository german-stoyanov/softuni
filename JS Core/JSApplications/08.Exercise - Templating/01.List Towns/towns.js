function attachEvents() {
    $('#btnLoadTowns').click(loadTowns);


    function loadTowns() {
        let source = $('#towns-template').html();
        let template = Handlebars.compile(source);

        let towns = $('#towns').val().split(', ');

        $('#towns').val('');

        towns =  towns.map((a)=>a={townName: a});

        console.log(towns);

        let data = {
            towns: towns
        }

        let html = template(data);

        $('#root').empty()

        $(html).appendTo($('#root'))
    }


}