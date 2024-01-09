

import "./Navbar.css"
import { NavLink  } from "react-router-dom";
import bgImg from '../assets/home-hero.png'
import { useLocation } from'react-router-dom';

function Header() {

  const homeIsActive = useLocation().pathname === '/';
  console.log(homeIsActive)


  return (
    <div className="navbar-nav">
      <div >
      
    
          <img
              src = {bgImg}
              width="40"
              height="40"
              alt=""
            />
           <NavLink className={ homeIsActive ? "navbar-link" : "navbar-linknotactive" } to="/" >
            <strong>
                 #VANLIFE
            </strong>

            </NavLink >
            
      </div>

      <div className='navbar-right'>
 
                  <NavLink className={({isActive})=> isActive ? 'navbar-link' : "navbar-linknotactive" }  to="/host">Host  </NavLink >

                  <NavLink className={({isActive})=> isActive ? 'navbar-link' : "navbar-linknotactive" }  to="/about"> About  </NavLink >

                  <NavLink className={({isActive})=> isActive ? 'navbar-link' : "navbar-linknotactive" }  to="/Vans"> Vans  </NavLink >
      </div>
                
             
          
 
    
    </div>
  );
}

export default Header;