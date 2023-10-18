import React, { useReducer } from 'react'

export default function Redux() {
 
    const intialState=0

    const reducer=(state, action)=>{
       switch(action){
        case "increment":
            return state+1;
       
       
        case "decrement":
            return state-1
        default:
            return state
        }
       
    }
  const [change, dispatch] =  useReducer(reducer, intialState)
  return (
    <div>
      
<p>{change}</p>
<button onClick={() => dispatch("increment")}>Increment</button>
    </div>
  )
}
