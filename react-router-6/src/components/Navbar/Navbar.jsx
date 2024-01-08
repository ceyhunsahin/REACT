

import "./Navbar.css"
import { Link } from "react-router-dom";
import bgImg from '../assets/home-hero.png'

function NavbarFunc() {
  return (
    <div className="navbar-nav">
      <div className="navbar-left">
      
    
          <img
              src = {bgImg}
              width="40"
              height="40"
              alt=""
            />
           <Link className='navbar-link'  to="/" >
            <strong>
                 #VANLIFE
            </strong>

            </Link>
            
      </div>

      <div className='navbar-right'>
 
                  <Link  className='navbar-link' to="/host">Host  </Link>

                  <Link className='navbar-link' to="/about"> About  </Link>

                  <Link className='navbar-link' to="/Vans"> Vans  </Link>
      </div>
                
             
          
 
    
    </div>
  );
}

export default NavbarFunc;