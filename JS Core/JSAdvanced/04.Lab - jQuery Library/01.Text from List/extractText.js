function extractText() {
    let result = []
    $('li').each((index,element)=>result.push(element.textContent));
    $('#result').text(result.join(', '))
}
