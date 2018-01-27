function solution (input) {
    let regex = /^([a-zA-Z0-9]+)@([a-z]+)\.([a-z]+)$/;
    if(regex.test(input)){
        console.log('Valid')
    }
    else{
        console.log('Invalid')
    }
}

