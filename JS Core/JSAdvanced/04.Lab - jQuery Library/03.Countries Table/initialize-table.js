function initializeTable() {
    $('#createLink').click(addRow);
    function addRow() {
        createRow($('#newCountryText').val(),$('#newCapitalText').val())
    }
    createRow('Bulgaria','Sofia');
    createRow('Germany','Berlin');
    createRow('Russia','Moscow');
    fixLinks()
    function createRow(country,capital) {
        $('<tr>')
            .append($(`<td>${country}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($(`<td>`)
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(deleteRow)))
            .appendTo($('#countriesTable'))
        fixLinks()

    }
    function moveUp () {
        let row = this.parentNode.parentNode;
        $(row).insertBefore($(row).prev())
        fixLinks()
    }
    function moveDown() {
        let row = this.parentNode.parentNode;
        $(row).insertAfter($(row).next())
        fixLinks()
    }
    function deleteRow() {
        let row = this.parentNode.parentNode;
        $(row).remove()
        fixLinks()
    }
    function fixLinks() {
        $('tr a').css('display','inline')
        $('tr:last-child a:contains(Down)').css('display','none')
        $('tr:eq(2) a:contains(Up)').css('display','none')
    }

}