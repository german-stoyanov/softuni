function solution (input = []) {
    let numbers = input.map(x=>x=Number(x));
    let goldPrice = 67.51;
    let bitPrice = 11949.16;
    let firstDay = []
    let totalBit = 0;
    let totalAmount = 0;
    for(let i = 1;i<=numbers.length;i++){
        let minedGold = numbers[i-1]*goldPrice;
        if(i%3===0){
            minedGold = minedGold*0.7;
        }
        totalAmount+=minedGold;
        while(totalAmount-bitPrice>=0){
            firstDay.push(i);
            totalAmount = totalAmount-bitPrice
            totalBit++;
        }

    }
    console.log(`Bought bitcoins: ${totalBit}`)
    if(firstDay[0]!==undefined){
        console.log(`Day of the first purchased bitcoin: ${firstDay[0]}`)
    }
    console.log('Left money: '+totalAmount.toFixed(2)+' lv.')
}
solution([
    '3124.15', '504.212', '2511.124'
])