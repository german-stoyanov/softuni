function LetterOccurences (string, letter){
    let isOccured = 0;
    for(let i =0;i<string.length;i++){
        if(string[i]===letter){
            isOccured++;
        }
    }
    console.log(isOccured);
}