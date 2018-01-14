function solution (args) {
    for(let i = 0; i< args.length;i++){
        let parsed = JSON.parse (args[i]);
        console.log(`Name: ${parsed.name}`);
        console.log(`Age: ${parsed.age}`);
        console.log(`Date: ${parsed.date}`);
    }
}