function createBook(selector,title,author,ISBN) {
    let numberOfBook = $(`${selector} div`).length+1;
    let ids = 'book'+numberOfBook;
    let mainDiv = $('<div style="border: medium none;"></div>')
    mainDiv.attr('id',ids)
    mainDiv
        .append($(`<p class="title">${title}</p>`))
        .append($(`<p class="author">${author}</p>`))
        .append($(`<p class="isbn">${ISBN}</p>`))
        .append($('<button>Select</button>').click(SelectTheBook))
        .append($('<button>Deselect</button>').click(DeselectTheBook));
    
    mainDiv.appendTo($(selector))
    function SelectTheBook() {
        $(mainDiv).css('border','2px solid blue')
    }
    function DeselectTheBook() {
        $(mainDiv).css('border','none')
    }
}
