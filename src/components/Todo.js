import React from 'react'

const Todo = () => {
  return (
    <div style={{textAlign:'center'}}>
        <h1 style={{color:'darkgreen'}}>My Todo List</h1>
        <input type='text' placeholder='Add a new todo' style={{marginTop:'20px'}}/>

        <button style={{backgroundColor:'darkblue',color:'white',paddingX:'10px'}}>Add</button>
        <span style={{paddingLeft:'10px',marginTop:'20px'}}>
            <h3 style={{marginBottom:'10px'}}>My Todo Items:</h3>
            <ul style={{listStyleType:'circle'}}></ul>
        </span>
    </div>
  )
}

export default Todo