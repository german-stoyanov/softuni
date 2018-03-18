class Task{
    get isOverdue() {
        if(this.deadline<Date.now()&&this.status!=='Complete'){
            return true;
        }
        else {
            return false;
        }
    }

    set isOverdue(value) {
        if(this.deadline<Date.now()&&this.status!=='Complete'){
            this._isOverdue = true;
        }
        else {
            this._isOverdue = value;
        }

    }
    get deadline() {
        return this._deadline;
    }

    set deadline(value) {

        if(value<Date.now()){
           throw new Error('Error!');
       }
        this._deadline = value;
    }
    constructor(title,deadline){
        this.title = title;
        this.status = "Open";
        this.deadline = deadline;
        this.isOverdue = false;

    }
    toString(){
        let statusIcon = {'Open':"\u2731",'In Progress':"\u219D","Complete":"\u2714","Overdue":"\u26A0"};
        if(this.isOverdue===true){
            return `[⚠] ${this.title} (overdue)`
        }
        else if(this.status==='Complete'){
            return `[✔] ${this.title}`
        }
        return `[${statusIcon[this.status]}] ${this.title} (deadline: ${this.deadline})`
    }
    static comparator(a,b){
        let astatus = a.status;
        let bstatus = b.status;
        let yerarchy = ["overdue","In Progress","Open","Complete"];
        if(a.isOverdue){
            astatus = 'overdue'
        }
        if(b.isOverdue){
            bstatus = 'overdue'
        }

         if(astatus===bstatus){
            if(a.deadline>b.deadline){
                return 1;
            }
            else if(a.deadline>b.deadline){
                return -1;
            }
            else{
                return 0;
            }
        }
        else{
            if(yerarchy.indexOf(astatus)>yerarchy.indexOf(bstatus)){
                return 1;
            }
            else{
                return -1;
            }
        }
    }
}
let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

// should throw an Error
//let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// should throw an Error
//task1.deadline = new Date(2005, '4', '20');

