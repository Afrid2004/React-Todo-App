import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

const Todo = (props) => {
    const{title ,desc} = props.todo;
    const{id} = props;
    const handleDelete =(id) => {
        props.onRemove(id);
    }
  return (
    <div className='todo-container'>
        <div className="details">
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        <button title='Delete Task' onClick={() => {handleDelete(id)}}>
            <FaRegTrashCan className='icon'/>
        </button>
    </div>
  )
}

export default Todo