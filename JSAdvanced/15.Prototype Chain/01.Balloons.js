function solution () {
    class Balloon{
        constructor(color, gasWeight){
            this.color = color;
            this.gasWeight = gasWeight
        }
    }
    class PartyBalloon extends Balloon{
        get ribbon() {
            return this._ribbon;
        }
        constructor(color,gasWeight,ribbonColor,ribbonLength){
            super(color,gasWeight)
            this._ribbon = {color:ribbonColor,length:ribbonLength}
        }
    }
    class BirthdayBalloon extends PartyBalloon{
        get text() {
            return this._text;
        }
        constructor(color,gasWeight,ribbonColor,ribbonLength,text) {
            super(color, gasWeight, ribbonColor, ribbonLength)
            this._text = text;
        }
    }
    return{
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}
