function solution (input) {
    let limits = {city:50,
                    residential:20,
                        interstate:90,
                            motorway:130};
    let overSpeed = (input[0]-limits[input[1]]);

    if(overSpeed>0&&overSpeed<=20){
        console.log('speeding')
    }
    else if(overSpeed<=40&&overSpeed>0){
        console.log('excessive speeding')
    }
    else if(overSpeed>40&&overSpeed>0){
        console.log('reckless driving')
    }
    else{
        return;
    }

}
solution([19, 'residential']);