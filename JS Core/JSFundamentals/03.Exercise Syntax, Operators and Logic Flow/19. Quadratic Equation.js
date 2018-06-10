function solution (a,b,c) {
    let d = b**2-4*a*c;
    if(d===0){
        console.log(-b/(2*a))
    }
    else if(d>0){
       let x1 = (-b+Math.sqrt(d))/(2*a);
       let x2 = (-b-Math.sqrt(d))/(2*a);
       console.log((x1>x2)?x2:x1);
       console.log((x1<x2)?x2:x1)
    }
    else console.log('No')
}
solution(6,
11,
-35);