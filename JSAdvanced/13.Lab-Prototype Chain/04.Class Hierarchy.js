function solution () {


    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new TypeError('error')
            }
        }

        toString() {
            return this.constructor.name;
        }
    }

    class Circle extends Figure {
        constructor(r) {
            super();
            this.radius = r
        }

        get area() {
            return Math.PI * this.radius * this.radius
        }

        toString() {
            return `${super.toString()} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width
            this.height = height
        }

        get area() {
            return this.width * this.height
        }

        toString() {
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`
        }
    }
    return{
        Figure,
        Rectangle,
        Circle
    }
}
let r1 = new Rectangle(3,4)
console.log(r1.area)
let c1 = new Circle(5);
console.log(c1.area);
console.log(c1+'')