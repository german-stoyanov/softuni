class PaymentProcessor {
    constructor(obj){
        this.types = ["service", "product", "other"]
        this.precision = 2;
        this.payments = {};
        this.count = 0;
        this.balance = 0;
        if(obj) {
            if (obj.hasOwnProperty('types')) {
                this.types = obj['types'];

            }
            if (obj.hasOwnProperty('precision')) {
                this.precision = obj['precision'];
            }
        }
    }
    registerPayment(id, name, type, value){

        if((typeof id === "string")&&(id!=='')&&(typeof name === "string")&&(name!=='')&&((this.types).includes(type))&&(typeof value === "number")&&(!this.payments.hasOwnProperty(id))){
            //let value1 = Number(value.toFixed(this.precision));

            this.payments[id] = {
                name:name,
                type:type,
                value:value1
            }
            this.count++;
            this.balance+=value1;
        }
        else{
            throw new Error;
        }

    }
    deletePayment(id){
        if(this.payments.hasOwnProperty(id)){
            this.balance-=this.payments[id].value;
            delete this.payments[id]
            this.count--;

        }
        else{
            throw new Error;
        }
    }
    get(id){

        if(this.payments.hasOwnProperty(id)){

            return `Details about payment ID: ${id}
- Name: ${this.payments[id].name}
- Type: ${this.payments[id].type}
- Value: ${this.payments[id].value}`
        }
        else{
         throw new Error;
        }
    }
    setOptions(options){
        if (options.hasOwnProperty('types')) {

            this.types = options['types'];

        }
        if (options.hasOwnProperty('precision')) {
            this.precision = options['precision'];
        }
    }
    toString(){
        return `Summary:
- Payments: ${this.count}
- Balance: ${this.balance}`
    }

}
// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());

