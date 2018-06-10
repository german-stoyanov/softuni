function solution (base,increment) {
    let gold = 0;
    let stone  = 0;
    let marble = 0;
    let lapislazuli = 0;
    let steps = 0;
    for(let i = base;i>0;i=i-2){
        steps++;
        if(i===1||i===2){
            gold+=i*i*increment;
        }
        else{
            if(steps%5===0){
                lapislazuli+=4*(i-1)*increment;
                stone+=increment*(i-2)**2;

            }
            else{
                stone+=increment*(i-2)**2;
                marble+=4*(i-1)*increment;

            }
        }

    }
    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapislazuli)}`)
    console.log('Gold required: '+Math.ceil(gold))
    console.log(`Final pyramid height: ${Math.floor(steps*increment)}`)

}
solution(100,
0.33)