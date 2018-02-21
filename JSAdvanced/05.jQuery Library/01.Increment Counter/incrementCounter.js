function increment(selector) {

    let textArea = $('<textarea>');
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled',true)
    textArea.appendTo($(selector))
    $('<button class="btn" id="incrementBtn">Increment</button>').click(addOneToValue).appendTo($(selector));
    $('<button class="btn" id="addBtn">Add</button>').click(appendIt).appendTo($(selector));
    $('<ul class="results"></ul>').appendTo($(selector))
    function addOneToValue() {
       let oldValue =  $('textarea').val();
        $('textarea').val(+oldValue+1)
    }
    function appendIt() {
        $('.results').append(`<li>${$('textarea').val()}</li>`)
    }

}
