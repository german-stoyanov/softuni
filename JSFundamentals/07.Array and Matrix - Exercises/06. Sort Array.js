function solution (input) {
    input = input.sort(function (a,b) {
        if(a.length>b.length) return 1;
        if(a.length<b.length) return -1;
        if(a<b) return -1;
        if(a>b) return 1;
    }).join('\n')
    console.log(input)
}