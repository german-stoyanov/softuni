let rgbToHexColor = require('./rgb-to-hex').rgbToHexColor;
let expect = require('chai').expect;
describe('RGB To Hex Color',()=>{
    it("it should return #FF9EAA for (255, 158, 170)",()=>{
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    })
    it("it should return #0C0D0E for (12, 13, 14)",()=>{
        expect(rgbToHexColor(12,13,14)).to.equal('#0C0D0E');
    })
    it("it should return #000000 for (0,0,0)",()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    })
    it("it should return #FFFFFF for (255,255,255)",()=>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    })
    it("it should return undefined for (-1,5,18)",()=>{
        expect(rgbToHexColor(-1,5,18)).to.equal(undefined);
    })
    it("it should return undefined for (1,-5,18)",()=>{
        expect(rgbToHexColor(1,-5,18)).to.equal(undefined);
    })
    it("it should return undefined for (1,5,-18)",()=>{
        expect(rgbToHexColor(1,5,-18)).to.equal(undefined);
    })
    it("it should return undefined for (256,5,18)",()=>{
        expect(rgbToHexColor(256,5,18)).to.equal(undefined);
    })
    it("it should return undefined for (2,256,18)",()=>{
        expect(rgbToHexColor(2,256,18)).to.equal(undefined);
    })
    it("it should return undefined for (25,5,256)",()=>{
        expect(rgbToHexColor(25,5,256)).to.equal(undefined);
    })
    it("it should return undefined for (255,5.1,18)",()=>{
        expect(rgbToHexColor(255,5.1,18)).to.equal(undefined);
    })
    it("it should return undefined for (pesho,{gosho},[])",()=>{
        expect(rgbToHexColor('pesho',{name:'gosho'},[])).to.equal(undefined);
    })
})