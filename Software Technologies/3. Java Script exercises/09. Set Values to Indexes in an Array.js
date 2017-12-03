function setValues(args) {
    let n = args[0];
    let arr = [];
    for (let i = 1; i<args.length;i++){
        let tokens = args[i].split(' - ');
        let index = tokens[0];
        let value = tokens[1];

        arr[index] = value;
    }

    for (let i = 0;i<n;i++){
        if(arr[i]===undefined){
            arr[i]=0;
        }
        console.log(arr[i]);
    }
}