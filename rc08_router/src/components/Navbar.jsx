import React from 'react'
import styles from "./Navbar.module.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className= {styles.navbar }>
        <Link to="/" >Home</Link>
        <NavLink to="/about" className= {({isActive}) => isActive ? styles.activeStyle : undefined}>About</NavLink>
        <NavLink to="/product" className= {({isActive}) => isActive ? styles.activeStyle : undefined}>Product</NavLink>
        {/* <NavLink to="/contact" className= {(isActive => isActive ? 'red' : 'blue')}>Contact</NavLink> */}
        {/* isActive sayesinde style degisikligi yapabiliriz yapabiliriz */}

    </div>
  )
}

export default Navbar