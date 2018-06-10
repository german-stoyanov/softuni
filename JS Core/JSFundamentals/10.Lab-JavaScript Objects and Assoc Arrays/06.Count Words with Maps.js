function solution (input) {
    let mymap = new Map();
    let regex = /\W+/g;
    for (let str of input) {
        let text = str.toLowerCase().split(regex).filter(x=>x!=='');
        text.forEach(word=>{
            if(!mymap.has(word)){
                mymap.set(word,0);
            }
            mymap.set(word,mymap.get(word)+1)
        })
    }
    let arr = Array.from(mymap.keys()).sort((a,b)=>a.localeCompare(b));
    arr.forEach(key=>{
        console.log("'"+key+"'"+" -> "+mymap.get(key)+' times')
    })
}
solution(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --'])