class CalculatorModel {
    constructor() {
      this.clear();
    }
  
    clear() {
      this.operand1 = "";
      this.operand2 = "";
      this.operator = "";
      this.displayValue = "0";
      this.expression = "0";
      this.result = "0";
      this.error = false;
    }
  
    inputNumber(number) {
      if (this.error) {
        this.clear();
      }
  
      if (!this.operator) {
        this.operand1 += number;
        this.displayValue = this.operand1;
        this.expression = this.operand1;
      } else {
        this.operand2 += number;
        this.displayValue = this.operand2;
        this.expression = `${this.operand1} ${this.operator} ${this.operand2}`;
      }
    }
  
    inputOperator(operator) {
      if (this.error) {
        return;
      }
  
      if (this.operand1 === "") {
        return;
      }
  
      if (this.operator && this.operand2 !== "") {
        this.calculate();
        if (this.error) return;
      }
  
      this.operator = operator;
      this.expression = `${this.operand1} ${this.operator}`;
    }
  
    calculate() {
      if (
        this.operand1 === "" ||
        this.operator === "" ||
        this.operand2 === ""
      ) {
        return;
      }
  
      const num1 = parseFloat(this.operand1);
      const num2 = parseFloat(this.operand2);
      let calcResult;
  
      switch (this.operator) {
        case "+":
          calcResult = num1 + num2;
          break;
        case "-":
          calcResult = num1 - num2;
          break;
        case "*":
          calcResult = num1 * num2;
          break;
        case "/":
          if (num2 === 0) {
            this.result = "Eroare";
            this.expression = "Împărțire la 0";
            this.displayValue = "Eroare";
            this.error = true;
            return;
          }
          calcResult = num1 / num2;
          break;
        default:
          return;
      }
  
      this.result = calcResult.toString();
      this.expression = `${this.operand1} ${this.operator} ${this.operand2} =`;
      this.displayValue = this.result;
  
      this.operand1 = this.result;
      this.operand2 = "";
      this.operator = "";
    }
  
    getState() {
      return {
        expression: this.expression,
        result: this.displayValue
      };
    }
  }