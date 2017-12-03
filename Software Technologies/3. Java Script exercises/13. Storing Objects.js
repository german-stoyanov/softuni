function storeObjects (args) {
    let obj = [{}];
    for(let i = 0; i<args.length; i++){
        let tokens = args[i].split(' -> ');
        let name = tokens[0];
        let age = tokens[1];
        let grade = tokens[2];
        let person = {name:name, age:age, grade:grade};
        obj.push(person);
    }
    for (let person of obj.filter(x => x.name !== undefined)){
        console.log(`Name: ${person.name}`);
        console.log(`Age: ${person.age}`);
        console.log(`Grade: ${person.grade}`);
    }
}

