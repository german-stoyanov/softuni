function solution (input=[]) {
    console.log(input.filter((e,i)=>i%2===1).map(x => x*2).reverse().join(' '))
}
solution([10, 15, 20, 25])