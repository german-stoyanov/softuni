function solution (input) {
    let x1 = input[0];
    let y1 = input[1];
    let z1 = input[2];
    let x2 = input[3];
    let y2 = input[4];
    let z2 = input[5];
    let horizontal = Math.sqrt((x1-x2)**2+(y1-y2)**2);
    let vertikal = Math.abs(z2-z1);
    let realDistance = Math.sqrt(horizontal**2+vertikal**2);
    console.log(realDistance);
}

solution(['1',
    '1',
    '0',
    '5',
    '4',
    '0'])