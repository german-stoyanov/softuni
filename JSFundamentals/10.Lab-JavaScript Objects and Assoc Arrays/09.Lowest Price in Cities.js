function solution (input = []) {

    let productData = new Map();
    input.forEach(line=>{
        let tokens = line.split(' | ').filter(x=>x!=='');
        let town = tokens[0];
        let product = tokens[1];
        let price = Number(tokens[2]);
        if(!productData.has(product)){

            productData.set(product,new Map())
        }
        productData.get(product).set(town,price)

    })

    for (let [product,map] of productData) {
        let minPrice = Number.POSITIVE_INFINITY;
        let townResult = '';
        for (let [town,price] of map) {
            if(price<minPrice){
                minPrice=price;
                townResult = town;
            }

        }
        console.log(product+' -> '+minPrice+' ('+townResult+")")
    }
}
solution(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'
])
