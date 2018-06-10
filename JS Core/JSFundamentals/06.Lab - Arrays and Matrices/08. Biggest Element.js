function solution (input = [[]]) {
    let biggestNum = [];
    input.forEach(row=>{
        row.forEach(col=>{
            biggestNum.push(Math.max.apply(Math,row));

        })

    })
    console.log(Math.max.apply(Math,biggestNum))
}