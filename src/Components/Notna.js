import React from 'react'
import image from '../Pics/notna.jpg'
import { useNavigate } from 'react-router-dom'

export default function Notna() {
const navigate =  useNavigate();

const handleNavigate=()=>{
window.open("https://drive.google.com/file/d/14ZguJ74U_JvdMzpgwXHDLJd5EO0uQ4Y0/view?usp=sharing")
}
  return (
    <div className='bg-black pt-20'>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
      <div className='text-white lg:pl-80 lg:pt-20 text-center sm:text-left pl-4 pt-4  '>
       <h1 className='text-4xl '>Hi</h1>
       <h1 className='text-4xl'><span className='text-4xl'>I'm</span><span className='text-4xl text-red-700'> Rohit Notna</span></h1>
       <h1 className='text-4xl'>Front-End Developer</h1>
       <p></p>
       <div className='grid grid-cols-2  w-9/12'>    
       <div className='mb-3  w-12/12 '>
        <button className='lg:px-2 lg:py-1 px-2 py-1 bg-teal-600 text-black rounded-lg mt-10 '><a href="https://github.com/Rohit-notna" target="_blank" rel="noopener noreferrer" className='no-underline text-black'> Github</a></button>
        </div>
        <div className='mb-3 w-12/12 '>
        <button onClick={handleNavigate} className='lg:px-2 lg:py-1 px-2 py-1 bg-teal-600 text-black rounded-lg mt-10 '>
                Resume
              </button>
        </div>
        </div>
      </div>
      <div>

      <img className='lg:w-3/5 lg:pt-2 lg:mr-auto sm:w-full' src={image}/>
      </div>
      </div>
    </div>
  )
}
