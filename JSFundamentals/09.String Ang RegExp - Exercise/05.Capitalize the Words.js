function solution (input) {
    let words = input.split(' ');
    let result = [];
    let changedWord = '';
    words.forEach(word=>{
        changedWord += word[0].toUpperCase();
        for(let i = 1;i<word.length;i++){
            changedWord += word[i].toLowerCase();
        }
        result.push(changedWord);
        changedWord = '';
    })
    console.log(result.join(' '))
}
solution('Was that Easy? tRY thIs onE for SiZe!')