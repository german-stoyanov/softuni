class Player {
    constructor(nickName){
        this.nickName = nickName;
        this.scoreList = [];
    }
    addScore(score){

        let sc = Number(score);
        if(!isNaN(sc)){
            if(typeof score === 'number'||typeof score === 'string'){
                this.scoreList.push(sc);
            }
        }

        return this;
    }

    get scoreCount(){
        return this.scoreList.length;
    }
    get highestScore(){
        if(this.scoreCount===0){
            return undefined
        }
        return Math.max(...this.scoreList)
    }
    get topFiveScore(){

        return this.scoreList.sort((a,b)=>b-a).filter((e,i)=>i<5)
    }
    toString(){
        return `${this.nickName}: [${this.scoreList.sort((a,b)=>b-a)}]`
    }
}
let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
console.log();
let maria = new Player("Maria")
    .addScore(350)
    .addScore(779)
    .addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log(''+maria)