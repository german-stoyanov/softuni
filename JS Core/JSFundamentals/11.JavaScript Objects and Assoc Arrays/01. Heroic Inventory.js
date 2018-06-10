function solution (input=[]) {
    let result = []
    input.forEach(line=>{
        let tokens = line.split(' / ').filter(x=>x!=='')
        let name = tokens[0];
        let level = tokens[1];
        let items = [];
        try{
            items = tokens[2].split(', ')
        }
        catch(error){

        }

        result.push({name:name,
            level:Number(level),
            items:items})
    })
    console.log(JSON.stringify(result))
}
solution(['Isacc / 25 / ',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
])