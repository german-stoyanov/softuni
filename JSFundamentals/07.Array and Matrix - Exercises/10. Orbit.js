function solution (input = []) {
    let matrix = [[]];
    let firstI = input[2];
    let firstJ = input[3];
    let rows = input[1];
    let columns = input[0];
    let numToAdd = 0;
    for(let i = 0;i<rows;i++){
        matrix[i]= new Array(columns);
        for(let j = 0;j<columns;j++){
            if(Math.abs(firstI-i)<=Math.abs(firstJ-j)) {
                numToAdd = Math.abs(firstJ-j)
            }
            else{
                numToAdd= Math.abs(firstI-i)
            }
            matrix[i][j] = 1+numToAdd;
        }
    }
    console.log(matrix.map(rows=>rows.join(' ')).join('\n'))
}
solution([4, 4, 0, 0])