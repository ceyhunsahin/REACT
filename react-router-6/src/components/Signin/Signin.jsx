import React, {useState} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

export default function Signin() {

    const [loginFormData, setLoginFormData] = useState({"email": "", "password": ""});

    const handleChange = (e) => {
        setLoginFormData(prev => ({
            
           ...prev,
              [e.target.name]: e.target.value
        }));  
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginFormData);
    };
   



    return (
        <div style = {{    "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "justify-content": "center", "margin":"30px"}}>
            <h2>Sign in to your account</h2>

              <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column xs="5">
                    Email :
                  </Form.Label>
                  <Col sm="15">
                    <Form.Control type="email" name= "email" placeholder="name@example.com"
                    onChange={handleChange} 
                    defaultValue={ loginFormData.email}/>
                  </Col>
                </Form.Group>
          
                <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
                  <Form.Label column sm="8">
                    Password  :
                  </Form.Label>
                  <Col sm="15">
                    <Form.Control type="password" name = "password" placeholder="Password" 
                        onChange={handleChange} 
                        defaultValue={ loginFormData.password}
                    />
                  </Col>
                </Form.Group>

              </Form>
              <Button as="input" type="submit" value="Submit" 
                onClick={handleSubmit}
              />{' '}
              <br/>
              <br/>
              <br/>
              <h4>Don't you have an account <Link to= "">Create one now</Link></h4>

        </div>

          
    )
}
