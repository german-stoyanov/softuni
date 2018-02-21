function attachEvents() {
    $('li').click(makeItDarker)
    function makeItDarker() {
        if(this.style.backgroundColor){
            this.style.backgroundColor = null
            $(this).removeAttr('data-selected')
        }
        else{
            this.style.backgroundColor ='#DDD'
            $(this).attr('data-selected','true')

        }

    }
    $('#showTownsButton').click(findingTowns)
    function findingTowns() {
        let result = []
        $('li').toArray().forEach(town=>{
            if(town.style.backgroundColor){
                result.push(town.textContent)
            }
        })
        $('#selectedTowns').text('Selected towns: '+result.join(', '))
    }
}
