$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let data = {
            cats:cats
        }
        console.log(data)

        let source = $('#cats-template').html();

        let template = Handlebars.compile(source);

        let html = template(data);

        $(html).appendTo($('#allCats'));

        $('button').on('click',loadInfo)
    }

    function loadInfo() {

        if($(this).text()==='Show status code'){
            $(this.parentNode).find('div').css('display','block')
            $(this).text('Hide status code')
        }
        else{
            $(this.parentNode).find('div').css('display','none')
            $(this).text('Show status code')
        }
    }

})
