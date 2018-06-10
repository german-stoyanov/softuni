function solution (a,b) {
   let count = 0;
    let Index = 0;
    while(true){
        Index = b.indexOf(a);
        if(Index <0){
            break;
        }
        count++;
        b = b.substr(Index+1);
    }
    console.log(count)
}
solution('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')