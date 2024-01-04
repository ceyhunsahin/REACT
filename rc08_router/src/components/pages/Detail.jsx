
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import styles from './Details.module.css'
import BackArrow from '../../assets/BackArrow';
import CheckoutBag from '../../assets/checkoutBag';

// problem en sondaki id'yi nasil yakalarim, o en onemli kisim


function Detail() {

    const params = useParams()
    console.log(params.productId)

    const navigate = useNavigate()

    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then(res => res.json())
      .then(data => setProductDetail(data))
    }, [params.productId])

    const handleBack  = () => {
       // window.history.back()
       navigate(-1) //-2 dersen 2 onceki sayfaya gider
    }

    const handleCheckout = () => {  
        navigate('/checkout')
    }



    return (
        <div >
            <div className = {styles.detailsHead}>

                <BackArrow className = {styles.detailsIcon} onClick = {handleBack}/> 
                 <h1>Detail Page</h1>
                <CheckoutBag className = {styles.detailsIcon} onClick = {handleCheckout}/>
            </div>
        
            <div className = {styles.DetailsWrapper}>
                <h1> {productDetail.title}</h1>
                <p>Description :{productDetail.description}</p>
                <p>Category : {productDetail.category}</p>
                <p>Price : {productDetail.price}</p>
                <p>Rating : {productDetail.rating?.rate}</p>
                <p>Counted : {productDetail.rating?.count}</p>
                <img className = {styles.DetailsImage} src={productDetail.image} alt={productDetail.title} />
            
            </div>
        </div>
    )
}

export default Detail
