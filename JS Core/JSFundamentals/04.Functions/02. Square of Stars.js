function square (n) {
    if(n===undefined){
        n=5;
    }
    function print() {
        console.log(' *'.repeat(n))
    }

    for(let i = 0;i<n;i++){
        print();
    }
}