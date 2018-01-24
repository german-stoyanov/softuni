function solution (input) {
    let func = function (element,n) {
        switch (element){
            case 'chop':return n/2;
            case 'dice':return Math.sqrt(n);
            case 'spice': return n+1;
            case 'bake': return 3*n;
            case 'fillet':return n*0.8
        }
    };
    let num = Number(input[0]);
    for(let i=1;i<input.length;i++){
        num = func(input[i],num);
        console.log(num)
    }

}
solution([32, 'chop', 'chop', 'chop', 'chop', 'chop'])