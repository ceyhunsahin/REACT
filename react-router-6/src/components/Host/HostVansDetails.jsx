
import React, {useState, useEffect} from 'react'
import {useParams, Outlet, Link, NavLink, useLoaderData} from "react-router-dom";
import styles from  "./Host.module.css"
import {getHostData} from "../api";
import AuthRequired from "../../AuthRequired";


export async function loader({params}) {
    //await AuthRequired()
    console.log("params.id", params.id)
    const data = await getHostData(params.id);
    console.log("datadata",data)
    return data;
}
export default function HostVansDetails() {
    const params = useParams();
    console.log(params)
    const vans = useLoaderData();

    /* const [vans, setVans] = useState([]); */
    const [loading, setLoading] = useState(false);

    /* useEffect(() => {
        const fetchHostData = async () => {
            setLoading(true);
            const data = await getHostData(params.VanDetailId);
            setTimeout(() => {
                setVans(data);
                setLoading(false);
            }, 1000);
        }
        fetchHostData()

    }, [params.VanDetailId]) */

    

    console.log("vans", vans)

   /*  const { id, ...rest }  = vans */

    if (loading) {
        return <h1>Loading...</h1>
    }




    return (
        <div className='cardDesign'>
            <h2>Vans Details</h2>
            <Link to = "/host/vans" > Back to all vans</Link>
            <div className = {styles.miniCard} >
                <img className = {styles.image2} src={vans.imageUrl} alt={vans.title} />
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
