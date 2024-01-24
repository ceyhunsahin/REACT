import React, {useState, useEffect, useRef, useMemo} from 'react'
import axios from 'axios'
import Users from './Users'
import { useCallback } from 'react'



export default function UseMemoCallback() {
    const searchRef = useRef(null)

    const [users, setUser] = useState([])
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')

    console.log("text", text, "search", search)

    useEffect(() => {
        const response = axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {setUser(response.data)})
        

        
    }, [])

    

    const handleSearch = () => {
        setSearch(text)
       /*  console.log("ref",searchRef.current.value)
        setSearch(searchRef.current.value) */
    }

    const filteredUsers = useMemo(() => {
        return (
            users.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase())
        }))
    }, [users, search])


    console.log("filteredUsers,filteredUsers",filteredUsers)


    const addUser = useCallback(() => {
        setUser([...users, {name: `CW-${users.length-9}`, id: users.length+1,
        username : `CW-${users.length-9}`
     }])
    },[users]) 

   



    return (
        <div className='useref'>
            <h2>UseMemoCallback</h2>
           <input type = "search" onChange = {(e)=> setText(e.target.value)} />
            {/* <input type = "search" ref = {searchRef} /> */}
            <button onClick = {handleSearch}>Search User</button>
            
            <Users users = {filteredUsers?filteredUsers: users} addUser={addUser} />
            
        
            
        </div>
    )
}
