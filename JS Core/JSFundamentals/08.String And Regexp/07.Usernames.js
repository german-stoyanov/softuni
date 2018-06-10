function solution (input = []) {
    let result = [];
    for(let i = 0;i<input.length;i++){
        let arr = input[i].split('@');
        let user = arr[0];
        let addition = '.';
        let first = arr[1].split('.');
        for(let j = 0;j<first.length;j++){
            let thing = first[j];
            addition+=thing[0];
        }
        user += addition;
        result.push(user)

    }
    console.log(result.join(', '))
}
solution(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])