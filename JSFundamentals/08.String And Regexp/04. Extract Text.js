function solution (str) {
    let result = [];
    let start = 0;
    let end = 0;
    while(true){
        start = str.indexOf('(');
        end = str.indexOf(')');
        if(start<0||end<0||start>end){
            break;
        }
        result.push(str.substring(start+1,end));
        str = str.substr(end+1);
    }
    console.log(result.join(', '))
}
solution('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')