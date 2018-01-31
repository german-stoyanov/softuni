function solution (string) {
    let regex = /\b_([a-zA-Z0-9]+)\b/g;
    let variables = []
    let match = regex.exec(string)
    while(match){
        variables.push(match[1])
        match = regex.exec(string)
    }
    console.log(variables.join(','))
}
solution('Calculate the _area of the _perfectRectangle object.')