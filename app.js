function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, oper) {
    switch (oper) {
        case '+':
            result = add(a, b)
            return result;
        case '-':
            result = subtract(a, b)
            return result;
        case '*':
            result = multiply(a, b)
            return result;
        case '/':
            result = divide(a, b)
            return result;
    }
}

// console.log(operate(10, 5, '+'))