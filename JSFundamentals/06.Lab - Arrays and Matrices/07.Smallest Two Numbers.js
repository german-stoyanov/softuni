function solution (input=[]) {
    input = input.map(a=>Number(a));
    let min1 = Math.min.apply(Math,input);
    let min1Index = input.indexOf(min1);
    input.splice(min1Index,1);
    let min2 = Math.min.apply(Math,input);
    console.log(min1+' '+min2)
}
solution([30, 15, 50, 5])