function solution (input= []) {
    let newArr = input.filter((e,i)=>i%2===0).join(' ');
    console.log(newArr)
}
solution([10,20,20]);