function solution (input) {
    let regex = /[();,.\s]+/
    input.split(regex).filter(s => console.log(s))
}
solution('let sum = 4 * 4,b = "wow";')