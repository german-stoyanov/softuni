function solution() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new TypeError('Error');
            }
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this.name = name;
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            if(this.dividend!==undefined){
                console.log(`${this.name} received ${this.salary+this.dividend} this month.`);
            }
            else{
                console.log(`${this.name} received ${this.salary} this month.`);
            }

        }
    }
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.');
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }
    }
return{
        Manager,
    Junior,
    Senior
}
}

let m1 = new Manager('plamen',48)
m1.collectSalary()