import React from 'react'
import {Outlet} from "react-router-dom"
import Header from './Navbar';
import Footer from '../Footer/Footer'

export default function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
