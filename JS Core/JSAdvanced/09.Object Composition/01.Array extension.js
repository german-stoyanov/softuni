(function () {
    Array.prototype.last = function () {
           return this[this.length-1]
    };
    Array.prototype.skip = function (n) {
        return this.filter((e,i)=>i>Number(n)-1)
    };
    Array.prototype.take = function (n) {
        return this.filter((e,i)=>i<Number(n))
    };
    Array.prototype.sum = function () {
        return this.reduce((a,b)=>a+b)
    };
    Array.prototype.average = function () {
        return this.reduce((a,b)=>a+b)/this.length
    }
})();
myArr = [1,1,1,2,2,3];
console.log(myArr.average());