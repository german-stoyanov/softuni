let expect = require('chai').expect;
let StringBuilder = require('./string-builder').StringBuilder;

describe('stringBuilder test',()=>{
    it("the class should have property append in its prototype and it should be a function", () => {
        let stringbuilder = new StringBuilder();
        expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.true;
        expect(typeof stringbuilder.append).to.equal('function');
    });

    it("the class should have property prepend in its prototype and it should be a function", () => {
        let stringbuilder = new StringBuilder();
        expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.true;
        expect(typeof stringbuilder.prepend).to.equal('function');
    });

    it("the class should have property insertAt in its prototype and it should be a function", () => {
        let stringbuilder = new StringBuilder();
        expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.true;
        expect(typeof stringbuilder.insertAt).to.equal('function');
    });

    it("the class should have property remove in its prototype and it should be a function", () => {
        let stringbuilder = new StringBuilder();
        expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.true;
        expect(typeof stringbuilder.remove).to.equal('function');
    });
    it("the class should have property toString in its prototype and it should be a function", () => {
        let stringbuilder = new StringBuilder();
        expect(StringBuilder.prototype.hasOwnProperty('toString')).to.be.true;
        expect(typeof stringbuilder.toString).to.equal('function');
    });
    it("should be initialized with no arguments", () => {
        let stringbuilder = new StringBuilder();
        expect(stringbuilder._stringArray).to.eql([]);

    });
    it("should be initialized with arguments", () => {
        let stringbuilder = new StringBuilder('hello');
        expect(stringbuilder._stringArray).to.eql(['h','e','l','l','o']);

    });
    it("should throw error", () => {
        expect(()=>new StringBuilder(5)).to.throw('Argument must be string');
    });
    it("should throw error", () => {
        let stringbuilder = new StringBuilder('5')
        expect(()=>stringbuilder.append(5)).to.throw('Argument must be string');
    });
    it("should throw error", () => {
        let stringbuilder = new StringBuilder('5')
        expect(()=>stringbuilder.insertAt(5,4)).to.throw('Argument must be string');
    });
    it("should throw error", () => {
        let stringbuilder = new StringBuilder('5')
        expect(()=>stringbuilder.prepend(5)).to.throw('Argument must be string');
    });
    it("should work fine", () => {
        let stringbuilder = new StringBuilder('6')
        stringbuilder.prepend('5')
        expect(stringbuilder.toString()).to.equal('56');
    });
    it("should work fine", () => {
        let stringbuilder = new StringBuilder('6')
        stringbuilder.append('5')
        expect(stringbuilder.toString()).to.equal('65');
    });
    it("should work fine", () => {
        let stringbuilder = new StringBuilder('6')
        stringbuilder.append('5211212')
        stringbuilder.remove(0,7)
        expect(stringbuilder.toString()).to.equal('2');
    });
    it("should work fine", () => {
        let stringbuilder = new StringBuilder('6')
        stringbuilder.append('5211212')
        stringbuilder.remove(0,8)
        expect(stringbuilder.toString()).to.equal('');
    });
    it("should work fine", () => {
        let stringbuilder = new StringBuilder('6')
        stringbuilder.append('5')
        stringbuilder.insertAt('german',2)
        expect(stringbuilder._stringArray).to.eql(['6','5','g','e','r','m','a','n']);
    });
    it("should be initialized with no arguments", () => {
        let stringbuilder = new StringBuilder();
        stringbuilder.append('431')
        expect(stringbuilder._stringArray).to.eql(['4','3','1']);

    });
    it("should work fine", () => {
        let stringbuilder = new StringBuilder('6')
        stringbuilder.append('5211212')
        stringbuilder.remove(1,3)
        expect(stringbuilder.toString()).to.equal('61212');
    });
    it("should work fine", () => {
        let stringbuilder = new StringBuilder('6')

        expect(stringbuilder.toString()).to.equal('6');
    });
    it("should work fine", () => {
        let stringbuilder = new StringBuilder('')

        expect(stringbuilder.toString()).to.equal('');
    });
    it("should work fine", () => {
        let stringbuilder = new StringBuilder('6')
        stringbuilder.append('5211212')
        stringbuilder.remove(1,7)
        expect(stringbuilder.toString()).to.equal('6');
    });
    it("should throw error", () => {
        let stringbuilder = new StringBuilder('5')
        expect(()=>stringbuilder.append({lele:'opa'})).to.throw('Argument must be string');
    });

})