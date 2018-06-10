function solution(input=[]){
    let obj = {};
    let result = [];
    let keys = input[0].split('|').filter(x => x!=='').map(x=>x.trim());
    for(let i = 1;i<input.length;i++){
        let values = input[i].split('|').filter(x => x!=='').map(x=>x.trim());
        for(let j = 0;j<values.length;j++){
                if(j>=1) {
                    obj[keys[j]] = Number(values[j])
                }
                else{
                    obj[keys[j]] = values[j]
                }


        }
        result.push(obj)
        obj={};
    }
    console.log(JSON.stringify(result))
}
solution(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)