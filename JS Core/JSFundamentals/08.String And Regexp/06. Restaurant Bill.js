function solution (input = []) {
    let result = [];
    let sum = 0;
    for(let i = 0;i<input.length;i+=2){
        sum+= Number(input[i+1]);
        result.push(input[i]);
    }
    console.log(`You purchased ${result.join(', ')} for a total sum of ${sum}`)
}
solution(['Cola', '1.35', 'Pancakes', '2.88'])