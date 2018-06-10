function solution(input) {
    let V1 = input[0];
    let V2 = input[1];
    let T = input[2]/3600;
    console.log(Math.abs((V1-V2)*T*1000));
}