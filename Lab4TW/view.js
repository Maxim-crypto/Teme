class CalculatorView {
    constructor() {
      this.expressionElement = document.getElementById("expression");
      this.resultElement = document.getElementById("result");
      this.buttons = document.querySelectorAll(".btn");
    }
  
    render(state) {
      this.expressionElement.textContent = state.expression;
      this.resultElement.textContent = state.result;
    }
  }