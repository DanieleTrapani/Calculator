previousValue = ''
currentValue = ''
currentOperator = ''

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
    a = a * 1
    b = b * 1
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

const lastOperation = document.getElementById("lastOperation")
const currentOperation = document.getElementById('currentOperation')
const buttons = document.querySelectorAll('button')
// buttons.forEach(button => button.addEventListener('click', () => console.log(button)))
buttons.forEach(button => button.addEventListener('click', () => compute(button)))

//on click if num add to current screen, if operator store operator, if equals computer
function compute(button) {
    // if (button.classList.contains('num')) {
    //     console.log("hello")
    // }
    // console.log(button.classList[1])
    switch (button.classList[1]) {
        case 'num':
            currentValue += button.textContent;
            currentOperation.textContent = currentValue
            break;
        case 'point':
            if (currentValue.includes('.')) {
                break;
            }
            else {
                currentValue += '.'
                currentOperation.textContent = currentValue
                break;
            }
        case 'operator':
            currentOperator = button.textContent
            lastOperation.textContent = currentValue + ' ' + currentOperator
            currentOperation.textContent = ''
            previousValue = currentValue;
            currentValue = ''
            break;
        case 'equals':
            result = operate(previousValue, currentValue, currentOperator)
            lastOperation.textContent = ''
            currentOperation.textContent = result
    }
}