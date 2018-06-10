function solution (input=[]) {
    let result = new Set();
    input.forEach(line=>{
        result.add(line)

    })
    let array = Array.from(result).sort(function (a,b) {
      if(a.length>b.length) return 1;
      if(a.length<b.length) return -1;
      if(a>b) return 1;
      if(a<b) return -1;
    })
    console.log(array.join('\n'))
}
solution(['Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot'
])