import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import List from './components/list.jsx';

function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Header /><Home/></>
    },
    {
      path:"/home",
      element:<><Header /><Home/></>
    },
    {
      path:"/list",
      element:<><Header /><List /></>
    }
  ])

  return (
    <>
      <div className='w-[100vw] min-h-[100vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col justify-center items-center gap-[10px] relative overflow-hidden'>
        {/* Animated background elements */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
          <div className='absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
          <div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
        </div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
