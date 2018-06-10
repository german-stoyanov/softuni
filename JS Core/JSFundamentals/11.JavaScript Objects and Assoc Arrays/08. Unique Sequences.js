function solution (input=[]) {
    let result = new Set();

    input.forEach(line=>{
        let array = JSON.parse(line).sort((a,b)=>b-a);


        result.add(JSON.stringify(array))

    })

    result = [...result].map(x=>x = JSON.parse(x));

    let array = Array.from(result).sort(function (a,b) {
        if(a.length>b.length) return 1;
        if(a.length<b.length) return -1;
        return 0;
    });


    array.forEach(array=>{
        console.log('['+array.join(', ')+']')
    })
}
solution( [
        '[-3, -2, -1, 0, 1, 2, 3, 4]',
        '[10, 1, -17, 0, 2, 13]',
        '[4, -3, 3, -2, 2, -1, 1, 0]'
    ]

   )