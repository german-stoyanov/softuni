function solution(sentence,wordToSearch) {
    let regex = new RegExp("\\b"+wordToSearch+"\\b","ig")
    let match = sentence.match(regex);
    if(match) {
        console.log(match.length)
    }
    else{
        console.log('0')
    }
}
solution('How do you plan on achieving that? how ? How can you even think of that?',
    'how')