function solution (n) {
    let rows = 0;
    if(n%2==0){
        rows = n-1
    }
    else rows = n;
    let columns = 2*n-1;
    let result = '';
    if(n===2){
        result="+++"
        console.log(result)
    }
    else{
    result = result + "+" + '-'.repeat((columns-3)/2) + '+'+'-'.repeat((columns-3)/2)+'+'+'\n';
    for(let i = 1;i<=(rows-3)/2;i++){
        result = result+'|' + ' '.repeat((columns-3)/2) + '|' + ' '.repeat((columns-3)/2) + '|'+'\n';
    }
    result = result + "+" + '-'.repeat((columns-3)/2) + '+'+'-'.repeat((columns-3)/2)+'+'+'\n';
    for(let i = 1;i<=(rows-3)/2;i++){
        result = result+'|' + ' '.repeat((columns-3)/2) + '|' + ' '.repeat((columns-3)/2) + '|'+'\n';
    }
    result = result + "+" + '-'.repeat((columns-3)/2) + '+'+'-'.repeat((columns-3)/2)+'+'+'\n';
    console.log(result)}
}
solution(2
)