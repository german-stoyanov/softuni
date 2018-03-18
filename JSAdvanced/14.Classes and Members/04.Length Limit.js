class Stringer{
    constructor(str,length){
        this.innerString = str;
        this.innerLength = length;
    }
    decrease(length){
        this.innerLength = (this.innerLength-length>0)?this.innerLength-length:0
    }
    increase(length){
        this.innerLength = (this.innerLength+length>0)?this.innerLength+length:0
    }
    toString(){
        if(this.innerString.length>this.innerLength){
            return this.innerString.substr(0,this.innerLength)+'...'
        }
        return  this.innerString
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString());

