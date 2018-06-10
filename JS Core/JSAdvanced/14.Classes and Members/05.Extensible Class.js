let Extensible = (() => {
    let id = 0;
    class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            for (let prop in template) {
                if (template.hasOwnProperty(prop)) {
                    let element = template[prop];
                    if (typeof  element === 'function') {
                        Extensible.prototype[prop] = element;
                    } else {
                        this[prop] = element;
                    }
                }
            }
        }
    }

    return Extensible;

})();

let template =  {
    extensionMethod: () => {
        console.log("From extension method");
    },
    extensionProperty: 'someString'
};

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);

obj1.extend(template);
console.log(obj1);
obj1.extensionMethod();