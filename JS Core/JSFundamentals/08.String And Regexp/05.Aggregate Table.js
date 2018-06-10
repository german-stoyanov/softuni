function solution (input) {
    let towns = [];
    let sum = 0;
    for(let i = 0;i<input.length;i++){
        let arr = input[i].split('|');
        let town = arr[1].split(' ').filter(s => s!=='').join(' ');
        towns.push(town)
        let sum1 = arr[2].split(' ').filter(s => s!=='').join('');
        sum += Number(sum1);
    }
    console.log(towns.join(', ')+'\n'+sum)
}
solution(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)