class Entity {
    constructor (name) {
        if (new.target === Entity) {
            throw new Error("Cannot be instantiated!");
        }

        this.name = name;
    }
}

module.exports = Entity;