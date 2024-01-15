
import {redirect} from "react-router-dom"

export default async function AuthRequired(request) {
/**
|--------------------------------------------------
| Fake Auth
//! if the user is not logged in redirect them to the login page.
//! Otherwise redirect them to the home page.
|--------------------------------------------------
*/
    //! Conditionally send to the login page.   

    const isLoggedIn = localStorage.getItem("loggedin")
    console.log("isLoggedIn", isLoggedIn)
    const url = new URL(request.url).pathname

    if (!isLoggedIn) {
        throw redirect(`/login?message=You must log in first.&redirectTo=${url} `)
    }
   
}
    

