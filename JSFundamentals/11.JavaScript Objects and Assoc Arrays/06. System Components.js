function solution (input=[]) {
    let info = {};
    input.forEach(line=>{
        let tokens = line.split(' | ');
        let systemName = tokens[0];
        let componentName = tokens[1];
        let subcomponentName = tokens[2];
        if(!info.hasOwnProperty(systemName)){
            info[systemName] = {}
        }
        if(!info[systemName].hasOwnProperty(componentName)){
            info[systemName][componentName]=[]
        }
        info[systemName][componentName].push(subcomponentName);
    })
    let array = Array.from(Object.keys(info));
    array = array.sort(function (a,b) {
        if(Object.keys(info[a]).length>Object.keys(info[b]).length)
            return -1;
        if(Object.keys(info[a]).length<Object.keys(info[b]).length)
            return 1;
        if(a>b)
            return 1;
        if(a<b)
            return -1;

    })
    array.forEach(key=>{
        console.log(key);
        let array1 = Array.from(Object.keys(info[key]));
        array1 = array1.sort(function (a,b) {
            if(Object.keys(info[key][a]).length>Object.keys(info[key][b]).length)
                return -1;
            if(Object.keys(info[key][a]).length<Object.keys(info[key][b]).length)
                return 1;
        })
        array1.forEach(subKey=>{
            console.log('|||'+subKey)
            info[key][subKey].forEach(thing=>{
                console.log('||||||'+thing)

            })



        })
    })

}
solution([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',


])