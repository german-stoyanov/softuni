function solution (input=[]) {
    let taskInformation = {};
    let TotalScoreAndLines = {};
    input.forEach(line=>{
        let [name,type,numberOfTask,score,lines] = line.split(' & ').filter(z=>z!=='');
        if(!taskInformation.hasOwnProperty(`Task ${numberOfTask}`)){
            taskInformation[`Task ${numberOfTask}`] = {}
            taskInformation[`Task ${numberOfTask}`]['tasks'] = [];
            taskInformation[`Task ${numberOfTask}`]['average'] = 0;
            TotalScoreAndLines[`Task ${numberOfTask}`] = [0,0]
        }
        taskInformation[`Task ${numberOfTask}`]['tasks'].push({name: name, type: type});
        TotalScoreAndLines[`Task ${numberOfTask}`][0]+=Number(score);
        TotalScoreAndLines[`Task ${numberOfTask}`][1]+=Number(lines);
    })
    let tasks = Array.from(Object.keys(taskInformation));
    tasks.forEach(task=>{
        taskInformation[task]['average'] = Math.round((TotalScoreAndLines[task][0]/taskInformation[task]['tasks'].length)*100)/100;
        taskInformation[task]['lines'] = TotalScoreAndLines[task][1];
    })
    //resavingTheInformationWithTheFollowingCode
    tasks = tasks.sort(function (a,b) {
        if(taskInformation[a]['average']>taskInformation[b]['average']){
            return -1;
        }
        if(taskInformation[a]['average']<taskInformation[b]['average']){
            return 1;
        }
        if(taskInformation[a]['lines']>taskInformation[b]['lines']){
            return 1;
        }
        if(taskInformation[a]['lines']<taskInformation[b]['lines']){
            return -1;
        }
    })

    let finalSortedObject = {}
    tasks.forEach(task=>{
        let sortedTasks = taskInformation[task]['tasks'].sort((a,b)=>a['name'].localeCompare(b['name']));
        finalSortedObject[task]={}
        finalSortedObject[task]['tasks'] = sortedTasks;
        finalSortedObject[task]['average'] = taskInformation[task]['average'];
        finalSortedObject[task]['lines'] = taskInformation[task]['lines']
    })
    
    console.log(JSON.stringify(finalSortedObject));

}
solution([ 'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 & 100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81' ])