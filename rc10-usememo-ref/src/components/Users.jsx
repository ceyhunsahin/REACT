import React, {memo} from 'react'
import '../index.css';
import UserCard from './UserCard';



 const Users = memo(({users, addUser}) =>{
    console.log("user rendered")
    return (
        <div className='users'>
        <button id = "add-button" onClick = {addUser} >Add User</button>
            
        
                {users?.map((user) => {
                    return <UserCard key = {user.id} user = {user}/>
                })}
           

        </div>
    )
})


export default Users