function validityChecker(coor) {

    let x1 = coor[0];
    let y1 = coor[1];
    let x2 = coor[2];
    let y2 = coor[3];

    let t1 = getDistance(x1, y1);
    let t2 = getDistance(x2, y2);
    let t1t2 = getDistance(x2 - x1, y2 - y1);

    PrintResult(t1, x1, y1, 0, 0);
    PrintResult(t2, x2, y2, 0, 0);
    PrintResult(t1t2, x1, y1, x2, y2);

    function PrintResult(num, x1, y1, x2, y2) {
        if (Number.isInteger(num)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    function getDistance(x, y) {
        return Math.sqrt(x ** 2 + y ** 2);
    }
}