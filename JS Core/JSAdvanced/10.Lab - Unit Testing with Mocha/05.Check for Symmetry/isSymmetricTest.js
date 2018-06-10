let isSymmetric = require('./isSymmetric.js').isSymmetric;
let expect = require('chai').expect;
describe("Check Symmetry",()=>{
    describe("General Tests",()=>{
        it("Should be a function",()=>{
            expect(typeof isSymmetric).to.equal('function');
        })
    })
    describe("Value Tests",()=>{
        it("it should return true for [1,1,2,2,1,1]",()=>{
            expect(isSymmetric([1,1,2,2,1,1])).to.equal(true);
        })
        it("it should return false for [1,1,2,3,1,1]",()=>{
            expect(isSymmetric([1,1,2,3,1,1])).to.equal(false);
        })
        it("it should return true for [1,1,2,1,1]",()=>{
            expect(isSymmetric([1,1,2,1,1])).to.equal(true);
        })
        it("it should return false for [1,2,3,1,1]",()=>{
            expect(isSymmetric([1,2,3,1,1])).to.equal(false);
        })
        it("it should return false for [1,2]",()=>{
            expect(isSymmetric([1,2])).to.equal(false);
        })
        it("it should return true for [1]",()=>{
            expect(isSymmetric([1])).to.equal(true);
        })
        it("it should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5] ",()=>{
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5] )).to.equal(true);
        })
        it("it should return false for [5,'hi',{a:X},new Date(),{a:5},'hi',5] ",()=>{
            expect(isSymmetric([5,'hi',{a:'X'},new Date(),{a:5},'hi',5] )).to.equal(false);
        })
        it("it should return false for 1,2,3",()=>{
            expect(isSymmetric(1,2,3)).to.equal(false);
        })
    })
})