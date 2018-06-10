let Person = require('./person');

class Student extends Person {
    constructor(name, phrase, dog, id) {
        super(name, phrase, dog);
        this.id = Number(id);
    }

    saySomething() {
        return `Id: ${this.id} ${this.name} says: ${this.phrase}${this.dog.name} barks!`;
    }
}

module.exports = Student;