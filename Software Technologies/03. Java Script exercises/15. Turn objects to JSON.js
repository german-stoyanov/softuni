
function storeObjects (args) {
    let obj = {};
    for(let i = 0; i<args.length; i++){
        let tokens = args[i].split(' -> ');
        let key = tokens[0];
        let value = tokens[1];
        if(!isNaN(value)){
            value = Number(value);
        }
        obj[key] = value;
    }
    console.log(JSON.stringify(obj));
}
