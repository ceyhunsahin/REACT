import React, {useEffect, useState} from 'react'
import {useParams, useNavigate, useLocation, Link} from "react-router-dom"
import BackArrow from './BackArrow';


export default function VansDetail() {
    const idOfProduct = useParams();
    console.log("idOfProduct", idOfProduct)

    const [product, setProduct] = useState([])
    const location = useLocation();
    console.log("location", location)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idOfProduct.id}`)
     .then(res => res.json())
     .then(data => setProduct(data))

    },[idOfProduct.id])

    console.log("product", product)

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    const search = location.state?.search || ""
    const title = location.state?.title || "all"


    return (
        <div>
        <BackArrow onClick = {handleClick}/> 
        <Link 
            //to="../.."
            //to = {`../..${location.state.search}`} // more consistent 
            //but if location.state.search is nul, it will be messy
            to = {`../..${search}`}
            relative='path'
            >Back to {title}
            </Link>
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
