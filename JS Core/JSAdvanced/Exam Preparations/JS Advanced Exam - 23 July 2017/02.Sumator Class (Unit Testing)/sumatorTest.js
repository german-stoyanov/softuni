let expect = require('chai').expect;
let Sumator = require('./sumator').Sumator;

describe("sumator test",()=>{

    it("should be empty",()=>{
        let Summator = new Sumator();
        expect(Summator.data.length).to.equal(0)
    })
    it("the class should have property add in its prototype and it should be a function", () => {
        let Summator = new Sumator();
        expect(Sumator.prototype.hasOwnProperty('add')).to.be.true;
        expect(typeof Summator.add).to.equal('function');
    });

    it("the class should have property sumNums in its prototype and it should be a function", () => {
        let Summator = new Sumator();
        expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.true;
        expect(typeof Summator.sumNums).to.equal('function');
    });

   it("the class should have property removeByFilter in its prototype and it should be a function", () => {
        let Summator = new Sumator();
        expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.true;
        expect(typeof Summator.removeByFilter).to.equal('function');
    });

    it("the class should have property toString in its prototype and it should be a function", () => {
        let Summator = new Sumator();
        expect(Sumator.prototype.hasOwnProperty('toString')).to.be.true;
        expect(typeof Summator.toString).to.equal('function');
    });
    it("should add fine",()=>{
        let Summator = new Sumator();
        Summator.add(5);
        Summator.add([2,3]);
        Summator.add({lele:'opa'});
        Summator.add('opa')
        expect(Summator.data.length).to.equal(4)
    })
    it("should sum fine",()=>{
        let Summator = new Sumator();
        Summator.add(5);
        Summator.add([2,3]);
        Summator.add({lele:'opa'});
        Summator.add('opa')
        expect(Summator.sumNums()).to.equal(5)
    })
    it("should sum fine",()=>{
        let Summator = new Sumator();
        Summator.add(5.11);
        Summator.add([2,3]);
        Summator.add({lele:'opa'});
        Summator.add(-2)
        expect(Summator.sumNums()).to.be.closeTo(3.11,0.001)
    })
    it("should sum fine with no numbers",()=>{
        let Summator = new Sumator();
        Summator.add('5.5');
        Summator.add([2,3]);
        Summator.add({lele:'opa'});
        Summator.add('opa')
        expect(Summator.sumNums()).to.equal(0)
    })
    it("should remove properly",()=>{
        let Summator = new Sumator();
        Summator.add(5);
        Summator.add(2);
        Summator.add(3);
        Summator.add(4)
        Summator.removeByFilter(x => x % 2 === 0);
        let expectedarray = [5,3];
        expect(Summator.data).to.eql(expectedarray)
    })
    it("should be empty",()=>{
        let Summator = new Sumator();
        expect(Summator.toString()).to.equal('(empty)')
    })
    it("should stringify fine",()=>{
        let Summator = new Sumator();
        Summator.add(5)
        Summator.add(7)
        expect(Summator.toString()).to.equal('5, 7')
    })
    it("should stringify fine",()=>{
        let Summator = new Sumator();
        Summator.add({lele:'opa'})
        console.log(Summator.toString())
        expect(Summator.toString()).to.equal('[object Object]')
    })

})