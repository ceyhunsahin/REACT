import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';



const User = () => {

    const url = "https://jsonplaceholder.typicode.com/users"

    const [users, setUsers] = useState();
    console.log(users)
    
/*     const getData =() => {
            try {
                axios.get(url).then(res => setUsers(res.data))
            }catch(error){
                console.log("error")
            }
    } */

    /**
    |--------------------------------------------------
    | const getData = () => {
        fetch(url).then(res => res.json()).then(data => setUsers(data))
        console.log(users)
    }
    |--------------------------------------------------
    */
    
    //* UseEffect ile Kullanimi, ilk render'da userlari cekmek icin
    useEffect(() => {
        axios.get(url).then(res => setUsers(res.data))
    }, [])

    return (
        <div>
            <h3>User Component</h3>
            <ul>
                {users?.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            
           
        </div>
    )
    




/* 
  return (
    <div>
        <h2>User UseEffect Kullanimi</h2>
        <button onClick={getData}>Click Me</button>
        {users.map(user => <p key={user.id}>{user.name}</p>)}
        
    </div>
  )
} */
}
export default User