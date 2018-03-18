function solution () {


class Melon {
    constructor(weight, melonSort) {
        if (new.target === Melon) {
            throw new TypeError("Abstract class cannot be instantiated directly");
        }
        this.weight = weight;
        this.melonSort = melonSort;

    }
    toString() {
        if(this.constructor.name!=='Melolemonmelon'){
                let element = this.constructor.name
                    .split('melon')
                    .filter(e => e !== '')[0];

                return `Element: ${element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
        else{
            return `Element: ${this.name}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
}
class Watermelon extends Melon{
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    constructor(weight, melonSort) {
        super(weight,melonSort)

    }
}
class Firemelon extends Melon{
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    constructor(weight, melonSort) {
        super(weight,melonSort)

    }
}
class Earthmelon extends Melon{
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    constructor(weight, melonSort) {
        super(weight,melonSort)

    }
}
class Airmelon extends Melon{
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    constructor(weight, melonSort) {
        super(weight,melonSort)

    }
}
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.counter = 0;
        this.name = 'Water';
        this.elements = ['Water', 'Fire', 'Earth', 'Air']
    }

    morph() {
        this.counter++;
        this.name = this.elements[this.counter % 4]
    }


}
return {
    Melon,
    Watermelon,
    Firemelon,
    Earthmelon,
    Airmelon,
    Melolemonmelon
}
}
let Melolemonmelon = solution().Melolemonmelon
let m1 = new Melolemonmelon(3,'gogo')
console.log(m1+'');