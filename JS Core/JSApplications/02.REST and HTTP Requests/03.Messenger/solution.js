function attachEvents() {
    $('#submit').on('click',createData);
    $('#refresh').on('click',displayAndSortData);

    function createData() {
        let author = $('#author').val();
        let content = $('#content').val();
        let data = JSON.stringify({author,content,timestamp: Date.now()});
        $.ajax({
            method:'POST',
            url:'https://messeger-b12c4.firebaseio.com/messenger.json',
            data,
            success: displayAndSortData,
            error: throwError
        })
    }

    function displayAndSortData() {
        $.ajax({
            method:'GET',
            url:'https://messeger-b12c4.firebaseio.com/messenger.json',
            success: appendToTextBox,
            error: throwError
        })
    }

    function appendToTextBox(res) {
        $('#messages').empty();
        let box = $('#messages');
        let sortedKeys = Object.keys(res).sort((a,b)=>res[b].timestamp<res[a].timestamp);
        sortedKeys.forEach(key=>{
            let oldText = box.text();
            box.text(oldText+res[key].author+': '+res[key].content+'\n')
        })
    }

    function throwError(err) {
       // console.log(err);
    }
}