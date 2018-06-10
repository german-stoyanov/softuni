let nuke =  require('./armagedom').nuke;
let expect = require('chai').expect;

let $ = require('jquery');



describe("armagedon test",()=>{
    let targetHTML;
    beforeEach(() => {
        document.body.innerHTML = '<div id="target">' +
            '<div class="nested target">' +
            '<p>This is some text</p>' +
            '</div>' +
            '<div class="target">' +
            '<p>Empty div</p>' +
            '</div>' +
            '<div class="inside">' +
            '<span class="nested">Some more text</span>' +
            '<span class="target">Some more text</span>' +
            '</div>' +
            '</div>';

        targetHTML = $('#target');
    });

    describe("General tests", () => {
        it("should be a function", () => {
            expect(typeof nuke).to.equal('function');
        });
    });

    describe("Values tests", () => {
        it("should not change the html if the first selector is invalid", () => {
            let selectorOne = 'invalid';
            let selectorTwo = $('.inside');
            let oldHTML = targetHTML.html();
            nuke(selectorOne, selectorTwo);
            expect(targetHTML.html()).to.equal(oldHTML);
        });

        it("should not change the html if the second selector is invalid", () => {
            let selectorOne = $('.inside');
            let selectorTwo = 'invalid';
            let oldHTML = targetHTML.html();
            nuke(selectorOne, selectorTwo);
            expect(targetHTML.html()).to.equal(oldHTML);
        });

        it("should not change the html if both selectors are the same", () => {
            let selector = $('.inside');
            let oldHTML = targetHTML.html();
            nuke(selector, selector);
            expect(targetHTML.html()).to.equal(oldHTML);
        });

        it("should not change the html if there is nothing to delete", () => {
            let selectorOne = $('.nested');
            let selectorTwo = $('.inside');
            let oldHTML = targetHTML.html();
            nuke(selectorOne, selectorTwo);
            expect(targetHTML.html()).to.equal(oldHTML);
        });

        it("should work properly if both selectors are valid", () => {
            let selectorOne = $('.nested');
            let selectorTwo = $('.target');
            let oldHTML = targetHTML.html();
            nuke(selectorOne, selectorTwo);
            expect(targetHTML.html()).to.not.equal(oldHTML);
        });
    });
})