function solution (input) {
    let n = input[input.length-1];
    input.pop();
    for(let i = 0;i<input.length;i+=Number(n)){
        console.log(input[i]);
    }
}
solution(['5',
'20',
'31',
'4',
'20',
'2'
])