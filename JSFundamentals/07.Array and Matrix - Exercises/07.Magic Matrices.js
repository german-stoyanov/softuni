function solution (matrix = [[]]) {
    let sums = [];
    let sum = 0;
    for(let i = 0;i<matrix.length;i++){
        sum = 0;
        for(let j = 0;j<matrix[i].length;j++){
            sum+=matrix[i][j];
        }

        if(!sums.includes(sum)){
            sums.push(sum)
        }
    }
    for(let i = 0;i<matrix[0].length;i++){
        sum = 0;
        for(let j = 0;j<matrix.length;j++){
            sum+=matrix[j][i];
        }
        if(!sums.includes(sum)){
            sums.push(sum)
        }
    }
    if(sums.length === 1){
        console.log('true')
    }
    else{
        console.log('false')
    }
}
solution([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]

)