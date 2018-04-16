$(() => {
    async function loadContacts() {
        let contactSource = await $.get('contactsTemplate.html');
        let contactTemplate = Handlebars.compile(contactSource);
        let obj = {
            data: await $.get('data.json')
        };

        let html = contactTemplate(obj);
        $(html).appendTo($('.content'))

        $('.contact').on('click',loadDetails)
    }

    async function loadDetails() {
        $('#details').empty();

        let detailsSource = await $.get('detailsTemplate.html');
        let detailsTemplate = Handlebars.compile(detailsSource);
        let data = await $.get('data.json')


        let index = $(this).attr('data-id');

        $('.active').removeClass('active')

        $(this).addClass('active');

        console.log(this)

        let html = detailsTemplate(data[index]);
        $(html).appendTo($('#details'))
    }


    loadContacts();
});