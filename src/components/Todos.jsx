import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
    const {todos} = props;
  return (
    <>
        {todos.map((data) => <Todo key={data.id} todo={data.data} id={data.id} onRemove={props.onRemove}/>)}
    </>
  )
}

export default Todos