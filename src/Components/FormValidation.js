import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import {useNavigate } from 'react-router-dom';
import Table from '../Components/Table';



export default function FormValidation() {

  const schema = yup.object().shape({
    select: yup.string().required('Select One'),
    name: yup.string().min(4).max(15).required('Name Field Is Empty'),
    gender: yup.string().required('Please choose one'),
    checkbox: yup.array().min(1, 'Please select at least one checkbox'),
    email: yup.string().email().required('Email Field Is Empty'),
    password: yup.string().min(8, 'Enter Mininmum 8 Letters').max(15).matches(/[a-z]/, 'Password Must Contain At Least One Lowercase Letter')
      .matches(/[A-Z]/, 'Password Must Contain At Least One Uppercase Letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character').required('Password Field Is Empty'),
    strongpassword: yup.string().oneOf([yup.ref('password'), null], 'Password Must Same').required('Enter The Re-Password')
  })

  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });
 

 const navigate = useNavigate();
 
   
  const [index, setIndex] = useState(-1);
  const [profileList, setProfileList] = useState([]);

  // useEffect(() => {
  //   const storedProfileList = JSON.parse(localStorage.getItem('profileList')); 
  //   if (storedProfileList) {
  //     setProfileList(storedProfileList);
  //   }
  // }, []);
  
  
  const onSubmit = (data) => {
    if (index === -1) {
      const updatedProfileList = [...profileList, data];
      setProfileList(updatedProfileList);
      navigate("/table", { state: updatedProfileList });
      reset();
      console.log("Updated profileList:", updatedProfileList);
    } else {
      profileList[index] = data;
      setProfileList([...profileList]);
      navigate("/table", { state: profileList });
      setIndex(-1);
      reset();
    }
  };
  

  // const handleDelete = (index) => {
  //   profileList.splice(index, 1)
  //   setProfileList([...profileList])
  //   localStorage.setItem('profileList', JSON.stringify(profileList));
  //   reset()
  // }

  // const handleUpdate = (user, index) => {
  //   reset(user);
  //   localStorage.setItem('profileList', JSON.stringify(profileList));
  //   setIndex(index)
  // };
  return (
    <div className='pt-28 pb-8'>
    <div className="container mt-4" >
    <div className="container w-75" style={{border:'2px black solid', borderBottom:'0px solid black'}}>
      <div className="row">
        <div className="col-sm-12 col-12 text-center"><h1 style={{color:'#e600ac'}}>Form Validation</h1></div>
      </div>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}> 
        <div className="container-fluid w-75 p-3 " style={{border:'2px black solid',borderTop:'0px solid black'}}>
      <div className="row">
       <div className="col-md-2 col-sm-4 col-4">
         <select  {...register('select')} style={{ width: '100%', height: '35px' }} className='border'>
            <option></option>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Miss.</option>
            <option>Ms.</option>
          </select>
          <p style={{ color: 'red', height: '5px', }}>{errors.select?.message}</p>
          </div>
       <div className="col-md-5 col-sm-8 col-8"> 
         <input type='text' placeholder='Enter Your Name'   {...register('name')} style={{ width: '100%', height: '35px' }} className='border'/>
          <p style={{ color: 'red', height: '5px', }}>{errors.name?.message}</p>
       </div>
       <div className="col-md-5 col-sm-12 col-12">
       <input type='email' placeholder='Enter Your Email' className='border'  {...register('email')} style={{ width: '100%', height: '35px'}} />
          <p style={{ color: 'red', height: '2px' }}>{errors.email?.message}</p>
       </div>
  

      </div>
       <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-5 col-sm-12"> 
          <label style={{marginLeft:'12px'}}><b>Gender:</b></label>
          <label>
          <input type='radio' value='Male' className=''  {...register('gender')} style={{marginLeft:'12px'}} /> Male
          </label>
           <label >
          <input type='radio' value='Female'  {...register('gender')} style={{marginLeft:'12px'}} />  Female
            </label>
          <p style={{ color: 'red', height: '2px' }}>{errors.gender?.message}</p></div>
          <div className="col-md-7 col-sm-12">
            <label><b>Language:</b></label>
            <label >  <input type='checkbox' value='English' {...register('checkbox')} style={{marginLeft:'12px'}}/> English</label>
            <label> <input type='checkbox' value='Hindi' {...register('checkbox')} style={{marginLeft:'12px'}} /> Hindi</label>
            <label> <input type='checkbox' value='Spanish' {...register('checkbox')} style={{marginLeft:'12px'}}/>  Spanish</label>
            <p style={{ color: 'red', height: '2px' }}>{errors.checkbox && 'Please select at least one checkbox'}</p>
          </div>
        </div>
       
       </div>
       <div className="container-fluid mt-4 ">
     <div className="col-md-12">
     <input type='password' placeholder='Enter Your Password' className='border' {...register('password')} style={{ width: '100%', height: '35px', marginTop: '10px' }} />
          <p style={{ color: 'red', height: '2px' }}>{errors.password?.message}</p>
     </div>
          
        </div>
        <div className="container-fluid mt-4 ">
     <div className="col-md-12">
     <input type='password' placeholder='Enter Re-Password' className='border' {...register('strongpassword')} style={{ width: '100%', height: '35px', marginTop: '10px' }} />
          <p style={{ color: 'red', height: '2px' }}>{errors.strongpassword?.message}</p>
     </div>
          
        </div>
        <div className="container mt-4">
          <div className="col-md-12">
          <button type='submit' style={{ width: '100%', height: '40px', marginBottom: '30px', marginTop: '10px', backgroundColor: 'palevioletred', fontSize: '16px', borderRadius: '15px' }}>Submit</button>
          </div>
        </div>
        </div>
  
    </form>
  </div>
  </div>
  )
}
