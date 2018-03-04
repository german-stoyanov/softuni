function solution (array = [],sortMethod) {
    if(sortMethod==='asc'){
        return array.sort((a,b)=>a-b)
    }
    else{
        return array.sort((a,b)=>b-a)
    }
}

