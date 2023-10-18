import React from 'react'
import { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Calc.css'


function Calculator() {
  const [value, setvalue] = useState("");
  const [value1, setvalue1] = useState("");
  const [operator, setoperator] = useState(null);
  const [flag, newflag] = useState(true);
  const [value2, setvalue2] = useState(0);
 
 const equal = useRef(); 
 const one = useRef();
 const two = useRef();
 const three = useRef();
 const four = useRef();
 const five = useRef();
 const six = useRef();
 const seven = useRef();
 const eight = useRef();
 const nine = useRef();
 const zero = useRef();
 const plus = useRef();
 const minus = useRef();
 const divide = useRef();
 const multiply = useRef();
 const input = useRef();
 const module = useRef();
 const dot = useRef();

 

function calc(ref){
   if(flag){
   setvalue(value + ref.current.textContent);
   input.current.value=value + ref.current.textContent;
}
else{
  setvalue1(value1+ ref.current.textContent);
  input.current.value=value1 + ref.current.textContent;
}
}

function op(ref){
    setoperator(ref.current.textContent);
    input.current.value=ref.current.textContent;
    newflag(false)
 }
 function total() {
  if (operator === '*'){  
    if(value2===0){
      setvalue2(parseInt(value2) + parseInt(value) * parseInt(value1))
      input.current.value = parseInt(value2) + parseInt(value) * parseInt(value1);
     totalshort()
    }
    else if (value2!==0){
      setvalue2(parseInt(value2)  * parseInt(value1))
      input.current.value = parseInt(value2) * parseInt(value1);
     totalshort1()
    }
     } 

     else if (operator === '+') {  
      if(value2===0){
        setvalue2(parseInt(value2) + parseInt(value) + parseInt(value1))
        input.current.value = parseInt(value2) + parseInt(value) + parseInt(value1);
        totalshort()
      }
      else if (value2!==0){
        setvalue2(parseInt(value2)  + parseInt(value1))
        input.current.value = parseInt(value2) + parseInt(value1);
        totalshort1()}
       } 

      else if (operator === '-') {  
        if(value2===0){
          setvalue2(parseInt(value2) + parseInt(value) - parseInt(value1))
          input.current.value = parseInt(value2) + parseInt(value) - parseInt(value1);
          totalshort()
        }
        else if (value2!==0){
          setvalue2(parseInt(value2)  - parseInt(value1))
          input.current.value = parseInt(value2) - parseInt(value1);
          totalshort1()} 
        } 

       else if (operator === '/') {  
          if(value2===0){
            setvalue2(parseInt(value2) + parseInt(value) / parseInt(value1))
            input.current.value = parseInt(value2) + parseInt(value) / parseInt(value1);
            totalshort()
          }
          else if (value2!==0){
            setvalue2(parseInt(value2)  / parseInt(value1))
            input.current.value = parseInt(value2) / parseInt(value1);
            totalshort1()} 
          } 

        else  if (operator === '%') {  
            if(value2===0){
              setvalue2(parseInt(value2) + parseInt(value) % parseInt(value1))
              input.current.value = parseInt(value2) + parseInt(value) % parseInt(value1);
              totalshort()
            }
            else if (value2!==0){
              setvalue2(parseInt(value2)  % parseInt(value1))
              input.current.value = parseInt(value2) % parseInt(value1);
              totalshort1()} } 
}

function allclear(){
   input.current.value="0";
  setvalue("");
  setvalue1("");
  setoperator("");
  newflag(true);
  setvalue2(0);
  }
function slice(){
  if(flag){
      setvalue(value.slice(0, -1))
      input.current.value=value.slice(0, -1)
  }
  else if(!flag){
    setvalue1(value1.slice(0, -1))
    input.current.value=value1.slice(0, -1)
  }
}
function totalshort(){
  setvalue(1);
  setvalue1("");
  newflag(true);
  setoperator(null)
}
function totalshort1(){
  setvalue('');
  setvalue1("");
  newflag(true);
  setoperator(null)
}

  return (
    <div className='pt-28 pb-24'>
    <div className="calc col-sm-3 border mx-auto ">
  <input type="text"  ref={input} class="calculator-screen z-depth-1"/>
  <button className="buttonupperleft" onClick={()=>allclear()}>AC</button>
  <button className="buttonupperleft" onClick={()=>slice()}>C</button>
  <button className="buttonupperleft" ref={module} onClick={()=>op(module)}>%</button>
  <button className="buttonrightside" ref={divide} onClick={()=>op(divide)}>/</button><br></br>
  
  
  <button className="buttonleft" ref={seven} onClick={()=>calc(seven)}>7</button>
  <button className="buttonleft" ref={eight} onClick={()=>calc(eight)}>8</button>
  <button className="buttonleft" ref={nine} onClick={()=>calc(nine)}>9</button>
  <button className="buttonrightside" ref={multiply} onClick={()=>op(multiply)}>*</button><br></br>
  <button className="buttonleft" ref={four} onClick={()=>calc(four)}>4</button>
  <button className="buttonleft" ref={five} onClick={()=>calc(five)}>5</button>
  <button className="buttonleft" ref={six} onClick={()=>calc(six)}>6</button>
  <button className="buttonrightside" ref={minus} onClick={()=>op(minus)}>-</button><br></br>
  <button className="buttonleft" ref={one} onClick={()=>calc(one)}>1</button>
  <button className="buttonleft" ref={two} onClick={()=>calc(two)}>2</button>
  <button className="buttonleft" ref={three} onClick={()=>calc(three)}>3</button>
  <button className="buttonrightside" ref={plus} onClick={()=>op(plus)} >+</button><br></br>
  <button className="buttonunique" ref={zero} onClick={()=>calc(zero)}  >0</button>
  <button className="buttonleft" ref={dot} onClick={()=>calc(dot)}>.</button>
  <button className="buttonrightside" ref={equal} onClick={total}>=</button><br></br>
    </div></div>
  );
}

export default Calculator;





//<button className="buttonleft" ref={four} onClick={()=>calc(four)}>4</button>

  //<button className="buttonleft" ref={four} onClick={calc(four)}>4</button>