import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='fixed w-full border'>
      <div className='grid grid-cols-3 p-3 bg-white'>
        <div className='flex pl-2 '>
          <Icon icon="game-icons:scorpion" className='text-4xl text-teal-600' />
          <h1 className='text-2xl font-extrabold text-teal-600'> RohitNotna</h1>
        </div>
        <div className=''>
          <ul className='flex mt-1'>
            <li className='flex'>
              <Icon icon="typcn:home" color="black" className='text-2xl' />
              <span className='ml-1 '><Link to="/" className='no-underline text-black'>Home</Link></span>
            </li>
            <li className='pl-12 flex'>
              <Icon icon="mdi:about" color="black" className='text-2xl' />
              <span className='ml-2 '><Link to="/about" className='no-underline text-black'>About</Link></span>
            </li>
          </ul>
        </div>     
      </div>
    </nav>
  );
}
