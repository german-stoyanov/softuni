function solution (input = []) {
    let n = input[input.length-1];
    let last = '';
    input.pop();
    for(let i = 0;i<n%input.length;i++){
        last = input[input.length-1];
        for(let j = input.length-1;j>=1;j--){

            input[j]=input[j-1];
        }
        input[0]=last;
    }
    console.log(input.join(' '))
}
solution(['Banana','Orange','Coconut','apple','15'])