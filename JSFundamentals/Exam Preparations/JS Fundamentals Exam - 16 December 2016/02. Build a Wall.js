function solution (input = []) {
    let arrayFromNumbers = input.map(x=>x=Number(x));
    let allConcrete = [];
    while(arrayFromNumbers.filter(x=>x!==30).length>0){
        let concretePerDay = 0;
        for(let i = 0;i<arrayFromNumbers.length;i++){
            if(arrayFromNumbers[i]<30){
                arrayFromNumbers[i]++;
                concretePerDay+=195;
            }
        }
        allConcrete.push(concretePerDay)
    }
    console.log(allConcrete.join(', '));
    console.log((allConcrete.reduce((a,b)=>a+b))*1900+' pesos')
}
solution([ '21', '25', '28' ])