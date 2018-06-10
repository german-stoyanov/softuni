function solution (a) {
    let num = a/400;
    let degrees = num*360;
    let finaldegrees = 0;
    if(degrees>=0){
        finaldegrees = degrees%360;
    }
    else{
       finaldegrees = Math.abs(degrees)%360;
       finaldegrees = 360-finaldegrees;
    }
    console.log(finaldegrees);
}
solution(-4
);
