import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const header = () => {
  return (
    <div className='w-[99%] h-[10vh] flex flex-row justify-center items-center backdrop-blur-sm bg-white/10 rounded-2xl shadow-lg border border-white/20 animate-fadeInDown relative z-10'>
      <div className='w-[50%] h-[100%] flex justify-center items-center'>
        <h2 className='text-white font-bold text-[19px] sm:text-[29px] italic bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent animate-gradient'>
          ✨ TO-DO LIST APP
        </h2>
      </div>
      <div className='w-[50%] h-[100%] flex flex-row justify-center items-center'>
        <ul className='w-[99%] h-[100%] flex flex-row justify-center items-center gap-4'>
          <NavLink to="/" className={({isActive}) => 
            `relative px-4 py-2 rounded-lg font-semibold text-lg transition-all duration-300 ${
              isActive 
                ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg scale-105' 
                : 'text-purple-200 hover:text-white hover:bg-white/10'
            }`
          }>
            <li className='cursor-pointer transition-transform duration-200 hover:scale-110'>
              Home
            </li>
          </NavLink>
          <NavLink to="/list" className={({isActive}) => 
            `relative px-4 py-2 rounded-lg font-semibold text-lg transition-all duration-300 ${
              isActive 
                ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg scale-105' 
                : 'text-purple-200 hover:text-white hover:bg-white/10'
            }`
          }>
            <li className='cursor-pointer transition-transform duration-200 hover:scale-110'>
              List
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default header   