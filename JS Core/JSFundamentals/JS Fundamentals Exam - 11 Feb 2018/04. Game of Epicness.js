function solution (information = [],battles = []) {
    let kingdoms = {};
    let winsAndLosses = {};
    let generalWinAndLose = {};
    information.forEach(info=>{
        let kingdom = info['kingdom'];
        let general = info['general'];
        let army = Number(info['army']);
        if(!winsAndLosses.hasOwnProperty(kingdom)){
            winsAndLosses[kingdom] = [0,0]
            generalWinAndLose[kingdom] = {};

        }
        if(!generalWinAndLose[kingdom].hasOwnProperty(general)){
            generalWinAndLose[kingdom][general] = [0,0]
        }
        if(!kingdoms.hasOwnProperty(kingdom)){
            kingdoms[kingdom] = {};
        }
        let oldArmy = kingdoms[kingdom][general];
        if(oldArmy){
            kingdoms[kingdom][general]+=army;
        }
        else{
            kingdoms[kingdom][general] = army
        }
    });
    battles.forEach(battle=>{
       let attackingKingdom = battle[0];
       let attackingGeneral = battle[1];
       let defendingKingdom = battle[2];
       let defendingGeneral = battle[3];
       if(defendingKingdom!==attackingKingdom){
        if(kingdoms[attackingKingdom][attackingGeneral]>kingdoms[defendingKingdom][defendingGeneral]){
            if(!winsAndLosses.hasOwnProperty(attackingKingdom)){
                winsAndLosses[attackingKingdom] = [0,0];
                generalWinAndLose[attackingKingdom] = {};
            }
            if(!winsAndLosses.hasOwnProperty(defendingKingdom)){
               winsAndLosses[defendingKingdom] = [0,0];
               generalWinAndLose[defendingKingdom] = {};
            }
            if(!generalWinAndLose[defendingKingdom].hasOwnProperty(defendingGeneral)){
                generalWinAndLose[defendingKingdom][defendingGeneral] = [0,0]
            }
            if(!generalWinAndLose[attackingKingdom].hasOwnProperty(attackingGeneral)){
                generalWinAndLose[attackingKingdom][attackingGeneral] = [0,0]
            }
            generalWinAndLose[attackingKingdom][attackingGeneral][0]++;
            generalWinAndLose[defendingKingdom][defendingGeneral][1]++;
            winsAndLosses[attackingKingdom][0]++;
            winsAndLosses[defendingKingdom][1]++;
            kingdoms[attackingKingdom][attackingGeneral]=Math.floor(1.1*kingdoms[attackingKingdom][attackingGeneral]);
            kingdoms[defendingKingdom][defendingGeneral] = Math.floor(0.9*kingdoms[defendingKingdom][defendingGeneral]);
        }
        else if(kingdoms[attackingKingdom][attackingGeneral]<kingdoms[defendingKingdom][defendingGeneral]){
            if(!winsAndLosses.hasOwnProperty(attackingKingdom)){
               winsAndLosses[attackingKingdom] = [0,0];
               generalWinAndLose[attackingKingdom] = {};
           }
           if(!winsAndLosses.hasOwnProperty(defendingKingdom)){
               winsAndLosses[defendingKingdom] = [0,0];
               generalWinAndLose[defendingKingdom]={}
           }
            if(!generalWinAndLose[defendingKingdom].hasOwnProperty(defendingGeneral)){
                generalWinAndLose[defendingKingdom][defendingGeneral] = [0,0]
            }
            if(!generalWinAndLose[attackingKingdom].hasOwnProperty(attackingGeneral)){
                generalWinAndLose[attackingKingdom][attackingGeneral] = [0,0]
            }
            generalWinAndLose[attackingKingdom][attackingGeneral][1]++;
            generalWinAndLose[defendingKingdom][defendingGeneral][0]++;
           winsAndLosses[attackingKingdom][1]++;
           winsAndLosses[defendingKingdom][0]++;
           kingdoms[attackingKingdom][attackingGeneral]=Math.floor(0.9*kingdoms[attackingKingdom][attackingGeneral]);
           kingdoms[defendingKingdom][defendingGeneral] = Math.floor(1.1*kingdoms[defendingKingdom][defendingGeneral]);
        }
       }
    });


    let sortedKingdoms = Array.from(Object.keys(kingdoms)).sort(function (a,b) {
        if(winsAndLosses[a][0]>winsAndLosses[b][0]){
            return -1;
        }
        if(winsAndLosses[a][0]<winsAndLosses[b][0]){
            return 1;
        }
        if(winsAndLosses[a][1]>winsAndLosses[b][1]){
            return 1;
        }
        if(winsAndLosses[a][1]<winsAndLosses[b][1]){
            return -1;
        }
        if(a.toString()>b.toString()){
            return 1;
        }
        else {
            return -1;
        }
    })
    let winner = sortedKingdoms[0];
    console.log('Winner: '+winner)
    let generals = Array.from(Object.keys(kingdoms[winner])).sort((a,b)=>kingdoms[winner][b]-kingdoms[winner][a])

    generals.forEach(general=>{
        console.log(`/\\general: ${general}`)
        console.log(`---army: ${kingdoms[winner][general]}`)
        console.log(`---wins: ${generalWinAndLose[winner][general][0]}`)
        console.log(`---losses: ${generalWinAndLose[winner][general][1]}`)
    })

}
solution([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Doran", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon","YorkenShire","Quinn"],
        ["Maiden Way", "Berinon","Stonegate","Ulric"]]


)