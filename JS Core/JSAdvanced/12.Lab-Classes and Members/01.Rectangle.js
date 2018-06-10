class Rectangle{
    constructor(width,height,color){
        this.height = height;
        this.width = width;
        this.color = color
    }

    calcArea(){
        return this.width*this.height
    }
}
let rect = new Rectangle(2,3,'blue');
console.log(rect.width)
