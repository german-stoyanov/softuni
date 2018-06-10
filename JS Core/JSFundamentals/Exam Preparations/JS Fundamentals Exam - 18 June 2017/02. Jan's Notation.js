function solution (input=[]) {
    let result = [];
    let endProgram = false
   input.forEach(commandOrNumber=>{
       if(commandOrNumber==='/'||commandOrNumber==='*'||commandOrNumber==='+'||commandOrNumber==='-'){
           let numbers = result.splice(-2);
           if(numbers.length<2){
               console.log('Error: not enough operands!')
               endProgram = true;

           }
           else{
               switch(commandOrNumber){
                   case '/':result.push(numbers[0]/numbers[1]);
                       break;
                   case '*':result.push(numbers[0]*numbers[1]);
                       break;
                   case '-':result.push(numbers[0]-numbers[1]);
                       break;
                   case '+':result.push(numbers[0]+numbers[1]);
                       break;
               }
           }

       }
       else{
           result.push(commandOrNumber)
       }
   })
    if(result.length>1&&!endProgram){
       console.log('Error: too many operands!')
    }
    else if (!endProgram){
        console.log(result[0])
    }
}
solution([15,
    '/']
)
