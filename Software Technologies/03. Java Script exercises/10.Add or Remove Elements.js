function removeOrAdd(args) {
    let arr = [];
    for(let i = 0; i<args.length;i++){
        let tokens = args[i].split(' ');
        let command = tokens[0];
        if(command === "add"){
            let numberToAdd = tokens[1];
            arr.push(numberToAdd);
        }
        else{
            let indexToRemove = tokens[1];
            arr.splice(indexToRemove,1);
        }
    }
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
//removeOrAdd(["add 3", "add 5", "remove 1", "add 2"])