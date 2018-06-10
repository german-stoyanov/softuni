function solution(input = []) {
    input = input.map(x => Number(x));
    console.log(input[0]+input[input.length-1])


}
solution([10,20,30,40,50])