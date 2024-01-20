import React, {useState} from 'react'

function AddTask({dispatch}) {
    const [inputValue, setInputValue] = useState('');
    const [bool, setBool] = useState(false);
    return (
        <div>
        <input type="text" onChange={(e)=> {
        return (
            setInputValue(e.target.value),
            setBool(true)
            )}} />
        <button
                onClick = {() => {
                    
                    dispatch ({
                        type: 'ADD_TASK',
                        text: inputValue,
                        done : bool
                    })
                }}
                >
        
        
        Add</button>
            
        </div>
    )
}

export default AddTask
