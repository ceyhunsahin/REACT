import React, {useState} from 'react'

import  { addTodo, deleteTodo, clearTodoList, toggleTodo }  from '../redux/reducer/todoReducer'

import { useSelector, useDispatch } from 'react-redux'

export default function Todo() {
    const [value, setValue] = useState('')
    const list = useSelector((state) => state.todo)


    const dispatch = useDispatch()


    console.log(list)



    return (
        <div style = {{display: "flex", flexDirection : "column", justifyContent: "center", alignItems:'center' }}>
            <h1>Todo With REDUX</h1>

            <div style = {{display: "flex", flexDirection : "row"}}>
                <input type="text" style = {{margin : '1rem', width: "15rem"}} placeholder='Add Todo'
                onChange = {(e)=> setValue(e.target.value)} />
                <button style = {{width: "5rem", margin : '1rem', backgroundColor: "green", color : 'white',fontSize:"20px"}}
                onClick = {() => dispatch( addTodo(value)) }>Add</button>
            </div>
            <button style = {{width: "5rem", margin : '1rem', backgroundColor: "blue",color : 'white', fontSize:"20px"}}
            onClick = {() => dispatch(clearTodoList())}>Clear</button>
             {
                
                list.map((item, index) => {
                   
                    return (
                        item.title !== '' ? (
                        <div key = {index} style = {{display: "flex", flexDirection : "row",margin : '1rem', width: "25rem", backgroundColor:'yellow'}}>
                            
                            {item.completed ?  <p style ={{textDecoration:'line-through',width: "10rem"}} >{item?.title}</p> :
                             <p style = {{width: "10rem"}} >{item?.title}</p>}
                            <input type="checkbox" 
                                    checked = {item.completed} 
                                    style = {{margin : '1rem', width: "15rem"}}
                               onChange = {() => dispatch(toggleTodo(index))}/>
                            
                            <button style = {{width: "5rem", margin : '1rem', backgroundColor: "red", color : 'white',fontSize:"20px"}}
                            onClick = {() => dispatch(deleteTodo(item.id))}>Delete</button>
                        </div>)
                        : null
                    )
                    
                }) 
                
                
             }
        </div>
    )
}
