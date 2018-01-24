function solution (input) {
    let year = input[2];
    let month = input[1];
    let day = input[0];
    let date = new Date(year,month-1,0);
    let days = date.getDate();
    console.log(days);
}