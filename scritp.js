class Calculator {
    constructor(previsousOperandTextElement, currentOperandTextElement){
        this.previsousOperandTextElement = previsousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear(){

        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandButton = document.querySelectorAll('[data-previous-operand]')
const currentOperandButton = document.querySelectorAll('[data-current-operand]')


const Calculator = new Calculator(previsousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener(button.innerText)
    Calculator.updateDisplay()
})