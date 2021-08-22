class Calculator {
    constructor(previsousOperandTextElement, currentOperandTextElement){
        this.previsousOperandTextElement = previsousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear(){

    }

    delete(){

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandButton = document.querySelectorAll('[data-previous-operand]')
const currentOperandButton = document.querySelectorAll('[data-current-operand]')

