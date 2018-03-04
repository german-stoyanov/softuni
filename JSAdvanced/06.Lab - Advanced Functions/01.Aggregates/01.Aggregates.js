function solution(arr) {
    let sum = arr.reduce((a,b)=>Number(a)+Number(b));
    let join = arr.reduce((a,b)=>a+b);
    let product = arr.reduce((a,b)=>Number(a)*Number(b));
    let min = arr.reduce(function (a,b) {
        if(Number(a)<Number(b)){
            return a
        }
        else{
            return b
        }
    });
    let max = arr.reduce(function (a,b) {
        if(Number(a)>Number(b)){
            return a
        }
        else{
            return b
        }
    })
    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);



}
solution([12,2])