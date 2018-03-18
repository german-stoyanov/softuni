class Rat{

    constructor(name){
        this.name = name;
        this.unitedRats = []
    }
    unite(othRat){
        if(Object.getPrototypeOf(othRat)===Rat.prototype){
            this.unitedRats.push(othRat)
        }
    }
    getRats(){
        return this.unitedRats
    }
    toString(){
        if (this.unitedRats.length === 0) {
            return this.name;
        }

        let result = this.name + '\n';
        for (let rat of this.unitedRats) {
            result += '##' + rat.name + '\n';
        }

        return result;
    }
}
let r1 = new Rat('ggog')
console.log(Object.getPrototypeOf(r1)===Rat.prototype)