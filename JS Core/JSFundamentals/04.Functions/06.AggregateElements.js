function solution (input) {
    aggregate(0,input,(a,b)=>a+b);
    aggregate(0,input,(a,b)=>a+1/b);
    aggregate('',input,(a,b)=>a+b);
    function aggregate (startValue,arr,func) {
        for(let i = 0;i<arr.length;i++){
            startValue=func(startValue,arr[i])
        }
        console.log(startValue)
    }

}
solution([1,2,3])