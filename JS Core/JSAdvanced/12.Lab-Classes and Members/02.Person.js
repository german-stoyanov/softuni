
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


