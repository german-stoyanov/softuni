function solution (input=[]) {
    let numberOfTemplateMatrixRow = input[0];
    let templateMatrix=[];
    let matrix = [];
    let table = [' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    input.shift()
    for(let i = 0;i<numberOfTemplateMatrixRow;i++){
        templateMatrix[i] = [];
        templateMatrix[i] = input[i].split(' ').filter(x=>x!=='').map(x=>x=Number(x))
    }
    input.splice(0,numberOfTemplateMatrixRow)

    let numberOfTemplateMatrixColumn = templateMatrix[0].length;
    for(let i = 0;i<input.length;i++){
        matrix[i]=[];
        matrix[i] = input[i].split(' ').filter(x=>x!=='').map(x=>x=Number(x))
    }
    for(let i = 0;i<matrix.length;i++){
        let currentRow = templateMatrix[i%numberOfTemplateMatrixRow];
        for(let j = 0;j<matrix[0].length;j++){
            let currentNumber = currentRow[j%numberOfTemplateMatrixColumn];
            matrix[i][j] = table[(currentNumber+matrix[i][j])%27]
        }
    }
    console.log(matrix.map(row=>row.join('')).join(''))
}
solution([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]

)