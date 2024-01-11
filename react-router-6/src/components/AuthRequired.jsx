import React from 'react'
import {Outlet, Redirect, Navigate} from "react-router-dom"
export default function AuthRequired() {
/**
|--------------------------------------------------
| Fake Auth
//! if the user is not logged in redirect them to the login page.
//! Otherwise redirect them to the home page.
|--------------------------------------------------
*/
    //! Conditionally send to the login page.   
    const isLoggedIn = true;
    if (!isLoggedIn) {
        /* return <Redirect to="/signin" /> */
        return <Navigate to="/signin" />
    } else {
        return <Outlet />
    }



}
