function solution(face,suit) {
    let faces = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['S','H','D','C'];
    if(!faces.includes(face)){
        throw new Error ('The face is invalid')
    }
    if(!suits.includes(suit)){
        throw new Error ('The face is invalid')
    }
    return {
        face:face,
        suit:suit,
        toString:function () {
            let suitToChar = {
                'S': "\u2660", // ♠
                'H': "\u2665", // ♥
                'D': "\u2666", // ♦
                'C': "\u2663", // ♣
            };
            return this.face + suitToChar[this.suit];

        }
    }
}

console.log(solution('A', 'S')+'');