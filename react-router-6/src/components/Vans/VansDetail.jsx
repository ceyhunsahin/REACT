import React, {useEffect, useState} from 'react'
import {useParams, useNavigate, useLocation, Link} from "react-router-dom"
import BackArrow from './BackArrow';


export default function VansDetail() {
    const idOfProduct = useParams();
    console.log(idOfProduct)

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


    return (
        <div>
        <BackArrow onClick = {handleClick}/> 
        <Link 
            //to="../.."
            to = {`../..${location.state.search}`}
            relative='path'
            state = {{ search : `{}` }}
            >Back to All Vans
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
