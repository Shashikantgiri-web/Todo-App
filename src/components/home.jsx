import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react'
import '../App.css'

const home = () => {
    const [todo, settodo] = useState("")
    const [todos, settodos] = useState([])

    useEffect(() => {
        let todosString = localStorage.getItem("todos")
        if (todosString) {
            let todos = JSON.parse(localStorage.getItem("todos"))
            settodos(todos)
        }
    }, [])


    const saveTODO = (todosToSave) => {
        localStorage.setItem("todos", JSON.stringify(todosToSave || todos))
    }
    const handleEdit = (e, id) => {
        let t = todos.filter(i => i.id === id)
        settodo(t[0].todo)
        let newtodos = todos.filter(item => {
            return item.id !== id;
        });
        settodos(newtodos)
        saveTODO(newtodos)
    }
    const handlecheck = (e) => {
        let id = e.target.name
        let index = todos.findIndex(item => {
            return item.id === id;
        })
        let newtodos = [...todos]
        newtodos[index].isCompleted = !newtodos[index].isCompleted
        settodos(newtodos)
        saveTODO(newtodos)
    }
    const handleDelete = (e, id) => {
        let newtodos = todos.filter(item => {
            return item.id !== id;
        });
        settodos(newtodos)
        saveTODO(newtodos)
    }
    const handleAdd = () => {
        let newtodos = [...todos, { id: uuidv4(), todo, isCompleted: false }]
        settodos(newtodos)
        settodo("")
        saveTODO(newtodos)
    }
    const handlechange = (e) => {
        settodo(e.target.value)
    }
    return (
        <div className="w-[99vw] sm:w-[80vw] h-[85vh] backdrop-blur-md bg-white/10 flex flex-col justify-center items-center rounded-3xl shadow-2xl shadow-purple-900/50 border border-white/20 animate-fadeInUp relative z-10">
            <div className='w-[99%] h-[30%] flex flex-col justify-center items-center gap-4 animate-slideInDown'>
                <h3 className='w-[80%] h-[20%] flex justify-center items-center font-bold text-3xl sm:text-4xl text-white mb-2 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent'>
                    ✨ Add Todo
                </h3>
                <input 
                    type="text" 
                    name="todo" 
                    id="todo" 
                    onChange={handlechange} 
                    value={todo} 
                    placeholder="Enter your todo..."
                    className='w-[80%] h-[50px] bg-white/20 backdrop-blur-sm border-2 border-white/30 flex justify-center items-center rounded-2xl px-6 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/25' 
                />
                <button 
                    type="submit" 
                    className='w-[20%] sm:w-[15%] h-[50px] p-[5px] flex justify-center items-center border-none bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed rounded-2xl text-white font-semibold shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 active:scale-95 transition-all duration-300 disabled:hover:scale-100 disabled:hover:shadow-none' 
                    onClick={handleAdd} 
                    disabled={todo.length < 3}
                >
                    {todo.length >= 3 ? '✨ Save' : 'Save'}
                </button>
            </div>
            <div className='w-[99%] h-[68%] flex flex-col justify-start items-center overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent px-2'>
                {todos.length === 0 && (
                    <div className='w-[80%] min-h-[100px] flex flex-row justify-center items-center p-6 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-3xl mb-2 border border-white/20 animate-fadeIn'>
                        <p className="text-white italic text-lg sm:text-xl">📝 No todos yet. Add one above!</p>
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
                                <input 
                                    type="checkbox" 
                                    name={item.id} 
                                    checked={item.isCompleted}
                                    onChange={handlecheck} 
                                    className='w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white/50 bg-white/20 cursor-pointer appearance-none checked:bg-gradient-to-r checked:from-purple-500 checked:to-pink-500 checked:border-transparent transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 relative' 
                                />
                            </div>
                            <div className='w-[55%] h-[99%] flex justify-start items-center px-3'>
                                <p className={`${item.isCompleted ? "line-through text-purple-200 opacity-60" : "text-white"} italic text-base sm:text-lg font-medium transition-all duration-300`}>
                                    {item.todo}
                                </p>
                            </div>
                            <div className='w-[35%] h-[99%] flex flex-row justify-center items-center gap-3'>
                                <button 
                                    className='min-w-[45px] min-h-[45px] flex justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-500 border-none text-white rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110 active:scale-95 transition-all duration-300' 
                                    onClick={(e) => handleEdit(e, item.id)}
                                    title="Edit"
                                >
                                    <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                <button 
                                    className='min-w-[45px] min-h-[45px] flex justify-center items-center bg-gradient-to-r from-red-500 to-pink-500 border-none text-white rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-110 active:scale-95 transition-all duration-300' 
                                    onClick={(e) => { handleDelete(e, item.id) }}
                                    title="Delete"
                                >
                                    <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default home