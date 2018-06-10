function solution(input=[]){
    let delimeter = input[input.length-1];
    input.pop();
    console.log(input.join(delimeter))

}
solution(['One',
'Two',
'Three',
'Four',
'Five',
'-'
])