let expect = require('chai').expect;
let makeList = require('./list-add-left-right-clear').makeList;

describe('tests',()=>{
    let list;
    beforeEach(()=>{
        list = makeList();
    });
    it('should have properties',()=> {
        expect(typeof list.addLeft).to.equal('function')
    });
    it('should have properties',()=> {
        expect(typeof list.addRight).to.equal('function')
    });
    it('should have properties',()=> {
        expect(typeof list.clear).to.equal('function')
    });
    it('should have properties',()=> {
        expect(typeof list.toString).to.equal('function')
    })
    it('should work fine',()=> {
        list.addRight(1);
        list.addRight("two");
        expect(list.toString()).to.equal('1, two')
    })
    it('should work fine',()=> {
        list.addRight(1);
        list.addLeft("two");
        expect(list.toString()).to.equal('two, 1')
    })
    it('should work fine',()=> {
        list.addRight(1);
        list.addLeft("two");
        list.clear();
        list.addRight(1);
        list.addLeft("two");
        list.addLeft({obj:'val'})
        expect(list.toString()).to.equal('[object Object], two, 1')
    })
})