
import {useState, useEffect} from 'react'
import styles from "../products.module.css"
import {Link} from "react-router-dom";


function Product() {

    const [products, setProducts] = useState([])
    
     
    useEffect(() => {
       fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))

    }, [])
    

    return (
        
            <div className={styles.products}>
            {products.map((each) => (
                <Link to ={`details/${each.id}`} key = {each.id} className={styles.product}>
                    <h6>{each.category}</h6>
                    <img className={styles.image}src={each.image} alt={each.title} />
                    <p>{each.title}</p>
                </Link>
                ))}
            </div>
       
    )
}

export default Product
