import React from 'react'
import image from '../Pics/calc.jpg'
import image1 from '../Pics/tictactoe.jpg'
import image2 from '../Pics/form.webp'
import image3 from '../Pics/Guess-a-number.png'
import image4 from '../Pics/fittera0.png'
import { Link } from 'react-router-dom'

export default function Project() {
  return (
    <div className='pt-4 bg-slate-950 pb-8'>
      <div className='grid grid-cols-3'>
        <div className='text-center'>
          <hr className="border-t-4 border-b-4 w-2/3 ml-auto text-white" />
        </div>
        <div className=' text-center'>
          <h5 className='text-white'>Some of my latest work</h5>
        </div>
        <div>
          <hr className="border-t-4 border-b-4 mr-auto w-2/3 text-white" />
        </div>


      </div>


      <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-10 w-11/12 mx-auto '>
        <div className=' border'>
      <Link to="Calculator"><img src={image} alt='Assassin Creed' className='w-full h-64 object-cover' /></Link>    
          <div>
            <h2 className='text-center text-3xl p-2 '>
             <Link to="Calculator" className='no-underline text-white'>Calculator</Link> 
            </h2>
          </div>
        </div>
        <div className=' border '>
  <a href="https://fittera.in" target="_blank" rel="noopener noreferrer">
    <img src={image4} alt='Fittera' className='w-full h-64 object-cover' />
  </a>
  <div>
    <h3 className='text-center text-3xl p-2'> <a href="https://fittera.in" target="_blank" rel="noopener noreferrer" className='no-underline text-white'>
    Fittera
  </a>
    </h3>
  </div>
</div>

        <div className=' border'>
      <Link to="form"> <img src={image2} alt='GTA 5' className='w-full h-64 object-cover' /></Link>   
          <div>
            <h3 className='text-center text-3xl p-2'><Link to="form" className='no-underline text-white'>Form Validation</Link></h3>
          </div>
        </div>
      </div>

      <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10 mt-10 w-11/12 mx-auto '>
        <div className=' border w-7/12 mx-auto'>
      <Link to="guess"> <img src={image3} alt='Battle Field' className='w-full h-64 object-cover' /></Link>   
          <div>
            <h3 className='text-center text-3xl p-2'><Link to="guess" className='no-underline text-white'>Guess The Number</Link></h3>
          </div>
        </div>
        <div className='border w-7/12 mx-auto  '>
     <Link to="tic"> <img src={image1} alt='GTA 5' className='w-full h-64 object-cover' /></Link>    
          <div>
            <h3 className='text-center text-3xl p-2 '><Link to="tic" className='no-underline text-white'>Tic Tac Toe</Link></h3>
          </div>
        </div>
      </div>







    </div>
  )
}
