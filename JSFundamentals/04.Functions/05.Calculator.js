function calculator(num1, num2, operator) {

    let result = 0;

    switch (operator){
        case '+': result = sumNums(num1, num2); break;
        case '-': result = subtractNums(num1, num2); break;
        case '*': result = multiplyNums(num1, num2); break;
        case '/': result = devideNums(num1, num2); break;
        default: break;
    }

    return result;

    function sumNums(operand1, operand2) {
        return operand1 + operand2;
    }

    function subtractNums(operand1, operand2) {
        return operand1-operand2;
    }

    function multiplyNums(operand1, operand2) {
        return operand1*operand2;
    }

    function devideNums(operand1, operand2) {
        return operand1/operand2;
    }
}