
import './form.css';
import { useState } from 'react';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

    
    


    const handleNameChange = (event) => {
        setName(event.target.value);
/*         console.log(event.target.value) */
        console.log("name: ", name)
        
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);

    }

    const handlePasswordChange = (event) => {
        setPass(event.target.value)
    }


   

    return (
        
        <div style = {{height : "110vh"}}>
            <form>
                <div>
                    <p></p>
                    <label>
                        <strong>Username :  {name}</strong>
                    </label>
                    <br />
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        onChange={handleNameChange}
                    />
                </div>

                <div>
                    <p></p>
                    <label>
                        <strong>Email :  {email}</strong>
                    </label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <p></p>
                    <label>
                        <strong>Password {pass}</strong>
                    </label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handlePasswordChange}
                    />
                </div>
                <div>
                     {/* this a dropdown menu */}
                     <p></p>
                     <label>
                         <strong>Country</strong>
                         <br />
                     </label>
                     <select style = {{marginTop : "10px", width : "100px", padding:"10px"}} placeholder = "Country" >
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