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
                <button className='card-small'> small</button>
                <button className='card-large'> LARGE</button>
            
            </div>
        )


        })}
    </div>
  )
}

export default Card;
