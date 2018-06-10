function solution (arr,startIndex,endIndex) {
    if(!Array.isArray(arr)){
        return NaN;
    }
    startIndex = (startIndex<0) ? 0:startIndex;
    endIndex = (endIndex>=arr.length-1) ? arr.length-1:endIndex;
    let sum = 0;
    for (startIndex; startIndex <= endIndex; startIndex++) {
        sum+=Number(arr[startIndex])

    }
    return sum
}

console.log(solution([10, 20, 30, 40, 50, 60], 3, 300));