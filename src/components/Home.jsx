import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Todos from './Todos'
import Newtodo from './Newtodo'


const Home = () => {
    const [todoData ,setTodo] =  useState([]);
    const pushData = (data) => {
        setTodo((task) => {
            return [...task , {id: uuidv4() ,data}];
        })
        console.log(todoData)
    }
    const handleremove = (id) => {
        setTodo((todos) => {
           const Remove = todos.filter((todo) => todo.id != id);
           return Remove;
        })
    }
  return (
    <div className='container'>
        <Newtodo onPush={pushData}/>
        <Todos todos={todoData} onRemove={handleremove}/>
    </div>
  )
}

export default Home