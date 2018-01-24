function FilterByAge (minimumAge,firstName,firstAge,secondName,secondAge) {
    let personA = {name: firstName, age: firstAge};
    let personB = {name: secondName, age:secondAge};
    if(personA.age>=minimumAge){
        console.log(personA);
    }
    if(personB.age>=minimumAge){
        console.log(personB);
    }
}