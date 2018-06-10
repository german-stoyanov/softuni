function solution (startingYield) {
    let totalProduction = 0;
    let totalDays = 0;
    while(startingYield>=100){
        totalDays++;
        totalProduction+=startingYield;
        if(totalProduction-26>0){
            totalProduction=totalProduction-26
        }
        else{
            totalProduction=0
        }
        startingYield-=10;
    }
    if(totalProduction-26>0){
        totalProduction=totalProduction-26
    }
    else{
        totalProduction=0
    }
    console.log(totalDays)
    console.log(totalProduction)
}
solution(200)