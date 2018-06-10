function solution (input = []) {
    let newarr = [];
    for(let i in input){
        let e = input[i];
        if(e<0){
            newarr.unshift(e);
        }
        else{
            newarr.push(e);
        }
    }
    console.log(newarr.join('\n'))
}
solution([-1,2,-2,3])