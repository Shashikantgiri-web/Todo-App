import React, { useState, useEffect } from 'react'
import "../App.css"

const list = () => {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    let todosString = localStorage.getItem("todos");
    if (todosString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      settodos(todos);
    }
  }, []);
  
  return (
    <div className="w-[99vw] sm:w-[80vw] h-[85vh] backdrop-blur-md bg-white/10 flex flex-col justify-center items-center rounded-3xl shadow-2xl shadow-purple-900/50 border border-white/20 animate-fadeInUp relative z-10">
        <div className='w-[99%] h-[90%] flex flex-col justify-start items-center py-6'>
            <h2 className='w-[80%] mb-6 flex justify-center items-center font-bold text-3xl sm:text-4xl text-white bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent animate-slideInDown'>
                📋 Your Todo List
            </h2>
            <div className='w-[99%] h-[85%] flex flex-col justify-start items-center overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent px-2'>
                {todos.length === 0 && (
                    <div className='w-[80%] min-h-[100px] flex flex-row justify-center items-center p-6 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-3xl mb-2 border border-white/20 animate-fadeIn'>
                        <p className="text-white italic text-lg sm:text-xl">📝 No todos yet. Go to Home to add some!</p>
                    </div>
                )}
                {todos.map((item, index) => {
                    return (
                        <div 
                            key={item.id} 
                            className={`w-[80%] min-h-[90px] flex flex-row justify-center items-center p-4 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 backdrop-blur-sm rounded-2xl mb-3 border border-white/20 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-[1.02] transition-all duration-300 animate-slideInRight`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className='w-[10%] h-[99%] flex justify-center items-center'>
                                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center ${item.isCompleted ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'border-2 border-white/50 bg-white/20'}`}>
                                    {item.isCompleted && (
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div className='w-[65%] h-[99%] flex justify-start items-center px-3'>
                                <p className={`${item.isCompleted ? "line-through text-purple-200 opacity-60" : "text-white"} italic text-base sm:text-lg font-medium transition-all duration-300`}>
                                    {item.todo}
                                </p>
                            </div>
                            <div className='w-[25%] h-[99%] flex flex-row justify-center items-center gap-2'>
                                <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                                    item.isCompleted 
                                        ? 'bg-gradient-to-r from-green-400/30 to-emerald-500/30 text-green-200 border border-green-400/50' 
                                        : 'bg-gradient-to-r from-yellow-400/30 to-orange-500/30 text-yellow-200 border border-yellow-400/50'
                                }`}>
                                    {item.isCompleted ? '✓ Done' : '⏳ Pending'}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default list