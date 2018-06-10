function solution () {
    let result = new Map();
    for (let i = 0; i < arguments.length; i++) {

        if(!result.has(typeof arguments[i])){
            result.set(typeof arguments[i],0)
        }
        result.set(typeof arguments[i],Number(result.get(typeof arguments[i]))+1)
        console.log(typeof arguments[i]+': '+arguments[i])
    }
    let keys =[ ...result.keys() ];
    keys.sort((a,b)=>{
        if(result.get(a)>result.get(b)){
            return -1;
        }
        if(result.get(a)<result.get(b)){
            return 1;
        }
    })
    keys.forEach(key=>{
        console.log(`${key} = ${result.get(key)}`)
    })
}
