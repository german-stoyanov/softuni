let Console = require('./specialConsole').Console;
let expect = require('chai').expect;
describe("Console Test",()=>{
    it("Should work fine",()=>{
        expect(Console.writeLine('super')).to.equal('super');
    })
    it("Should work fine",()=>{
        expect(Console.writeLine({super:'muper'})).to.equal('{"super":"muper"}');
    })
    it("Should throw error",()=>{
        expect(()=>Console.writeLine({obj: 'error'}, 'It\'s not right!')).to.throw(TypeError);
    })
    it("Should throw error",()=>{
        expect(()=>Console.writeLine('super {0} muper {1}', 'ne e super')).to.throw(RangeError);
    })
    it("Should throw error",()=>{
        expect(()=>Console.writeLine('super {0} muper {21}', 'ne e super','muper')).to.throw(RangeError);
    })

    it("Should throw error",()=>{
        expect(()=>Console.writeLine('super {0} muper {1}', 'ne e super','muper','super')).to.throw(RangeError);
    })
    it("Should work fine",()=>{
        expect(Console.writeLine('super {0} muper {1}', 'ne e super','muper')).to.equal('super ne e super muper muper');
    })
    it("Should work fine",()=>{
        expect(Console.writeLine('super {0} muper {1} {2} {3} {4} {5} {6} {7} {8} {9} {10}', 'ne e super','muper','2','3','4','5','6','7','8','9','10')).to.equal('super ne e super muper muper 2 3 4 5 6 7 8 9 10');
    })
})