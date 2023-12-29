import React from 'react'
import { useState } from 'react';

//! Don't call Hooks inside loops, conditions or nested functions.
//! Don't call Hooks from regular js functions.

//* only call Hooks at the top level
//* Call Hooks from React function Components
//* Call Hooks from Custom Hooks


const UseStateComp = () => {
    //* TOP LEVEL
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(4);
    const [user, setUser]  = useState({name : "Ceyhun", "age" : 34, "city" : "Bangalore" });

    const increment = () => {
        setCount(count + 1);
    }
    const componentDidMount = () => {
        console.log("UseStateComp componentDidMount  mounted")
    }
    function updateUser() {
        setUser({...user, name : "Faruk" });
    }
  return (
    <div>
        <h3>UseStateComp</h3>
        <h3>Count : {count}</h3>
        <button onClick={increment}>Increment</button>
        <h3>Age : {age}</h3>
        <button onClick={() => setAge(age + 1)}>Increment</button>
        <h3>Username : {user.name}</h3>
        <h3>userAge : {user.age} </h3>
        <h3>userCity : {user.city} </h3>
        <button onClick = {updateUser}>user Info</button>

    </div>
  )
}

export default UseStateComp