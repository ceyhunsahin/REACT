import React from 'react'
import "./Card.scss"

const Card = ({veri}) => {
    
  return (
    <div className='container'>
        {veri.map((item) => {
        const {name, img,job, comment,email} = item;

        return(
            <div className="card">
            <h1> {name.toUpperCase()} - {job}</h1>
            <img src={img} alt={name} />
            <p>{comment}</p>
            <p>{email}</p>

            
        </div>
        )

        
        })}
    </div>
  )
}

export default Card;
