function solution (input=[]) {
    let newArr = [];
    let biggestNum = input[0];
    newArr.push(biggestNum)
    for(let i = 1;i<input.length;i++){
        if(input[i]>=biggestNum){
            biggestNum = input[i];
            newArr.push(biggestNum);
        }
    }
    console.log(newArr.join('\n'))
}
solution([1,
3,
8,
4,
10,
12,
3,
2,
24,
]);