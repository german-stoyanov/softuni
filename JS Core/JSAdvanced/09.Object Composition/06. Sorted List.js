let f = (function () {
   let list = [];
   return {
       add:function (element) {
           list.push(element)
           this.size++;
           list = list.sort((a,b)=>a-b)

       },
       remove:function (index) {
           if(index>=0&&index<=list.length-1){
               list.splice(index,1)

               this.size--;
           }

       },
       get:function (index) {
           if(index>=0&&index<=list.length-1){
                return Number(list.filter((e,i)=>i===index))
           }
       },
       size:0
   }
})();
f.add(5)
f.add(3)
f.remove(0)
console.log(f.get(0))