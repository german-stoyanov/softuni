function solution (input=[]) {
    let sequence = Number(input.pop().trim());
    let lengthOfEachRow = [];
    let matrix = [];

    let finalMatrix = [];
    input.forEach(line=>{
        let elements = line.split(' ').filter(z=>z!=='');
        elements.forEach(element=>{
            matrix.push(element)
        })
        lengthOfEachRow.push(elements.length)
    })
    let currentLength = 0;
    let currentElement = matrix[0]
    for(let i = 0;i<matrix.length;i++){
        if(matrix[i]===currentElement){
            currentLength++;
            if(currentLength===sequence){
                for(let j = i;j>i-sequence;j--){
                    matrix[j] = undefined;
                }
                currentLength=0;
            }
        }
        else{
            currentElement=matrix[i]
            currentLength=1;
            if(currentLength===sequence){
                for(let j = i;j>i-sequence;j--){
                    matrix[j] = undefined;
                }
                currentLength=0;
            }
        }
    }
    let currentIndex=0;
    for(let i = 0;i<lengthOfEachRow.length;i++){
        finalMatrix[i] = [];
        for(let j = 0;j<lengthOfEachRow[i];j++){
            if(matrix[currentIndex]!==undefined){
                finalMatrix[i].push(matrix[currentIndex])
            }
            currentIndex++
        }
        if(finalMatrix[i].length<1){
            console.log("(empty)")
        }
        else{
            console.log(finalMatrix[i].join(' '))
        }
    }

}
solution([
    'a a a',
    '1 1 1',
    '3 7 3 3 1',
    '2'
])