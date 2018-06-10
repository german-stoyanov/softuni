function solution (matrix=[],commands=[]) {
    let parsedMatrix = [];
    for(let i = 0;i<5;i++){
        parsedMatrix[i] = matrix[i].split(' ').filter(x=>x!=='').map(x=>x=Number(x));

    }
    commands.forEach(command=>{
        let tokens = command.split(' ');
        if(tokens[0]==='breeze'){
            let currentRow = Number(tokens[1]);
            for(let i = 0;i<5;i++){
                parsedMatrix[currentRow][i]=parsedMatrix[currentRow][i]-Number(15);
                if(parsedMatrix[currentRow][i]<0){
                    parsedMatrix[currentRow][i]=0
                }
            }
        }
        if(tokens[0]==='gale'){
            let currentColumn = Number(tokens[1]);
            for(let i = 0;i<5;i++){
                parsedMatrix[i][currentColumn]=parsedMatrix[i][currentColumn]-Number(20);
                if(parsedMatrix[i][currentColumn]<0){
                    parsedMatrix[i][currentColumn]=0
                }
            }
        }
        if(tokens[0]==='smog'){
            let pm = tokens[1]
            for(let i = 0;i<5;i++){
                for(let j = 0;j<5;j++){
                    parsedMatrix[i][j]+=Number(pm);
                    if(parsedMatrix[i][j]<0){
                        parsedMatrix[i][j] = 0;
                    }
                }
            }
        }
    })
    let polutedAreas = []
    for(let i = 0;i<5;i++){
        for(let j = 0;j<5;j++){
            if(parsedMatrix[i][j]>=50){
                polutedAreas.push(`[${i}-${j}]`)
            }
        }
    }
    if(polutedAreas[0]===undefined){
        console.log('No polluted areas')
    }
    else{
        console.log('Polluted areas: '+polutedAreas.join(', '))
    }
}
solution([ '5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24' ],["breeze 1", "gale 2", "smog 25"])