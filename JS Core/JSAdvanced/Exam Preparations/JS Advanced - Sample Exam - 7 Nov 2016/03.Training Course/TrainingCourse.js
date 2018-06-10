class TrainingCourse {
    constructor(title,trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }
    addTopic(title,date){
        let obj = {};
        obj.title = title;
        obj.date = date;
        this.topics.push(obj);
        this.topics.sort((a,b)=>a.date>b.date);
        return this
    }
    get firstTopic(){
            return this.topics[0]
    }
    get lastTopic(){
        return this.topics[this.topics.length-1]
    }
    toString(){
        let result = `Course "${this.title}" by ${this.trainer}\n`;
        for (let i = 0; i < this.topics.length; i++) {
            if(i !== this.topics.length-1) {
                result += ` * ${this.topics[i].title} - ${this.topics[i].date}\n`
            }
            else{
                result += ` * ${this.topics[i].title} - ${this.topics[i].date}`
            }
        }
        return result
    }
}
let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));

console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

let php = new TrainingCourse("PHP Intro", "Ivan Yonkov")
    .addTopic("Strings", new Date(2017, 2, 16, 18, 0))
    .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
    .addTopic("Arrays", new Date(2017, 2, 14, 18, 0));
console.log("" + php);

let test = new TrainingCourse("PHP", "Royal");
test.addTopic('Syntax', new Date(2017, 10, 12, 18, 0));
test.addTopic('Exam prep', new Date(2017, 10, 14, 18, 0));
test.addTopic('Intro', new Date(2017, 10, 10, 18, 0));
console.log(''+test)
