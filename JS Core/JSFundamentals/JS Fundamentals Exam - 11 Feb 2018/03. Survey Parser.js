function solution (string) {
    let patternForNoSurvey = /<svg>(.|\n)+<\/svg>/g;
    let truePattern = /<svg>\s*<cat>\s*<text>(?:.)*\[((?:.|\n)+)](?:.)*<\/text>\s*<\/cat>\s*<cat>(.*)\s*<\/cat><\/svg>/;
    let otherPattern = /<g><val>(.+?)<\/val>(.+?)<\/g>/g;

    if(!string.match(patternForNoSurvey)){
        console.log('No survey found')
        return
    }
    if(!string.match(truePattern)){
        console.log('Invalid format')
        return
    }
    let match = truePattern.exec(string)
    let votes = match[2];
    let matches = otherPattern.exec(votes);
    let totalVotes = 0;
    let allCounts = 0;
    while(matches){
        let value = Number(matches[1]);
        let count = Number(matches[2]);

        if(!(isNaN(value)||isNaN(count))) {
            allCounts += count;

            totalVotes += count * value;
        }

        matches = otherPattern.exec(votes)
    }


    console.log(match[1] + ': ' + Math.round((totalVotes / allCounts) * 100) / 100);




}
solution('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>Ivan</val>Seafood</g><g><val>0</val>0</g><g><val>0</val>0</g><g><val>0</val>0</g><g><val>0</val>0</g></cat></svg><p>Some more random text</p>')