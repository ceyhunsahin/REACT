import React, { useEffect, useState } from 'react'
import styles from  "./Host.module.css"
import {Link} from "react-router-dom";

function Hostvans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setVans(data))
        
    }, [])
    return (
        <div style = {{margin : "10px"}}>
            <h2>Your Listed Vans </h2>
            <div className>
                {vans.map((each) => (
                    <Link to = {`${each.id}`} key = {each.id} 
                    className = {styles.miniCard}  >
                        <img className = {styles.image} src={each.image} alt={each.title} />
                        <div className = {styles.miniCardSecond}>
                            <h3>{each.title}</h3>
                            <p>{each.price}$</p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Hostvans
