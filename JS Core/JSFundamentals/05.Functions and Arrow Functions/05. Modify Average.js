function solution (input) {
    function isHigherThanFive (element) {
       let sum = 0;
       for(let i = 0;i<element.length;i++){
           sum+=Number(element[i])
       }
       if(sum/element.length>5){
            return true;
       }
       else return false;
    }
    while(!isHigherThanFive(input)){
        input += '9';
    }
    console.log(input)
}
solution(101)