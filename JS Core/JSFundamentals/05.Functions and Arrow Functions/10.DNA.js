function solution (input) {
    let bonds = ['A', 'T', 'C', 'G','T','T','A','G','G','G'];
    let numOfBonds = [0,2,4,2];
    let bonders = 0;
    for(let i=0;i<input;i++){
        let element1 = bonds[(i%5)*2];
        let element2 = bonds[(i%5)*2+1];
        bonders = numOfBonds[(i%4)];
        console.log('*'.repeat(2-bonders/2)+element1+'-'.repeat(bonders)+element2+'*'.repeat(2-bonders/2))
    }
}
solution(10)