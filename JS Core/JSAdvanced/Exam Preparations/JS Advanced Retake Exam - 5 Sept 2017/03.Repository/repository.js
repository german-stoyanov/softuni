class Repository {
    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value
    }
    constructor(props){
        this.rules = props;
        this.data = new Map();
        this.id=0;
        this.ids = [];

    }
    get count(){
        return this.data.size;
    }
    add(entity){
        let keys = Object.keys(entity);
        for (let i = 0; i < keys.length; i++) {
            if(keys[i]!==Object.keys(this.rules)[i]){
                throw new Error(`Property ${Object.keys(this.rules)[i]} is missing from the entity!`)
            }
        }
        for (let i = 0; i < keys.length; i++) {
            if(typeof entity[keys[i]]!==this.rules[Object.keys(this.rules)[i]]){
                throw new  TypeError (`Property ${entity[keys[i]]} is of incorrect type!`)
            }
        }
        (this.data).set(this.id,entity);
        this.ids.push(this.id);
        this.id++;

        return this.id-1;

    }
    get(id){
        if(this.ids.includes(id)){
            return this.data.get(id)
        }
        else{
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
    }
    update(id,newentity){
        if(!this.ids.includes(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        else{
            let keys = Object.keys(newentity);
            for (let i = 0; i < keys.length; i++) {
                if(keys[i]!==Object.keys(this.rules)[i]){
                    throw new Error(`Property ${Object.keys(this.rules)[i]} is missing from the entity!`)
                }
            }
            for (let i = 0; i < keys.length; i++) {
                if(typeof newentity[keys[i]]!==this.rules[Object.keys(this.rules)[i]]){
                    throw new TypeError (`Property ${newentity[keys[i]]} is of incorrect type!`)
                }
            }
            (this.data).set(id,newentity);
        }
    }
    del(id){
        if(!this.ids.includes(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        else{
            let index = this.ids.indexOf(id);
            this.ids.splice(index,1);
            this.data.delete(id)
        }
    }
}
// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity); // Returns 0
repository.add(entity); // Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity

repository.del(0);
console.log(repository.count); // Returns 1
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
};
//repository.add(anotherEntity); // should throw an Error
anotherEntity = {
    name: 'Nakov',
    age: 26,
    birthday: 1991
};
console.log(repository.ids)
//repository.add(anotherEntity); // should throw a TypeError
//repository.del(-1); // should throw Error for invalid id





