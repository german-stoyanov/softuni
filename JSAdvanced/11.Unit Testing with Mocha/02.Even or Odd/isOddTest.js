let isOddOrEven = require('./isOdd').isOddOrEven;
let expect = require('chai').expect;
describe("Test isOddOrEven",()=>{
    it("Should be a function",()=>{
        expect(typeof isOddOrEven).to.equal('function');
    })
    it("Should return string",()=>{
        expect(typeof isOddOrEven('2')).to.equal('string');
    })
    it("Should return undefined for numbers",()=>{
        expect(isOddOrEven(2)).to.equal(undefined);
    })
    it("Should return undefined for objects",()=>{
        expect(isOddOrEven({lele:'opa'})).to.equal(undefined);
    })
    it("Should return even for even",()=>{
        expect(isOddOrEven('even')).to.equal('even');
    })
    it("Should return odd for odd",()=>{
        expect(isOddOrEven('odd')).to.equal('odd');
    })
})