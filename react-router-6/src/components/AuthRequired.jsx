import React from 'react'
import {Outlet, redirect,Navigate} from "react-router-dom"
export default async function AuthRequired(param=false) {
/**
|--------------------------------------------------
| Fake Auth
//! if the user is not logged in redirect them to the login page.
//! Otherwise redirect them to the home page.
|--------------------------------------------------
*/
    //! Conditionally send to the login page.   
    const isLoggedIn = localStorage.getItem("loggedin");
    console.log("isLoggedIn 1", isLoggedIn);
    if (!isLoggedIn) {
        console.log("isLoggedIn 2 ", isLoggedIn);
        throw redirect("/signin?message=You must be logged in to access this page"); 
    } else {
        return null
    }



}
