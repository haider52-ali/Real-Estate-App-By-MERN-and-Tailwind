import React from 'react';
import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa'

export default function Header() {
  return (
    <header className='bg-slate-900 shadow-md p-5'>
        <div className='max-w-6xl mx-auto flex items-center justify-between'>
            <Link to='/'>
            <h1 className='text-lg sm:text-3xl'><span className='text-slate-100'>Real</span><span className='text-slate-400'>Estate</span></h1>
            </Link>
            <form className='bg-slate-800 outline-2 outline-slate-400 flex items-center justify-between py-2 px-3 rounded-md'>
                <input 
                type="text" 
                placeholder='Search...'
                className='bg-transparent focus:outline-none w-24 sm:w-32 text-slate-300'
                />
                <FaSearch className='text-slate-400'/>
            </form>
            <ul className='flex gap-4 text-slate-100'>
                <Link to='/'>
                    <li className='hover:text-slate-400 hidden sm:inline'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='hover:text-slate-400 hidden sm:inline'>About</li>
                </Link>
                <Link to='/log-in'>
                    <li className='hover:text-slate-400'>Log In</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
