function multiplyNumber (num) {

    let br = 0;
    let isnegative = true;
    for(let i = 0;i < 3;i++){

        if(Number(num[i])<0){
            br++;
        }
        if(Number(num[i])===0){
            isnegative = false;
            break;
        }
    }
    if(br%2===0){
        isnegative = false;
    }
    if(!isnegative){
        console.log("Positive");
    }
    else{
        console.log("Negative");
    }
}