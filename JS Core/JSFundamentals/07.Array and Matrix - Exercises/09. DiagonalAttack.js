function solution (input) {
    let matrix = [[]];
    for(let i = 0;i<input.length;i++){
        matrix[i] = input[i].split(' ');
    }
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0;i<input.length;i++){
        sum1+=Number(matrix[i][i])
    }
    for(let i = 0;i<input.length;i++) {
        sum2 += Number(matrix[i][input.length - 1 - i])
    }
    if(sum1===sum2){
        for(let i = 0;i<input.length;i++){
            for(let j = 0;j<input.length;j++){
                if(!(i===j||i+j===input.length-1)){
                    matrix[i][j] = sum1;
                }
            }
        }
        console.log(matrix.map(rows=>rows.join(' ')).join('\n'))
    }
    else{
        console.log(matrix)
    }
}
solution(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)