import React from 'react'
import '../index.css';

import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

export default function UserCard({user}) {
    const avatar =  createAvatar(adventurer, {
          size: 128,
          seed: `{${user.username}}`
        }).toDataUriSync();
    
    

    const userName = user.username
    return (
        <div className='userItem'>

            <img 
                src =  {avatar}  alt="Avatar"
                 />
            <p>{user.name}</p>

            
        </div>
    )
}
