
import React, {useState, useEffect} from 'react'
import {useParams, Outlet, Link, NavLink} from "react-router-dom";
import styles from  "./Host.module.css"
export default function HostVansDetails() {
    const params = useParams();
    console.log(params)

    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.VanDetailId}`)
     .then(res => res.json())
     .then(data => setVans(data))

    }, [params.VanDetailId])

    const { id, ...rest }  = vans




    return (
        <div className='cardDesign'>
            <h2>Vans Details</h2>
            <Link to = "/host/vans" > Back to all vans</Link>
            <div className = {styles.miniCard} >
                <img className = {styles.image2} src={vans.image} alt={vans.title} />
                            <div className = {styles.miniCardSecond}>
                                <h3>{vans.title}</h3>
                                <p>{vans.price}$</p>
                                <div className = {styles.miniCard}>
                                    <NavLink to =  {`.`}  className = {styles.miniCardSecond} > Details </NavLink>
                                    <NavLink to =  {`./pricing`} className = {styles.miniCardSecond} > Pricing </NavLink>
                                    <NavLink to =  {`./photos`}  className = {styles.miniCardSecond} >Photos </NavLink>
{/*                                 <NavLink to =  {`/host/vans/${id}/`}  className = {styles.miniCardSecond} > Details </NavLink>
                                    <NavLink to =  {`/host/vans/${id}/pricing`} className = {styles.miniCardSecond} > Pricing </NavLink>
                                    <NavLink to =  {`/host/vans/${id}/photos`}  className = {styles.miniCardSecond} >Photos </NavLink> */}
                                </div>
                            </div>
                
                        
            </div>
            <div>

            </div>
            <Outlet context = {{ vans }}/>
        </div>
    )
}
