let add = (function () {
   let currentSum = 0;
   return function add (number) {
      currentSum+= Number(number)

       add.toString = function () {
           return currentSum
       }
       return add

   }
})()
console.log(Number(add(1)))
