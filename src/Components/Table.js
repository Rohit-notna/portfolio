import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Table() {


 const location = useLocation();
     const {state} = location
     console.log(state);
    
 const    Navigate = useNavigate();
 
const HandleData=()=>{
    Navigate("/table")
}

  return (
    <div className='pt-32 pb-80'>
      <div className="container-fluid">
      <div className="container-fluid mx-auto">
        <div className="col-md-12 col-sm-12 col-12">
           <h1 style={{textAlign:'center'}}>Information</h1></div>
       
      </div>
      <div className="container-fluid mx-auto border">
       <div className="col-md-12 " >
       <table class="table table-bordered table-dark bg-dark">
        <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Language</th>
            <th>Password</th>
            <th>StrongPassword</th>
        </tr>
        {state.map((user, index) => (
            <tr style={{ border: '1px solid black', }} key={index}>
              <th style={{ border: '1px solid black' }}>{index + 1}</th>
              <th style={{ border: '1px solid black' }}>{user.select}{user.name}</th>
              <th style={{ border: '1px solid black' }}>{user.email}</th>
              <th style={{ border: '1px solid black' }}>{user.gender}</th>
              <th style={{ border: '1px solid black' }}>{user.checkbox.join(' ')}</th>
              <th style={{ border: '1px solid black' }}>{user.password}</th>
              <th style={{ border: '1px solid black' }}>{user.strongpassword} </th>
              <th style={{ border: '1px solid black' }} >Edit </th>
              <th style={{ border: '1px solid black' }} >Delete</th>        
            </tr>))}
      </table>
      <div className="container-fluid">
        <div className="col-md-12 text-center">
        <button style={{textAlign:'center'}} className='border px-2 py-1 bg-black text-white w-1/12 rounded-lg' onClick={HandleData}>Add </button>
        </div>
      </div>
       </div>
      </div>
      </div>
    </div>
  )
}