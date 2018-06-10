function solutuion (roomsInput=[],peopleInput=[]) {
    let tripleRooms = new Map();
    let roomGender = {};
    let allRooms = []
    let totalbr = 0;
    let doubleRoomsFinal = [];
    let doubleRooms = [];
    let busyRooms = {};
    roomsInput.forEach(room=>{
        if(room['type']==='double-bedded'){
            doubleRooms.push(room['number'])
            doubleRoomsFinal.push(room['number'])
        }
        else{
            tripleRooms.set(room['number'],3)
        }
        allRooms.push(room['number'])
    })
    peopleInput.forEach(couple=>{
        totalbr+=2;
        if(couple['first']['gender']!==couple['second']['gender']){
            if(doubleRooms[0]){
            let coupleArray = [];
            let objectForFirstPeople = {};
            objectForFirstPeople['name']=couple['first']['name'];
            objectForFirstPeople['age'] = couple['first']['age'];
            let objectForSecondPeople = {};
            objectForSecondPeople['name']=couple['second']['name'];
            objectForSecondPeople['age'] = couple['second']['age'];
            coupleArray.push(objectForFirstPeople);
            coupleArray.push(objectForSecondPeople);
            busyRooms[doubleRooms[0]]=coupleArray;
           doubleRooms.shift();
            }
        }
        else{
            if(tripleRooms) {
                let firstPeople = couple['first']['name'];
                let secondPeople = couple['second']['name'];
                let objectForFirstPeople = {};
                objectForFirstPeople['name'] = couple['first']['name'];
                objectForFirstPeople['age'] = couple['first']['age'];
                let objectForSecondPeople = {};
                objectForSecondPeople['name'] = couple['second']['name'];
                objectForSecondPeople['age'] = couple['second']['age'];
                for (let [number, people] of tripleRooms) {
                    if (!busyRooms.hasOwnProperty(number)) {
                        busyRooms[number] = []
                        busyRooms[number].push(objectForFirstPeople)
                        roomGender[number] = couple['first']['gender'];
                        break;
                    }
                    else if (busyRooms[number].length < 3 && couple['first']['gender'] === roomGender[number]) {
                        busyRooms[number].push(objectForFirstPeople)
                        break;
                    }
                }
                for (let [number, people] of tripleRooms) {
                    if (!busyRooms.hasOwnProperty(number)) {
                        busyRooms[number] = []
                        busyRooms[number].push(objectForSecondPeople)
                        roomGender[number] = couple['first']['gender'];
                        break
                    }
                    else if (busyRooms[number].length < 3 && couple['first']['gender'] === roomGender[number]) {
                        busyRooms[number].push(objectForSecondPeople)
                        break;
                    }
                }
            }
        }
    })

    let emptyBeds = 0;
    let br = 0;
    allRooms = allRooms.sort()
    allRooms.forEach(room=>{
        if(doubleRoomsFinal.includes(room)){
            emptyBeds = 2
        }
        else{
            emptyBeds = 3
        }
        console.log('Room number: '+room)
        if(busyRooms[room]){
        let sortedPeople = [];
        busyRooms[room].forEach(people=>{
            sortedPeople.push(people['name'])

        })
        sortedPeople = sortedPeople.sort()
        sortedPeople.forEach(people=>{
            console.log('--Guest Name: '+people)
            let arr = busyRooms[room].filter(x=>x['name']===people)[0];
            let age = arr['age']
            br++;
            console.log('--Guest Age: '+arr['age'])
        })
            if(doubleRoomsFinal.includes(room)){
                emptyBeds = 2-busyRooms[room].length
            }
            else{
                emptyBeds = 3-busyRooms[room].length
            }
        }

        console.log('Empty beds in the room: '+emptyBeds)
    })
    console.log(`Guests moved to the tea house: ${totalbr-br}`)
}
solutuion([ { number: '206', type: 'triple' },
        { number: '311', type: 'double-bedded' } ],
    [ { first: { name: 'Tanya Popova', gender: 'female', age: 24 },
        second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 } },
        { first: { name: 'Katerina Stefanova', gender: 'female', age: 23 },
            second: { name: 'Angel Nachev', gender: 'male', age: 22 } },
        { first: { name: 'Tatyana Germanova', gender: 'female', age: 23 },
            second: { name: 'Boryana Baeva', gender: 'female', age: 22 } },
        { first: { name: 'Katerina Stefanova', gender: 'female', age: 23 },
            second: { name: 'Angel Nachev', gender: 'male', age: 22 } }]

)