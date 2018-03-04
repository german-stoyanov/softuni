function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function getDollarFormatter(formatterFunc) {
    return function (number) {
       return formatterFunc(',','$',true,number)
    }
}
let dollars = getDollarFormatter(currencyFormatter);
console.log(dollars(5454));
