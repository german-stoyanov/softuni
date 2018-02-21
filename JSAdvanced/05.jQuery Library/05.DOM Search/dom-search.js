function domSearch(selector,bool) {

    $('<div class="add-controls"></div>')
        .append($('<label>Enter text: </label>')
            .append($('<input>')))
        .append($('<a class="button" style="display: inline-block">Add</a>').click(addTheListItem))
        .appendTo($(selector))
    $('<div class="search-controls"></div>')
        .append($('<label>Search: </label>')
            .append($('<input>').on('input',findTheLists)))
        .appendTo($(selector));
    let results = $('<div class="result-controls"></div>')
        .append($('<ul class="items-list"></ul>'))
        .appendTo($(selector));
    function addTheListItem() {
        $('ul')
            .append($('<li class="list-item"></li>')
                .append($('<a class="button">X</a>').click(deleteElement))
                .append($(`<strong>${$('.add-controls input').val()}</strong>`)))
        results.appendTo($(selector))
        $('.add-controls input').val("")
    }
    function findTheLists() {
        $('li').css('display','block')
        $('li strong').toArray().forEach(element=>{
            let regex;
            if(bool===true){
               regex = new RegExp(''+$('.search-controls input').val()+'', '');
            }
            else{
                regex = new RegExp(''+$('.search-controls input').val()+'', 'i');
            }

            if(!regex.test(element.textContent)){

                $(element.parentNode).css('display','none')
            }

        })

    }
    function deleteElement() {
        this.parentNode.remove()
    }
}
