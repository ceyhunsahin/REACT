import React from 'react'
import {Outlet, redirect} from "react-router-dom"
export default async function AuthRequired() {
/**
|--------------------------------------------------
| Fake Auth
//! if the user is not logged in redirect them to the login page.
//! Otherwise redirect them to the home page.
|--------------------------------------------------
*/
    //! Conditionally send to the login page.   
    const isLoggedIn = false;
    if (!isLoggedIn) {
        /* return <Redirect to="/signin" /> */
        throw redirect("/signin")
    } else {
        return <Outlet />
    }



}
