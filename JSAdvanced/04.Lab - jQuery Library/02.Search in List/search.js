function search () {
    let substring = $('#searchText')[0];

    let counter = 0;
    $('#towns li').toArray().forEach(element=>{
        let text  = element.textContent
        if(text.indexOf(substring.value)!== -1){
            counter++;
            $(element).css('font-weight','bold');
        }
        else{
            $(element).css('font-weight','');
        }
    })
    $('#result').text(`${counter} matches found.`)
}
