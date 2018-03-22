let expect = require('chai').expect;
let PaymentPackage = require('./PaymentPackage').PaymentPackage;

describe('tests',()=>{
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
       expect(Pp.VAT).to.equal(20)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(Pp.active).to.equal(true)
    })
    it('should have properties',()=>{
        expect(()=>new PaymentPackage('name',-1)).to.throw(Error)
    })
    it('should have properties',()=>{
        expect(()=>new PaymentPackage('name','opa')).to.throw(Error)
    })
    it('should have properties',()=>{
        expect(()=>new PaymentPackage('',1)).to.throw(Error)
    })
    it('should have properties',()=>{
        expect(()=>new PaymentPackage(1,2)).to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(()=>Pp.VAT=-1).to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(()=>Pp.VAT='o').to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(()=>Pp.active='trau').to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(()=>Pp.active='false').to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(()=>Pp.name=2).to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(()=>Pp.value=-1).to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.value = 12;
        expect(Pp.value).to.equal(12)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.value =0;
        expect(Pp.value).to.equal(0)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.name ='mara';
        expect(Pp.name).to.equal('mara')
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.VAT =0;
        expect(Pp.VAT).to.equal(0)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.active =true;
        expect(Pp.active).to.equal(true)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.active =false;
        expect(Pp.active).to.equal(false)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.active =false;
        expect(Pp.toString()).to.equal('Package: name (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2')
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);

        expect(Pp.toString()).to.equal('Package: name\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2')
    })
})