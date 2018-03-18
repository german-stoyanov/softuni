let createCalculator = require('./summator').createCalculator;
let expect = require('chai').expect;
describe('create calculator',()=>{
    let calc;
    beforeEach(()=>{
        calc = createCalculator();
    })
    it("Should return object",()=>{
        expect(typeof calc).to.equal("object")
    })
    it("Should have zero value when created",()=>{
        expect(calc.get()).to.equal(0)
    })
    it("Should add",()=>{
        calc.add(5);
        calc.add(3);
        expect(calc.get()).to.equal(8)
    })
    it("Should substract",()=>{
        calc.add(5);
        calc.subtract(3);
        expect(calc.get()).to.equal(2)
    })
    it("Should substract with fractions",()=>{
        calc.add(5);
        calc.subtract(3.01);
        expect(calc.get()).to.be.closeTo(1.99,0.0001)
    })
    it("Should work with negatives",()=>{
        calc.add(5);
        calc.subtract(-3);
        expect(calc.get()).to.equal(8)
    })
    it("Should not work with NaN",()=>{
        calc.add(5);
        calc.add("gogo");
        expect(calc.get()).to.be.NaN
    })
    it("Should not work with NaN",()=>{
        calc.add(5);
        calc.subtract("gogo");
        expect(calc.get()).to.be.NaN
    })
    it("Should not work with strings",()=>{
        calc.add('5');

        expect(calc.get()).to.equal(5)
    })
})