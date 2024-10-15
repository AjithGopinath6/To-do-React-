import React from 'react'
import { useState } from 'react'

function Td() {
  const [state, setState] = useState([])
  const [input, setInput] = useState('')

  const handleInputChange = (e)=>{
    setInput(e.target.value)
  }
  const handleAddTodo = ()=>{
    if(input){
      setState((prevState)=>[...prevState, input])
      setInput('');       
    }
  }

  const handleDeleteTodo=(deleteIndex) =>{
    setState((prevState)=> prevState.filter((_, index)=>index !== deleteIndex))
  }

  return (
    <div className='todo-container'>
      <div className='todo'>
      <h1>My App</h1>
      <h3>Todo List</h3>
      <input value={input}  type="text" onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
      {state.map((item, index)=>{
        return(
        <div className='todo-item' key={index}>
        <h6 >{item}</h6>
        <button onClick={()=> handleDeleteTodo(index)}>Del</button>
        </div>
        
        )
      })}
      </div>
    </div>
    
  )
}

export default Td
