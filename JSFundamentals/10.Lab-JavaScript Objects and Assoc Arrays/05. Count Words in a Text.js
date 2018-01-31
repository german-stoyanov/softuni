function solution (input) {
    let regex = /\W+/g;
    let obj = {}
    let text = input[0].split(regex).filter(x=>x!=='');
    text.forEach(word=>{
        if(!obj.hasOwnProperty(word)){
            obj[word] = 0
        }
        obj[word]++;
    })
    console.log(JSON.stringify(obj))
}
solution()