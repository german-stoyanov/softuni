function solution(input) {
    let p = input[0];
    let i = input[1]/100;
    let n  = 12/input[2];
    let t = input[3];
    console.log(p*((1+i/n)**(t*n)))
}
solution(['1500','4.3','3','6']);