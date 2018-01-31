function solution (input = []) {
    let townData = new Map();
    input.forEach(element=>{
        let tokens = element.split(' -> ')
        let town = tokens[0];
        let product = tokens[1];
        let value = tokens[2].split(' : ').reduce((a,b)=>a*b);
        let productMap = new Map();
        productMap.set(product,value);
        if(!townData.has(town)){
            townData.set(town,new Map())
        }
        if(townData.get(town).get(product)){
            townData.get(town).set(product,townData.get(town).get(product)+value)
        }
        else {
            townData.get(town).set(product, value)
        }
    })
    console.log(townData.Sofia)
    for (let [key,value] of townData) {
        console.log('Town - '+key)
        for (let [product,sum] of value) {
            console.log('$$$'+product+" : "+sum)
        }
    }
}
solution(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Raspberry -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'
])