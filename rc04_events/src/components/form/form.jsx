
import './form.css';
import { useState } from 'react';

const Form = () => {

    /**
    |--------------------------------------------------
     const [name, setName] = useState('');|     
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [optn, setOption] = useState('');

    
    


    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log("name: ", name)

        
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);

    }

    const handlePasswordChange = (event) => {
        setPass(event.target.value)
    }

    const dropChange = (event) => {
        setOption(event.target.value)


    }
    |--------------------------------------------------
    */

   // burada bir obje olusturduk
    const [data, setData] = useState({
        "username": "", 
        "email": "", 
        "password": "", 
        "Country": ""
    });
    console.log(data)


    const handleSubmit = (event) => {
        //event.preventDefault();
        alert(`
        Username: ${data.username}, 
        Email: ${data.email}, 
        Password: ${data.password}, 
        Option: ${data.Country}
        `)
        //setData('');
 
    }

/**
|--------------------------------------------------
| elementlerin altina ozaellikle value degeri verilerek 
| formunun gonderilmesi sirasinda kontrollu bir yapi haline getiririz
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value = {name}
                        onChange={handleNameChange}
                    />

                    gibi
|--------------------------------------------------
*/
   const handleFormData = (event) => {
   //event.preventDefault();
    setData({...data, [event.target.name]: event.target.value
            });

   }

    return (
        
        <div style = {{height : "110vh"}}>
            <form onSubmit={handleSubmit}>
                <div>
                    <p></p>
                    <label>
                        <strong>Username :  {data.username}</strong>
                    </label>
                    <br />
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value = {data.username}
                       // onChange={handleNameChange}
                        onChange = {handleFormData}
                    />
                </div>

                <div>
                    <p></p>
                    <label>
                        <strong>Email :  {data.email}</strong>
                    </label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={data.email}
                        //onChange={handleEmailChange}
                        onChange = {handleFormData}
                    />
                </div>
                <div>
                    <p></p>
                    <label>
                        <strong>Password {data.password}</strong>
                    </label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={data.password}
                        //onChange={handlePasswordChange}
                        onChange = {handleFormData}
                    />
                </div>
                <div>
                     {/* this a dropdown menu */}
                     <p></p>
                     <label>
                         <strong>Country {data.Country}</strong>
                         <br />
                     </label>
                     <select style = {{marginTop : "10px", width : "100px", padding:"10px"}} placeholder = "Country" name = "Country"  value = {data.optn} 
                     //onChange={dropChange} 
                     onChange = {handleFormData}
                     >
                     <option value="country">Country</option>
                     <option value="india">India</option>
                     <option value="usa">USA</option>
                     <option value="australia">Australia</option>
                     <option value="canada">Canada</option>

                     </select>
                </div>

                <button className = "btn__click" type="submit">Submit</button>



            </form>


        </div>
       

    )

}

export default Form;