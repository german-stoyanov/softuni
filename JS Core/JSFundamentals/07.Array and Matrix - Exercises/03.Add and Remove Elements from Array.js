function solution (input = []) {
    let newArr = []
    for(let i = 1;i<=input.length;i++){
        if(input[i-1]==='remove'){
            newArr.pop();
        }
        else{
            newArr.push(i);
        }
    }
    if(newArr.length===0){
        console.log('Empty')
    }
    else {
        console.log(newArr.join('\n'))
    }
}
solution(['remove','remove','remove']);