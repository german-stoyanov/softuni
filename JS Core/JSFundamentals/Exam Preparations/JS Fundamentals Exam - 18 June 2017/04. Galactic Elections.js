function solution (input = []) {
    let votesPerSystem = {};
    let winners = {};
    let totalVotes=0;
    let whoWinTheSystem = {};
    let allInformation = {};
    input.forEach(info=>{
        let system = info['system'];
        let candidate = info['candidate'];
        let votes = info['votes'];
        totalVotes += votes;
        if(!votesPerSystem.hasOwnProperty(system)){
            votesPerSystem[system]=0
            allInformation[system]={}
        }
        votesPerSystem[system]+=Number(votes)
        let oldVotes = allInformation[system][candidate];
        if(oldVotes){
            allInformation[system][candidate]+=votes;
        }
        else{
            allInformation[system][candidate] = votes
        }
    })
    let systems = Array.from(Object.keys(allInformation));
    systems.forEach(system=>{
        let candidate = Array.from(Object.keys(allInformation[system])).sort((a,b)=>allInformation[system][a]<allInformation[system][b])[0];

        if(!winners.hasOwnProperty(candidate)){
            winners[candidate]=0
            whoWinTheSystem[candidate]=[]
        }
        winners[candidate]+=Number(votesPerSystem[system])
        whoWinTheSystem[candidate].push(system)
    })
    let arrayFromWinners = Array.from(Object.keys(winners)).sort((a,b)=>winners[a]<winners[b])
    if(winners[arrayFromWinners[0]]/totalVotes>0.5&&arrayFromWinners.length>1){
        console.log(arrayFromWinners[0]+' wins with '+winners[arrayFromWinners[0]]+' votes')
        console.log('Runner up: '+arrayFromWinners[1])
        let arrayWithOutput = whoWinTheSystem[arrayFromWinners[1]].sort((a,b)=>votesPerSystem[a]<votesPerSystem[b])
        arrayWithOutput.forEach(element=>{
            console.log(element+': '+votesPerSystem[element])
        })
    }
    else if(arrayFromWinners.length===1){
        console.log(`${arrayFromWinners[0]} wins with ${totalVotes} votes \n${arrayFromWinners[0]} wins unopposed!`)
    }
    else{
        console.log(`Runoff between ${arrayFromWinners[0]} with ${Math.floor((winners[arrayFromWinners[0]]/totalVotes)*100)}% and ${arrayFromWinners[1]} with ${Math.floor((winners[arrayFromWinners[1]]/totalVotes)*100)}%`)
    }


}
solution([ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
    { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
    { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
    { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
    { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
    { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]

)