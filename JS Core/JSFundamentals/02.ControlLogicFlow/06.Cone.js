function cone (r,h) {
    let B = Math.PI*r*r;
    let L = Math.PI*r*Math.sqrt(r*r+h*h);

    console.log(B*h/3);
    console.log(B+L);
}