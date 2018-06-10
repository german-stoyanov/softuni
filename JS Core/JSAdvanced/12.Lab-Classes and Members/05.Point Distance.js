class Point{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    static distance(a,b){
        return Math.sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y))
    }
}
