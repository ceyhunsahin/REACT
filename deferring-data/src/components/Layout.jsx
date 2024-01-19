import React from 'react'
import {Outlet, Link} from "react-router-dom"
import {useId}from "react"


export default function Layout() {
    const id = useId()
    return (
        <div>

        <nav>
                <Link to="/">
                <h3>Home</h3></Link>
                <Link to="weather">
                <h3>Weather</h3></Link>
            </nav>
            <Outlet/>
{/*             <form>
                <label htmlFor={id + '-firstName'}>First Name:</label>
                <input id={id + '-firstName'} type="text" />
                <hr />
                <label htmlFor={id + '-lastName'}>Last Name:</label>
                <input id={id + '-lastName'} type="text" />
            </form> */}
            
        </div>
    )
}
