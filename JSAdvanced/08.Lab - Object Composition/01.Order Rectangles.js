function solution(rectangles){
    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function(other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        };
        return rect;
    }
    let arr = []
    rectangles.forEach(rectangle=>{
        arr.push(createRect(rectangle[0],rectangle[1]))
    })
    return arr.sort((a,b)=>a.compareTo(b))
}

console.log(solution([[1, 2], [2, 1], [10, 20]]));



