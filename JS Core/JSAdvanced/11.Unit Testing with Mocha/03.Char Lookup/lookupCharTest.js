let expect = require('chai').expect;
let lookupChar =  require('./lookupChar').lookupChar;
describe("Test lookupChar",()=>{
    it("should be a function",()=>{
        expect(typeof lookupChar).to.equal('function')
    })
    it("should return undefined",()=>{
        expect(lookupChar('gogo','a')).to.equal(undefined)
    })
    it("should return undefined",()=>{
        expect(lookupChar(2,3)).to.equal(undefined)
    })
    it("should return undefined",()=>{
        expect(lookupChar({lele:'opa'},3)).to.equal(undefined)
    })
    it("should return incorrect index.",()=>{
        expect(lookupChar('gogo',4)).to.equal('Incorrect index')
    })
    it("should return undefined when the second parameter is not an integer number", () => {
        expect(lookupChar('unitTesting!', 3.1415)).to.equal(undefined);
    });
    it("should return incorrect index.",()=>{
        expect(lookupChar('gogo',-1)).to.equal('Incorrect index')
    })
    it("should work with valid ingexes",()=>{
        expect(lookupChar('gogo',1)).to.equal('o')
    })
})