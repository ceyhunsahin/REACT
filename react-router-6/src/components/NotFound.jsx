import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link, useNavigate } from 'react-router-dom';


export default function NotFound() {

    // write a return to Home button function
/*     return (
        <div>
            <h1> Sorry, the page you were looking for as  not found.</h1>
            <Link to="/" >
                <Button variant="warning"  >Back to Home</Button>
            </Link>
        </div>
    )
} */

      
            const navigate = useNavigate();
        
            const handleClick = () => {
                

            navigate('/');
            };
        
            return (
                <div>
                <h1> Sorry, the page you were looking for as  not found.</h1>
                <Button variant="warning" onClick={handleClick} >Back to Home</Button>
                </div>
            );
        };
        
    