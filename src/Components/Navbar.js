import React from 'react';
import { Icon } from '@iconify/react';

export default function Navbar() {
  return (
    <nav className='fixed w-full border'>
      <div className='grid grid-cols-4 p-3 bg-white'>
        <div className='flex pl-2 '>
          <Icon icon="game-icons:scorpion" className='text-4xl text-teal-600' />
          <h1 className='text-2xl font-extrabold text-teal-600'> RohitNotna</h1>
        </div>
        <div className=''>
          <ul className='flex mt-1'>
            <li className='flex'>
              <Icon icon="typcn:home" color="black" className='text-2xl' />
              <span className='ml-1 '>Home</span>
            </li>
            <li className='pl-12 flex'>
              <Icon icon="mdi:about" color="black" className='text-2xl' />
              <span className='ml-2 '>About Me</span>
            </li>
          </ul>
        </div>




        <div>
          <select className='px-2 py-2'>
            <option value='home'>Home</option>
            <option value='about'>About Me</option>
          </select>
        </div>




        <div className='  '>
          <div className='w-2/4 ml-auto flex'>
            <button className='container px-1 py-1 rounded-lg bg-teal-600 text-white mx-3'>Sign In</button>
            <button className='container px-1 py-1 rounded-lg bg-teal-600 text-white '>Log In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
