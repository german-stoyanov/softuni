function solution (input) {
    let required = input[0];

    for(let i = 1;i<input.length;i++){
        console.log(`Processing chunk ${input[i]} microns`)


        if(0.25*input[i]>=required-1){
            let br = 0;
            do{
                br++;
                input[i]=input[i]/4;
            }while(0.25*input[i]>=required-1);
            console.log(`Cut x${br}`);
            console.log('Transporting and washing')
           input[i] = Math.floor(input[i])
        }

        if(0.8*input[i]>=required-1){
            let br = 0;
            do{
                br++;
                input[i]=input[i]*0.8;
            }while(0.8*input[i]>=required-1)
            console.log(`Lap x${br}`)
            console.log('Transporting and washing')
            input[i] = Math.floor(input[i])
        }

        if(input[i]-20>=required-1){
            let br = 0;
            do{
                br++;
                input[i]=input[i]-20;
            }while(input[i]-20>=required-1)
            console.log(`Grind x${br}`)
            console.log('Transporting and washing')
            input[i] = Math.floor(input[i])
        }

        if(input[i]-2>=required-1){
            let br = 0;
            do{
                br++;
                input[i]=input[i]-2;
            }while(input[i]-2>=required-1)
            console.log(`Etch x${br}`)
            console.log('Transporting and washing')
            input[i] = Math.floor(input[i])
        }
        if(input[i]===required){
            console.log(`Finished crystal ${required} microns`)
        }
        else if(input[i]+1===required){
            console.log('X-ray x1')
            console.log(`Finished crystal ${required} microns`)
        }




    }
}
solution([1000, 4000, 8100]);