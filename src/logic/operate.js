

export default function operate(numb1, numb2, operation){
  let number1 = parseFloat(numb1);
  let number2 = parseFloat(numb2);
  if(operation === "+"){
    return (number1 + number2).toString();
  }
  if(operation === "-"){
    return (number1 - number2).toString();
  }
  if(operation === "/"){
    return (number1 / number2).toString();
  }
  if(operation === "X"){
    return (number1 * number2).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}