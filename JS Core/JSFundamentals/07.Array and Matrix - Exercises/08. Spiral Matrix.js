function solution (rows,columns) {

    let matrix = [[]];
    for(let i = 0;i<Number(rows);i++){
        matrix[i] = new Array(columns);
        for(let j = 0;j<Number(columns);j=j+1){

            matrix[i][j] = 1;
        }
    }
    let startRow = 0;
    let endRow = rows-1;
    let startCol = 0;
    let endCol = columns-1;
    let number = 1;
    while(number!=rows*columns+1){


        for(let i = startCol;i<=endCol;i++){
            matrix[startRow][i]=number;

            number++;

        }
        for(let i = startRow+1;i<=endRow;i++){
            matrix[i][endCol]=number;
            number++
        }

        for(let i = endCol-1;i>=startRow;i--){
            matrix[endRow][i]=number;
            number++;
        }

        for(let i = endRow-1;i>=startRow+1;i--){
            matrix[i][startCol]=number;
            number++;
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;


    }
    console.log(matrix.map(row=>row.join(' ')).join('\n'))
}
solution(5,5)
