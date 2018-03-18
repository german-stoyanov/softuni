let result = (function () {
    let Suits = {
        SPADES:'♠',
        HEARTS:'♥',
        DIAMONDS:'♦',
        CLUBS:'♣'
    };
    const validSuits = ["\u2660", "\u2665", "\u2666", "\u2663"];
    class Card{

        constructor(face,suit){
            this.face = face;
            this.suit = suit;
        }
     get suit() {
         return this._suit;
     }

       set suit(value) {
           if (validSuits.includes(value)) {
               this._suit = value
           }
           else {
               throw new Error('Invalid Suit')
           }

       }
       get face() {
            return this._face;
        }

       set face(value) {
            let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
            if(faces.includes(value)){
                this._face = value
            }
            else {
                throw new Error('Invalid Face')
            }

        }

        toString(){
            return this._face+this._suit
        }
    }
    return{
        Suits,Card
    }
})()


