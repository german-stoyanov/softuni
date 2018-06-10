let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let sharedObject =  require('./shared-object').sharedObject;
let $ = require('jquery')

document.body.innerHTML =
    `<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>
</body>`;

describe("Shared object Tests",()=>{
    it('Test name initial Value', function () {
        expect(sharedObject.name).to.be.null;
    });
    it('Test income initial Value', function () {
        expect(sharedObject.income).to.be.null;
    });
    it('Test changeName() with empty string', function () {
        sharedObject.changeName('');
        expect(sharedObject.name).to.be.null;
    });

    it('Test changeName() with valid string object Prop', function () {
        sharedObject.changeName('TsolOFF');
        expect(sharedObject.name).to.be.equal('TsolOFF');
    });

    it('Test changeName() with valid string NAME Field Value', function () {
        sharedObject.changeName('Petar');
        let nameField = $('#name')
        expect(nameField.val()).to.be.equal('Petar');
    });
    it('Test changeIncome() with floatng point Number', function () {
        sharedObject.changeIncome(5.5);
        expect(sharedObject.income).to.be.null;
    });

    it('Test changeIncome() with Negative Number', function () {
        sharedObject.changeIncome(-5);
        expect(sharedObject.income).to.be.null;
    });

    it('Test changeIncome() with Number Zero ', function () {
        sharedObject.changeIncome(0);
        expect(sharedObject.income).to.be.null;
    });

    it('Test changeIncome() with a valid Number', function () {
        sharedObject.changeIncome(10);
        expect(sharedObject.income).to.be.equal(10);
    });

    it('Test changeIncome() with a valid Number INCOME Field Value', function () {
        sharedObject.changeIncome(20);
        let incomeField = $('#income')
        expect(incomeField.val()).to.be.equal('20');
    });
    it('Test updateName() with a valid string', function () {
        let nameField = $('#name').val('Tsolov');;
        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal('Tsolov');
    });

    it('Test updateName() with an empty string', function () {
        sharedObject.changeName('Ivan')
        let nameField = $('#name').val('');;
        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal('Ivan');
    });
    it('Test updateIncome() with a valid number', function () {
        let incomeField = $('#income').val('5');;
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(5);
    });

    it('Test updateIncome() with a negative number', function () {
        sharedObject.changeIncome(3);
        let incomeField = $('#income').val('-8');;
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(3);
    });

    it('Test updateIncome() with ZERO', function () {
        sharedObject.changeIncome(3);
        let incomeField = $('#income').val('0');;
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(3);
    });

    it('Test updateIncome() with floating point', function () {
        sharedObject.changeIncome(3);
        let incomeField = $('#income').val("3.5");;
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(3);
    });

    it('Test updateIncome() with a string', function () {
        sharedObject.changeIncome(3);
        let incomeField = $('#income').val("Ivan");;
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(3);
    });

})