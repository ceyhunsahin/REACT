import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Users from './Users'


export default function UseMemoCallback() {

    const [users, setUser] = useState([])

    useEffect(() => {
        const response = axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {setUser(response.data)})
        

        
    }, [])

    console.log(users)





    return (
        <div>
            <h2>UseMemoCallback</h2>
            <Users users = {users} />
        
            
        </div>
    )
}
