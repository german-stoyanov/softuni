
function rounding (input) {
    let num = Number(input[0]);
    let prec = Number(input[1]);
    if(prec>15){
        prec = 15;
    }
    multiplier = 10**prec;
    console.log(Math.round(multiplier*num)/multiplier)
}
rounding(['10.5','3']);