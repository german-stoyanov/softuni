function solution (input) {
    let regex = /(-?[0.0-9.9]+)(\s+)?\*(\s+)?(-?[0.0-9.9]+)/;
    let match = regex.exec(input)
    while(match){
        let firstNum = match[1];
        let secondNum = match[4];
        input = input.replace(regex,firstNum*secondNum)
        match = regex.exec(input)
    }
    console.log(input)
}
solution('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).')