let f = (function () {
    let recipies = {
        coke:{carbohydrate:10,flavour:20},
        apple:{carbohydrate:1,flavour:2},
        burger:{carbohydrate:5,fat:7,flavour:3},
        omelet:{protein:5,fat:1,flavour:1},
        cheverme:{protein:10,carbohydrate:10,fat:10,flavour:10}
    }

    let availableIngredients = {protein:0,carbohydrate:0,fat:0,flavour:0};
    return function cookOrStore(commandInput) {
        let tokens = commandInput.split(' ');

        let command = tokens[0]
        if(command==='restock'){
            let ingredient = tokens[1];
            let quantity = Number(tokens[2])
            availableIngredients[ingredient]+=quantity;
            return 'Success'
        }
        else if(command==='prepare'){
            let meal = tokens[1];
            let quantity = tokens[2];
            let ingredients = Array.from(Object.keys(recipies[meal]))
            let isSuccessful = true;
            for(let i = 0;i<ingredients.length;i++) {
                let neededQuantity = recipies[meal][ingredients[i]] * quantity
                if (neededQuantity > availableIngredients[ingredients[i]]) {
                    isSuccessful = false;
                    return `Error: not enough ${ingredients[i]} in stock`

                }
            }
            if(isSuccessful){
                ingredients.forEach(ingredient=>{
                    let neededQuantity = recipies[meal][ingredient] * quantity
                    availableIngredients[ingredient]-=neededQuantity
                })
                return 'Success'

            }
        }
        else if(command==='report'){
            let resultString = ''
            for (let obj in availableIngredients) {
                resultString+=`${obj}=${availableIngredients[obj]} `
            }
            return resultString.trim()
        }
    }
})()
console.log(f('restock carbohydrate 10'));

console.log(f('restock flavour 10'));
console.log(f('prepare apple 1'));

console.log(f('restock fat 10'));

console.log(f('prepare burger 1'));

console.log(f('report'));


