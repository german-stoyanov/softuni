function solution (input = []) {
    input = input.split(/\W+/);
    console.log(input.filter(s=>s!=='').join('|'))
}
solution('Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !')