let expect = require('chai').expect;
let list = require('./add-delete');
describe('test',()=>{
    let mylist;
    beforeEach(()=>{
        mylist = list();
    })
    it('should',()=>{
        mylist.add(5);
        expect(mylist.toString()).to.equal('5')
    })
    it('should',()=>{
        mylist.add(5);
        expect(mylist.toString()).to.equal('5')
    })
    it('should',()=>{
        mylist.add(5);
        mylist.delete(0)
        expect(mylist.toString()).to.equal('')
    })
    it('should',()=>{
        mylist.add(5);
        mylist.delete(3.14)
        expect(mylist.toString()).to.equal('5')
    })
    it('should',()=>{
        mylist.add(5);
        expect(mylist.delete(3.14)).to.equal(undefined)
    })
    it('should',()=>{
        expect(mylist.delete(1)).to.equal(undefined)
    })
    it('should',()=>{
        mylist.add(5);
        mylist.add(4);
        expect(mylist.delete(2)).to.equal(undefined)
    })
    it('should',()=>{
        mylist.add(5);
        mylist.add(4);
        expect(mylist.delete(-1)).to.equal(undefined)
    })
    it('should',()=>{
        mylist.add(5);
        mylist.add(4);
        mylist.delete(-1)
        expect(mylist.toString()).to.equal('5, 4')
    })
})
