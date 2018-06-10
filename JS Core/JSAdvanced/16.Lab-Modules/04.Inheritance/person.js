let Entity = require('./entity');
let Dog = require('./dog');

class Person extends Entity {
    constructor(name, phrase, dog) {
        super(name);
        this.phrase = phrase;
        this.dog = dog;
    }

    get dog() {
        return this._dog;
    }

    set dog(value) {
        if (value instanceof Dog === false) {
            throw new TypeError('Should be an instance of Dog!');
        }

        this._dog = value;
    }

    saySomething() {
        return `${this.name} says: ${this.phrase}${this.dog.name} barks!`;
    }
}

module.exports = Person;