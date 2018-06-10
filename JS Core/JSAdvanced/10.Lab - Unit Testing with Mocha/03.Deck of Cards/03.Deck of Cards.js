function solution (cards) {
    let result = []
    for(let card of cards) {
        let suit = card[card.length - 1];
        let face = card.substring(0, card.length - 1)
        try {
            result.push(makeCard(face, suit).toString())
        }
        catch (err) {
            console.log(`Invalid card: ${card}`);
            return false
        }
    }
    function makeCard(face,suit) {
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
    console.log(result.join(' '))
    return true
}

console.log(solution(['AS', '10D', 'KH', '2C']));