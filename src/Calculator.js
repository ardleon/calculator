import React, {useState} from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

let log = [];
let operations = [];
function Calculator() {
  const[number, setNumber] = useState(false);
  const[operation, setOperation] = useState(null);
  const utils = {
    getLastOperation: () => log[log.length-1],
    isNumber: (number) => !isNaN(number)
  };  
  function onKeyboardClick(e){  
    switch(e.target.id){
      case 'clear':
        log = [];
        operations = [];
        setOperation(null);
        setNumber(false);
        break;
      case '/':  
      case '*':  
      case '+':  
      case '-':
        if (number){
          log.push(e.target.id);
        }
        break;
      default:
          log.push(e.target.id);
        break;
    }
    setOperation(log.toString().split(',').join(''));
    if (utils.isNumber(utils.getLastOperation())){
      setNumber(Math.round(eval(log.toString().split(',').join(''))));
    }else{
      if(number){
        operations.push(e.target.id);
        if (operations.length == 2){
          log = [number, e.target.id];
          operations = [e.target.id];
        }
        setOperation(log.toString().split(',').join(''));
      }
    }
  }
  return (
    <div id="Calculator" className="Container ParentSize VDirection">
      <Display operation={operation} number={number}/>
      <Keyboard onKeyboardClick={onKeyboardClick}/>
    </div>
  );
}

export default Calculator;
