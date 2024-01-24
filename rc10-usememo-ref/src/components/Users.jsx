import React from 'react'
import '../index.css';
import UserCard from './UserCard';


export default function Users({users}) {
    return (
        <div className='users'>
        <button id = "add-button">Add User</button>
            
        
                {users?.map((user) => {
                    return <UserCard key = {user.id} user = {user}/>
                })}
           

        </div>
    )
}
