import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"


export default function VansDetail() {
    const idOfProduct = useParams();
    console.log(idOfProduct)

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idOfProduct.id}`)
     .then(res => res.json())
     .then(data => setProduct(data))

    },[idOfProduct.id])

    console.log("product", product)


    return (
        <div>
        {idOfProduct ?
        (<div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} /> 
            <p>{product.description}</p>
        </div>)
            :
            (<div>
            <p>Loading...</p>
            </div>)
        }
            
        </div>
    )
}
