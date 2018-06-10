function solution (a) {
    let first = Math.floor(a/12);
    let second = a%12;
    console.log(`${first}\'-${second}\"`)
}
solution(36)