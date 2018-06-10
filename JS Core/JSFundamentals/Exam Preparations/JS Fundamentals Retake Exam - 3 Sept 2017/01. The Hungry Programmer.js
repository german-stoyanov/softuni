function solution(meals=[],comands=[]) {
    let eaten = 0;
    for(let i = 0;i<comands.length;i++){
        if(comands[i]==='End'){
            break;
        }
        else if(comands[i].startsWith('Add')){
            let meal = comands[i].split(' ').filter(x=>x!=='')[1];
            if(meal!==undefined) {


                meals.unshift(meal);
            }
        }
        else if(comands[i]==='Eat'&&meals[0]!==undefined){
            console.log(meals[0]+' eaten')
            eaten++;
            meals.shift()
        }
        else if(comands[i]==='Serve'&&meals[meals.length-1]!==undefined){
            console.log(meals[meals.length-1]+' served!')
            meals.pop()
        }
        else if(comands[i].startsWith('Consume')){
            let tokens = comands[i].split(' ').filter(x=>x!=='');
            let startIndex = tokens[1];
            let endIndex = tokens[2];
            if(meals[startIndex]!==undefined&&meals[endIndex]!==undefined){
                for (let i = endIndex;i>=startIndex;i--){
                    meals.splice(i,1)
                    eaten++
                }
                console.log('Burp!')
            }

        }
        else if(comands[i].startsWith('Shift')){
            let tokens = comands[i].split(' ').filter(x=>x!=='');
            let index1 = tokens[1];
            let index2 = tokens[2];
            if(meals[index1]!==undefined&&meals[index2]!==undefined){
                let firstMeal = meals[index1];
                meals[index1]=meals[index2];
                meals[index2]=firstMeal;
            }
        }
    }
    if(meals.length>=1) {


        console.log('Meals left: ' + meals.join(', '))
    }
    else{
        console.log('The food is gone')
    }
    console.log('Meals eaten: '+eaten)
}
solution(['bacon', 'veggies', 'chicken'],
['Add',
'End'])



