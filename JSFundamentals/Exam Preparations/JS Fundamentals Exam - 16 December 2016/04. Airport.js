function solution (input = []) {
    input = input.filter(x=>x!=='');
    let planeAction = {};
    let townLandsAndDepartures = {};
    let townPlanes = {};
    input.forEach(flight=>{
        let tokens = flight.split(' ').filter(x=>x!=='');
        let plane = tokens[0];
        let town = tokens[1];
        let numberOfPeople = tokens[2];
        let action = tokens[3];
        if(!planeAction.hasOwnProperty(plane)){
            planeAction[plane]=[];
            planeAction[plane].push('depart');
        }
        if(planeAction[plane][planeAction[plane].length-1]!==action){
            planeAction[plane].push(action);
            if(!townLandsAndDepartures.hasOwnProperty(town)){
                townLandsAndDepartures[town] = [];
                townPlanes[town]=[];
                townLandsAndDepartures[town].push(Number(0));
                townLandsAndDepartures[town].push(Number(0));

            }
            if(!townPlanes[town].includes(plane)) {
                townPlanes[town].push(plane);
            }
            if(action==='depart'){
                townLandsAndDepartures[town][1]+=Number(numberOfPeople);
            }
            else{
                townLandsAndDepartures[town][0]+=Number(numberOfPeople)
            }
        }
    })
    console.log('Planes left:')
    let leftPlanes = Array.from(Object.keys(planeAction));
    leftPlanes = leftPlanes.filter(x=>planeAction[x][planeAction[x].length-1]==='land').sort((a,b)=>a.localeCompare(b));
    leftPlanes.forEach(plane=>{
        console.log('- '+plane)
    })
    let towns = Array.from(Object.keys(townLandsAndDepartures)).sort(function (a,b) {
        if(townLandsAndDepartures[a][0]>townLandsAndDepartures[b][0]){
            return -1;
        }
        if(townLandsAndDepartures[a][0]<townLandsAndDepartures[b][0]){
            return 1;
        }
        return a.localeCompare(b)
    })
    towns.forEach(town=>{
        console.log(town)
        console.log('Arrivals: '+townLandsAndDepartures[town][0]);
        console.log('Departures: '+townLandsAndDepartures[town][1]);
        let sortedPlanes = townPlanes[town].sort((a,b)=>a.localeCompare(b))
        console.log('Planes:')
        sortedPlanes.forEach(plane=>{
            console.log('-- '+plane)
        })
    })


}
solution([
    'RTA72 London -10 land',
    'RTA#72 Brussels -110 depart',
'RTA7!2 Warshaw 350 land',
'RTA72 Riga -201 depart',
'rta72 riga -13 land',
'rta Riga -200 depart'
    ]



)