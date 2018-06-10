function solution(input){
    let x = input[0];
    let y = input[1];
    let xmin = input[2];
    let xmax = input[3];
    let ymin = input[4];
    let ymax = input[5];
    isin = false;
    if(x>=xmin&&x<=xmax&&y>=ymin&&y<=ymax){
        isin = true;
    }
    console.log(isin ? "inside" : "outside")

}