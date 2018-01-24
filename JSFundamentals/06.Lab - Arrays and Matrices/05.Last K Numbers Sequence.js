function solution (n,k) {
    let arr = [1];
    for(let i = 1;i<n;i++){
        let element = arr.slice(-k);
        let sum = 0;
        element.forEach(e=>{
            sum+=e;
        });
        arr.push(sum);
    }
    console.log(arr)
}
solution(6,3)