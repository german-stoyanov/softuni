let f = (function solution() {
    let firstNum = 0;
    let secondNum = 1;
    return function calcTheFibonacciNum() {
        let sum = firstNum+secondNum;
        firstNum = secondNum;
        secondNum = sum;

        return firstNum;
    }
})()
console.log(f());
console.log(f());
console.log(f());


