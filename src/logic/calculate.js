
import operate from "./operate";


export default function calculate(obj, buttonName) {
  
  function isNumber(item) {
    return /[0-9]+/.test(item);
  }
  
  if(buttonName === 'AC'){
    return {
      total: null,
      next: null,
      operation: null
    }
  }
  
  if(isNumber(buttonName)){
    if(buttonName === '0' || obj.next === '0'){
      return {};
    }
    
    if(obj.operation){
      if(obj.next){
        return {next: obj.next + buttonName};
      }
      return {next: buttonName};
    }
    
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    
    return {
      next: buttonName,
      total: null,
    };
  }
  
  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }
  
  if(buttonName === '+/-'){
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }
  
  if(buttonName === '%'){
    if(obj.next && obj.operation){
      const result = operate(obj.total, obj.next, obj.operation);
      return {total: (result/100).toString()};
    }
    if(obj.next){
      return {next: (obj.next/100).toString()};
    }
    return {};
  }
  
  if(buttonName === '.'){
    if(obj.next){
      if(obj.next.includes('.')){
        return {};
      }
      return {next: obj.next + '.'};
      
    }
    return {next: '0.'};
  }
  
  
  if(obj.operation){
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }
  
  
  if (!obj.next) {
    return { operation: buttonName };
  }
  
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}