import React from 'react'
import { Outlet } from 'react-router-dom'
/* import {Link } from "react-router-dom"; */
import styles from "./Host.module.css"
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function HostLayout() {
    const location = useLocation();
   
    const isDashboardActive = location.pathname === '/host';

    return (
        <nav>
             <div className={styles.dbDesign}>
 
                <NavLink  className={isDashboardActive ? styles.activelink : styles.dbLink} to="."  path = "relative" >Dashboard </NavLink>


                <NavLink className={({ isActive }) => isActive ? `${styles.activelink}` : `${styles.dbLink}`} to="./income" path = "relative"> Income  </NavLink>
                <NavLink className={({ isActive }) => isActive ? `${styles.activelink}` : `${styles.dbLink}`} to="./vans" path = "relative"> Vans  </NavLink>

                {/*     <Link className='' to="/Vans"> Vans  </Link> */}
                <NavLink className={({ isActive }) => isActive ? `${styles.activelink}`: `${styles.dbLink}`} to="./reviews" path = "relative"> Reviews  </NavLink>

            </div>
            <Outlet />
            
        </nav>
    )
}
