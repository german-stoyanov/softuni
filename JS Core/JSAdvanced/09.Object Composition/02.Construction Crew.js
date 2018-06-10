function solution (obj) {


        if(obj.handsShaking===true){
            obj.handsShaking =false
            obj.bloodAlcoholLevel += 0.1*obj.experience*obj.weight;
            return obj
        }
        else{
            return obj
        }

}

console.log(solution({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));