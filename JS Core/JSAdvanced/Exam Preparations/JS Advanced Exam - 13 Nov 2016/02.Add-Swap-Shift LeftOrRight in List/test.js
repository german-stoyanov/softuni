let createList = require('./add-swap-shift').createList;
let expect = require('chai').expect;

describe('Test',()=>{
    let list;
    beforeEach(()=>{
        list = createList();
    })
    it('should work',()=>{
        list.add(5);
        list.add('gogo');
        list.add(4)
        expect(list.toString()).to.equal('5, gogo, 4')
    })
    it('should work',()=>{
        list.add(5);
        list.add('gogo');
        list.add(4)
        list.swap(1,2)
        expect(list.toString()).to.equal('5, 4, gogo')
    })
    it('should work',()=>{
        list.add(5);
        list.add('gogo');
        list.add(4)
        list.add(3)
        list.shiftRight()
        expect(list.toString()).to.equal('3, 5, gogo, 4')
    })
    it('should work',()=>{
        list.add(5);
        list.add('gogo');
        list.add(4)
        list.add(3);
        list.shiftLeft()
        expect(list.toString()).to.equal('gogo, 4, 3, 5')
    })
    it('should work',()=>{
        list.add(5);
        list.add(3);
        list.add(4)
        expect(list.swap(2.1,1)).to.equal(false)
    })
    it('should work',()=>{
        list.add(5);
        list.add(3);
        list.add(4)
        list.swap(2.1,1)
        expect(list.toString()).to.equal('5, 3, 4')
    })
    it('should work',()=>{
        list.add(5);
        list.add(3);
        list.add(4)
        expect(list.swap(2,1.1)).to.equal(false)
    })
    it('should work',()=>{
        list.add(5);
        list.add(3);
        list.add(4)
        expect(list.swap(1,1)).to.equal(false)
        expect(list.toString()).to.equal('5, 3, 4')
    })
    it('should work',()=>{
        list.add(5);
        list.add(3);
        list.add(4)
        expect(list.swap(-1,1)).to.equal(false)
        expect(list.toString()).to.equal('5, 3, 4')
    })
    it('should work',()=>{
        list.add(5);
        list.add(3);
        list.add(4)
        expect(list.swap(1,-1)).to.equal(false)
        expect(list.toString()).to.equal('5, 3, 4')
    })
    it('should work',()=>{
        list.add(5);
        list.add(3);
        list.add(4)
        expect(list.swap(1,3)).to.equal(false)
        expect(list.toString()).to.equal('5, 3, 4')
    })
    it('should work',()=>{
        list.add(5);
        list.add(3);
        list.add(4)
        expect(list.swap(0,2)).to.equal(true)
        expect(list.toString()).to.equal('4, 3, 5')
    })
    it('should work',()=>{
        list.add(5);
        list.add(3);
        list.add(4)
        expect(list.swap(2,0)).to.equal(true)
        expect(list.toString()).to.equal('4, 3, 5')
    })
    it('should work',()=>{
        list.add(5);
        list.add(3);
        list.add(4)
        expect(list.swap(3,1)).to.equal(false)
        expect(list.toString()).to.equal('5, 3, 4')
    })
    it('should work',()=>{
        list.add(5);
        list.add(3);
        list.add(4)
        expect(list.swap(1,2)).to.equal(true)
    })
    it('should work',()=>{
        list.add(5);

        list.shiftRight()
        expect(list.toString()).to.equal('5')
    })
    it('should work',()=>{
        list.add(5);

        list.shiftLeft()
        expect(list.toString()).to.equal('5')
    })
    it('should work',()=>{
        list.add(5);
        list.add(3);
        list.add(4)
        list.swap(2.1,1)
        expect(list.toString()).to.equal('5, 3, 4')
    })
    it('should work',()=>{

        expect(list.toString()).to.equal('')
    })
})