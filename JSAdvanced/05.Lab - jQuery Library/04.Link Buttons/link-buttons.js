function attachEvents() {
    $('a').click(makeItSelected);
    function makeItSelected() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected')
    }
}