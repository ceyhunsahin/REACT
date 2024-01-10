import React from 'react'
import {useState, useEffect} from 'react'
import styles from "./Vans.module.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, useSearchParams} from "react-router-dom";
export default function Vans() {

        const [searchParams, setSearchParams] = useSearchParams();
        
        const typeFilter = searchParams.toString();

        console.log("typeFilter",typeFilter.split('=')[1]);
    
        const [products, setProducts] = useState([])
    
     
        useEffect(() => {
           fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => setProducts(data))
    
        }, [])



        const filteredProducts = products.filter(product => 
            (product.category.toLowerCase().includes(typeFilter && typeFilter.split('=')[1].toLowerCase())) || 
            (product.title.toLowerCase().includes(typeFilter && typeFilter.split('=')[1].toLowerCase() )))

        console.log(" filteredProducts", filteredProducts)

        
        
    
        return (
            
                <div className={styles.products}>
                    <div>
                        <Form inline>
                            <Row>
                            <Col xs="auto">
                                <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-lg-2"
                                onChange = {(e) => setSearchParams({...searchParams, search: e.target.value})}
                                />
                            </Col>

                            </Row>
                        </Form>
                    </div>
                    <div className={styles.products}>
                    {typeFilter ? 
                        filteredProducts.map((each) => (
                        <Link to ={`details/${each.id}`} key = {each.id} className={styles.product}>
                            <h6>{each.category}</h6>
                            <img className={styles.image}src={each.image} alt={each.title} />
                            <p>{each.title}</p>
                        
                        </Link>
                        ))
                        :
                        products.map((each) => (
                        <Link to ={`details/${each.id}`} key = {each.id} className={styles.product}>
                            <h6>{each.category}</h6>
                            <img className={styles.image}src={each.image} alt={each.title} />
                            <p>{each.title}</p>
                        
                        </Link>
                        ))} 

                    </div>
                </div>
           
        )
    }

