function solution (matrix=[[]]) {
    let sum1=0;
    for(let i=0;i<matrix[0].length;i++){
        sum1+=matrix[i][i];
    }
    let sum2 = 0;
    let j = 0;
    for(let i=matrix[0].length-1;i>=0;i--){
        j = matrix[0].length-1-i;
        sum2+=matrix[i][j];
    }
    console.log(sum1+' '+sum2)
}