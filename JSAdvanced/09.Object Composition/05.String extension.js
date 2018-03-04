(function () {
   String.prototype.ensureStart = function (str) {
       let newStr = '';
       if(!this.startsWith(str)){
           newStr=str+this;
           return newStr
       }
       return this.toString()
   }
    String.prototype.ensureEnd = function (str) {
        let newStr = '';
        if(!this.endsWith(str)){
            newStr=this+str;
            return newStr
        }
        return this.toString()
    }
    String.prototype.isEmpty = function () {

        if(this.toString()===''){
            return true
        }
        else {
            return false;
        }
    }
    String.prototype.truncate = function (n) {
        if(n<4){
            return '.'.repeat(n)
        }
        if(this.length<=n){
            return this.toString();
        }
        if (this.indexOf(' ') === -1) {

            let result = '';
            for (let i = 0; i < n - 3; i++) {
                result += this[i];
            }

            return result + '...';
        }
        let words = this.split(' ');
        let result = '';
        for (let word of words) {
            if (result.length + word.length + 3 > n) {
                result = result.trim();
                break;
            }
            result += word + ' ';
        }


        return result + '...';
   };
   String.format = function () {
       let placeHolders = [];
       let text = arguments[0];
       let pattern = /{([0-9])}/g;
       for(let i = 1;i<arguments.length;i++){
           placeHolders.push(arguments[i])
       }

       text = text.replace(pattern,function (match,group1) {
           if(placeHolders[Number(group1)]!==undefined){
               return placeHolders[Number(group1)]
           }
            return match
       })
       return text
   }
})();
console.log(''.isEmpty());
