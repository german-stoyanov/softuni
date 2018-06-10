function solution (input=[]) {
    let count = input[0];
    input.shift();
    let newArr = input.filter((e,i)=>i<count).join(' ');
    console.log(newArr)
    newArr = input.filter((e,i)=>i>input.length-1-count).join(' ')
    console.log(newArr)
}
solution([2, 7, 8, 9]);