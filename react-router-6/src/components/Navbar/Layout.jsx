import React from 'react'
import {Outlet} from "react-router-dom"
import Header from './Navbar';

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
