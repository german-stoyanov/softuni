let mathEnforcer = require('./mathEnforcer').mathEnforcer;

let expect = require('chai').expect;
describe("Test mathEnforcer",()=>{
    it('Should return object',()=>{
        expect(typeof mathEnforcer).to.equal('object')
    })
    it('Add five should be a function',()=>{
        expect(typeof mathEnforcer.addFive).to.equal('function')
    })
    it('SubtractTen should be a function',()=>{
        expect(typeof mathEnforcer.subtractTen).to.equal('function')
    })
    it('Sum should be a function',()=>{
        expect(typeof mathEnforcer.sum).to.equal('function')
    })
    it('Should return undefined',()=>{
        expect(mathEnforcer.addFive('1')).to.equal(undefined)
    })
    it('Should return undefined',()=>{
        expect(mathEnforcer.subtractTen('1')).to.equal(undefined)
    })
    it('Should return undefined',()=>{
        expect(mathEnforcer.sum(1,'2')).to.equal(undefined)
    })
    it('Should return undefined',()=>{
        expect(mathEnforcer.addFive({lele:'opa'})).to.equal(undefined)
    })
    it('Should return undefined',()=>{
        expect(mathEnforcer.subtractTen({lele:'opa'})).to.equal(undefined)
    })
    it('Should return undefined',()=>{
        expect(mathEnforcer.sum([1,2],2)).to.equal(undefined)
    })
    it('Should work with negatives',()=>{
        expect(mathEnforcer.addFive(-1)).to.equal(4)
    })
    it('Should work with negatives',()=>{
        expect(mathEnforcer.subtractTen(-1)).to.equal(-11)
    })
    it('Should work with negatives',()=>{
        expect(mathEnforcer.sum(-1,-2)).to.equal(-3)
    })
    it('Should work with fractions',()=>{
        expect(mathEnforcer.addFive(-1.01)).to.be.closeTo(3.99,0.001)
    })
    it('Should work with fractions',()=>{
        expect(mathEnforcer.subtractTen(-1.01)).to.equal(-11.01,0.001)
    })
    it('Should work with fractions',()=>{
        expect(mathEnforcer.sum(-1.02,-2.89)).to.equal(-3.91,0.001)
    })
})