import React from 'react'

import {useOutletContext} from "react-router-dom";
import styles from "../Host.module.css"






export default function Details() {

    //const params = useParams();
/*     const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.VanDetailId}`)
    .then(res => res.json())
    .then(data => setVans(data))

    }, [params.VanDetailId])

    console.log("vans", vans.title) */

    const {vans} = useOutletContext();
    console.log(vans)





    return (
        <div>

                <section key={vans.id} className  = {styles.detailDesign}>
                    <p><span style = {{fontWeight : 'Bold',fontSize: '16px' }}>Title : </span>  {vans.title}</p>
                    <p><span style = {{fontWeight : 'Bold',fontSize: '16px' }}>Category : </span> {vans.category}</p>
                    <p><span style = {{fontWeight : 'Bold',fontSize: '16px' }}>Description : </span> {vans.description}</p>
                </section>

   
        </div>
    )
}
