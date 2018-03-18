let result = (function() {

    class Textbox {
        constructor(selector, regex) {
            this._elements = $(selector);
            this.value = $(this._elements[0]).val();
            this._invalidSymbols = regex;
            this._elements.on('input', (event) => {
                this.value = $(event.target).val();
            });
        }

        get elements() {
            return this._elements;
        }

        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;
            for (let element of this.elements) {
                $(element).val(value);
            }
        }
        isValid() {
            return !this._invalidSymbols.test(this.value);
        }
    }

    class Form {
        constructor(){
            this._element = $('<div class="form"></div>')
            let args = arguments;
            for (let argument of args) {
                if (!argument instanceof Textbox) {
                    throw new Error('The parameter is not a instance of Texbox!')
                }
            }
            this._textboxes = args;
            for (let textbox of this._textboxes) {
                for (let element of textbox._elements) {
                    this._element.append($(element));
                }
            }
        }
        submit() {
            let isAllValid = true;

            for (let textbox of this._textboxes) {
                if (textbox.isValid()) {
                    for (let element of textbox._elements) {
                        $(element).css('border', '2px solid green');
                    }
                } else {
                    for (let element of textbox._elements) {
                        $(element).css('border', '2px solid red');
                    }

                    isAllValid = false;
                }
            }

            return isAllValid;
        }
        attach(selector) {
            $(selector).append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
console.log(password)
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");


