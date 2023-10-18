import '../Components/Guess.css'
import { useRef, useState } from 'react';

function GuessTheNumber() {
  const [value, setvalue] = useState(Math.floor(Math.random() * 10) + 1);
  const   para = useRef();
  const inp = useRef();
  function guessn(){ 
     if(parseInt(inp.current.value) === value){
      para.current.innerHTML="Congratulations! you win";
      para.current.style.color="green";
    }
    else if(parseInt(inp.current.value)<value){
      para.current.innerHTML="Too low!";
      para.current.style.color="red";
    }
    else if(parseInt(inp.current.value)>value){
      para.current.innerHTML="Too high!";
      para.current.style.color="red";
    }
  }
   function reset(){
    para.current.innerHTML="";
    setvalue(Math.floor(Math.random() * 10) + 1);
    inp.current.value="";
   }
  return (
    <div className=' pt-36 pb-32'>
     <div className="container-fluid">
      <div className="col-sm-6 mx-auto">
      <div className="col-sm-12 mx-auto">
      <h1 className='text-center'>Guess the Number</h1>
      </div>
      <div className="col-sm-4 mx-auto mt-4">
        <p className="mt-4 mx-auto" ref={para}>Enter a number:</p>
        <input type="number" class="form-control" className='mt-3 border' ref={inp}></input>
      </div>
      <div className="col-sm-4 mx-auto mt-4">
      <button type="button" class="btn btn-success btn-lg" onClick={guessn}>Guess</button>
        </div>
        <div className="col-sm-4 mx-auto mt-2">
        <button type="button" class="btn btn-danger btn-lg" onClick={reset}>Reset</button>
        </div>
      </div>
      </div>
     
     </div>
  );
}

export default GuessTheNumber;










