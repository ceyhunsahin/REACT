import React from 'react'
import { useOutletContext } from 'react-router-dom';


export default function Pricing() {
    const {vans} = useOutletContext();
    return (
        <section>
        <h3>{vans.price}$</h3>
            
        </section>
    )
}
