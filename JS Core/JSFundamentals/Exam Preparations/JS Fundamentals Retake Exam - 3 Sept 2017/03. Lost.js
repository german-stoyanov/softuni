function solution (keyWord,string) {
    let pattern = /(east)(?:.|\n)*?(\d{2})[^,]*?,[^,]*?(\d{6})|(north)(?:.|\n)*?(\d{2})[^,]*?,[^,]*?(\d{6})/ig;
    let patternForMessage = new RegExp(keyWord+'((.|\\n)*)'+keyWord,'g')
    let coordinatesNorth = [];
    let coordinatesEast = [];
    let match = pattern.exec(string);
    while(match){
        if(match[4]){
            let coordinate = match[5]+'.'+match[6];
            coordinatesNorth.push(coordinate)
        }
        else{
            let coordinate = match[2]+'.'+match[3]
            coordinatesEast.push(coordinate)
        }
        match=pattern.exec(string)
    }
    let matchMessage = patternForMessage.exec(string);
    console.log(coordinatesNorth[coordinatesNorth.length-1]+' N')
    console.log(coordinatesEast[coordinatesEast.length-1]+' E')
    console.log('Message: '+matchMessage[1])
}
solution('<>',
'o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b'

)
