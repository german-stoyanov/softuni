function solution (input=[]) {
    let result={};
    input.forEach(line=>{
        let tokens = line.split(' : ');
        let product = tokens[0];
        let price = Number(tokens[1]);
        result[product] = price;
    })
    let array = Array.from(Object.keys(result));
    array = array.sort()
    let first = '';
    array.forEach(key=>{
        if(key[0]!==first){
            console.log(key[0])
            first = key[0]
        }
        console.log(` ${key}: ${result[key]}`)
    })
}
solution([
    'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
])