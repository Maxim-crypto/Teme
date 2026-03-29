class CalculatorController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.init();
    }
  
    init() {
      this.view.render(this.model.getState());
  
      this.view.buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const action = button.dataset.action;
          const value = button.dataset.value;
  
          switch (action) {
            case "number":
              this.model.inputNumber(value);
              break;
            case "operator":
              this.model.inputOperator(value);
              break;
            case "equals":
              this.model.calculate();
              break;
            case "clear":
              this.model.clear();
              break;
          }
  
          this.view.render(this.model.getState());
        });
      });
    }
  }
  
  const model = new CalculatorModel();
  const view = new CalculatorView();
  const controller = new CalculatorController(model, view);