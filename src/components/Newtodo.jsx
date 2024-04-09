import React , {useState} from 'react'

const Newtodo = (props) => {

    const [todoData , setTodo] = useState({title: "" , desc : ""});
    const {title , desc} = todoData;

    const handleChange = (e) => {
        setTodo((prevdata) => {
            return {...prevdata,[e.target.name] : e.target.value}
        });
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        props.onPush(todoData)
        setTodo({title: "" , desc : ""})
    }

  return (
    <div>
        <h1>Todo App</h1>
        <form onSubmit={handlesubmit} className='form-container'>
            <div>
                <label htmlFor="title">
                    <input type="text" onChange={handleChange} value={title} name='title' id='title' placeholder='Enter your task' required />
                </label>
            </div>
            <div>
                <label htmlFor="desc">
                    <textarea name='desc' onChange={handleChange} value={desc}  id='desc' placeholder='Enter task description'/>
                </label>
            </div>
            <button className='add' type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default Newtodo
