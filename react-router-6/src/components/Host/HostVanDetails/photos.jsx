import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import styles from "../Host.module.css"

export default function Photos() {
    const {vans} = useOutletContext();


        const [large, setLarge] = useState(false);
      
        const handleClick = () => {
          setLarge(true);
        };
 
    return (
        <section className={styles.imageDetail}>
            <img src={large ? vans.image : vans.image} alt={vans.title} onClick={handleClick}
            className={styles.bigImage}/>
                
        </section>
    )
    }