let f = (function () {
    return  function gcd(a,b)
    {
        if (b === 0)
        {return a}
        else
        {return gcd(b, a % b)}
    }
})();
console.log(f(11, 121));