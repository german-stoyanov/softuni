function solution (input) {
    let string = input[0]

    let pattern1 = /((\.|\,|\:|\;|\?|\!)\s*)([^\.\,\:\;\?\!])/g;
    let pattern2 = /(.)\s+(\.|\,|\:|\;|\?|\!)/g;
    let pattern3 = /(\.)\s+(\d)/g
    let pattern4 = /"(.+?)"/g;
    string = string.replace(pattern1,function (match) {
        return match[0]+' '+match[match.length-1]
    });
    string = string.replace(pattern2,function (match) {
        return match[0]+match[match.length-1]
    })
    string = string.replace(pattern3,function (match) {
        return match[0]+match[match.length-1]
    })
    string = string.replace(pattern4,function (match) {
        let thingInside = match.substring(1,match.length-1)
        thingInside = thingInside.trim()

        return '"'+thingInside+'"'
    })


    console.log(string)
}

solution(['Now lets test           , absolutely everything!Aposiopesis is this: ...Have! you read the constraints?, you squidward? It would be pretty sad if this also fails "         !It would be bad if you dont put space after the explanation at start,aposiopesis all the way...". Now; 8   . 1 3. 0x041       .   I hope this will be trimmed too     !'])