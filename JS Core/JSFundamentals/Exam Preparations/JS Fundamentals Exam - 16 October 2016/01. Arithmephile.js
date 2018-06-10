function solution (input=[]) {
    let multiplication = [];
    let numbers = input.map(x=>x=Number(x));
    let product = 1;
    for(let i = 0;i<numbers.length;i++) {
        if (numbers[i] >= 0 && numbers[i] < 10) {
            for (let j = i+1;j<i+numbers[i]+1;j++) {
                product*=numbers[j]
            }
            multiplication.push(product)
        }
        product=1;
    }
    console.log(multiplication.sort((a,b)=>b-a)[0])
}
solution()