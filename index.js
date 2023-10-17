function GiveMeResult() {
    let firstOperand = Number(document.getElementById("firstOperand").value);
    let operator = document.getElementById("operators").value;
    let secondOperand = Number(document.getElementById("secondOperand").value);
  
    let resultSpan = document.getElementById("result");
    let resultNum = null;
  
    switch(operator) {    
        case ">":
            if(firstOperand > secondOperand) {
            resultSpan.innerHTML = "True";
            } else {
            resultSpan.innerHTML = "False";
            }
            break;
            
        case "<":
            if(firstOperand < secondOperand) {
            resultSpan.innerHTML = "True";
            } else {
            resultSpan.innerHTML = "False";
            }
            break;
        case "!=":
            if(firstOperand != secondOperand) {
            resultSpan.innerHTML = "True";
            } else {
            resultSpan.innerHTML = "False";
            }
            break;
        default:
            alert("No operator found!")
        }
  }
  
  let button = document.getElementById("button");
  button.addEventListener("click", GiveMeResult);