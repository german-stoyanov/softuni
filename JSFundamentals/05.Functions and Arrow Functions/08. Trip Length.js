function solution (input) {
    let x1=input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let x3 = input[4];
    let y3 = input[5];
    let distance12 = Math.sqrt((x1-x2)**2+(y1-y2)**2);
    let distance13 = Math.sqrt((x1-x3)**2+(y1-y3)**2);
    let distance23 = Math.sqrt((x2-x3)**2+(y2-y3)**2);
    if(distance12>distance13&&distance12>=distance23){
        console.log('1->3->2: '+(distance23+distance13))
    }
    else if(distance13>=distance12&&distance13>=distance23){
        console.log('1->2->3: '+(distance23+distance12))
    }
    else{
        console.log('2->1->3: '+(distance12+distance13))
    }
}
solution([0, 0, 2, 0, 4, 0])