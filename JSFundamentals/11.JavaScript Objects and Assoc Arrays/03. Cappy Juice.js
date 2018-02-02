function solution (input = []) {
    let sortedItems = [];
    let juiceData = new Map();
    input.forEach(line=>{
        let tokens = line.split(' => ');
        let fruit = tokens[0];
        let quantity = Number(tokens[1]);
        if(!juiceData.has(fruit)){
            juiceData.set(fruit,0)
        }
        juiceData.set(fruit,juiceData.get(fruit)+quantity)
        if(juiceData.get(fruit)>=1000&&!sortedItems.includes(fruit)){
            sortedItems.push(fruit)
        }
    })
    sortedItems.forEach(key=>{
            console.log(key + ' => '+Math.floor(juiceData.get(key)/1000))

    })
}