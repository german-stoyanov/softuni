function solution (input=[]) {
    let regex = /\*[A-Z][a-zA-Z]*(\s+)|\*[A-Z][a-zA-Z]*$|\+[0-9-]{10}(\s+)|\+[0-9-]{10}$|\![a-zA-Z0-9]+(\s+)|\![a-zA-Z0-9]+$|\_[a-zA-Z0-9]+(\s+)|\_[a-zA-Z0-9]+$/g;
    input.forEach(line=>{
        let match = regex.exec(line);
        while(match){
            let match1 = match[0].trim();
            let replacer = '|'.repeat(match1.length);
            let inserting = match[0].replace(match1,replacer)

            line = line.replace(match[0],inserting)
            match = regex.exec(line)
        }
        console.log(line)
    })




}
solution([
    'Agent *Ivankov- was in the room when *Ivankov   it all happened +555-49-796.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.'
])
