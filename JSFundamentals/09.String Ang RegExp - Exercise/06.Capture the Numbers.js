function solution (strings = []) {
    let regex = /[0-9]+/g;
    let numbers = [];
    strings.forEach(string=>{
        let match = regex.exec(string);
        while(match){
            numbers.push(match[0])
            match = regex.exec(string)
        }

    })
    console.log(numbers.join(' '))
}
solution(['123a456',
    '789b987',
    '654c321',
    '0'
])