function solution (input = []) {
    let specialKey = input[0];
    let pattern = new RegExp('(^|\\s)'+'('+specialKey+')'+'(\\s+)([A-Z!%$#]{8,})(\\s|\\.|$|,)','ig');
    let pattern1 = /[A-Z!%$#]+/;
    input.shift();
    input.forEach(line=>{
        let match = pattern.exec(line)
        while (match){
            if(match[4]===match[4].toUpperCase()){
               let replacedMatch = match[1]+match[2]+match[3]+match[4].toLowerCase().replace(/\#/g,3).replace(/\$/g,4).replace(/\!/g,1).replace(/\%/g,2)+match[5]
                line = line.replace(match[0],replacedMatch)
            }
            match = pattern.exec(line)
        }
        console.log(line)
    })
}
solution([
    'hiddenTrap',
    'Now the ultimate hiddenTrap HIDDENTR just some text',
    'who said the message couldnt be contained in the key',
    'or it could be this HIDDENTRAP, HIDDENTRAP HIDDENTRA',
    'some more tests this one is wrong (HIDDENTRAP HIDDENTRA)',
'now with some spaces HIDDENTRAP         HIDDENTRA  HIDDENTRAP  HIDDENTR',
'hiddenTrap HiddenTRA, hiddenTrap HIDDENTRA'

])