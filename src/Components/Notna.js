import React from 'react'
import image from '../Pics/notna.jpg'

export default function Notna() {
  return (
    <div className='bg-black pt-20'>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
      <div className='text-white lg:pl-80 lg:pt-20 text-center sm:text-left pl-4 pt-4  '>
       <h1 className='text-4xl '>Hi</h1>
       <h1 className='text-4xl'><span className='text-4xl'>I'm</span><span className='text-4xl text-red-700'> Rohit Notna</span></h1>
       <h1 className='text-4xl'>Front-End Developer</h1>
       <p></p>
       <div className='mb-3  w-3/12 m-auto'>
        <button className='lg:px-2 lg:py-1 px-2 py-1 bg-white text-black rounded-lg mt-10 '>Contact</button>
        </div>
        

      </div>


      <div>

      <img className='lg:w-3/5 lg:pt-2 lg:mr-auto sm:w-full' src={image}/>
      </div>



      </div>




    </div>
  )
}
