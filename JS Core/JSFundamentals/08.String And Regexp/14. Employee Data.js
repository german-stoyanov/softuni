function solution (input=[]) {
    let regex = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([\w- ]+)$/;
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if(input[i].match(regex)){
            let arr = regex.exec(input[i]);
            let obj = {Name:arr[1],
                Position:arr[3].trim(),
                Salary:arr[2]

                            };
            result.push(obj)

        }

    }
    result.forEach(x => {
        for (let property in x) {
            console.log(property + ': ' + x[property])
        }

    })
}
solution(['Isacc - 1000 - CEO',
    'Ivan- 500 - Employee',
    'Peter - 500 - Employee'
])