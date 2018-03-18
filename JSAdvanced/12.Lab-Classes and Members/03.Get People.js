function getPeople() {
    class Person{
        constructor(name,secondName,age,email){
            this.firstName = name
            this.lastName = secondName
            this.age = age
            this.email = email
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    let arr = [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com')
    ]
    return arr
}