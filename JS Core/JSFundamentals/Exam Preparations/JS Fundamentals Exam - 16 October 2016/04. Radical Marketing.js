function solution (input=[]) {
    let people = [];
    let peopleSubscribers = {};
    let peopleSubscribtions = {};
    input.forEach(line=>{
        if(line.split('-').length === 1){
            if(!people.includes(line)) {

                peopleSubscribtions[line]=[];
                peopleSubscribers[line]=[];
                people.push(line)
            }

        }
        else{
            let tokens = line.split('-');
            let subscriber = tokens[0];
            let peopleWithSubscribe = tokens[1];
            if(people.includes(subscriber)&&people.includes(peopleWithSubscribe)){

                peopleSubscribers[peopleWithSubscribe].push(subscriber)

                peopleSubscribtions[subscriber].push(peopleWithSubscribe)
            }
        }
    })

    people = people.sort(function (a,b) {
        if(peopleSubscribers[a].length>peopleSubscribers[b].length){
            return -1;
        }
        if(peopleSubscribers[a].length<peopleSubscribers[b].length){
            return 1;
        }
        if(peopleSubscribtions[a].length>peopleSubscribtions[b].length){
            return -1;
        }
        if(peopleSubscribtions[a].length<peopleSubscribtions[b].length){
            return 1;
        }
    })
    let winner = people[0]
    let count = 1;
    console.log(winner)
    peopleSubscribers[winner].forEach(sub=>{
        console.log(count+'. '+sub)
        count++
    })

}
solution([
    'J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'J-R',
    'R-G',
    'C-J'

])