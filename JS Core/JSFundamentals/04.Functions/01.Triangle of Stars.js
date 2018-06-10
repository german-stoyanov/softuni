function solution (n){
    function print(j) {
        console.log('*'.repeat(j))
    }
    for(let i = 1;i<=n;i++){
        print(i)
    }
    for(let i = n-1;i>=1;i--){
        print(i)
    }
}