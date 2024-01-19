import React from "react"
import {
    useLoaderData,
    useNavigate,
    Form,
    redirect,
    useActionData,
    useNavigation
} from "react-router-dom"
import { loginUser } from "../api";

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function fakeLoginUser(creds) {
    await sleep(2000)
    console.log(creds)
    if (creds.email==="b@b.com" && creds.password==="p123") {
        localStorage.setItem("loggedin", true)
        return {
            email : creds.email,
            token : "1234567890abcdefgh"
        }

        } throw new Error("Couldn't log the user in")
    }

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url)
                        .searchParams.get("redirectTo") || "/host"
    try {
    const data = await loginUser({ email, password })
    localStorage.setItem("loggedin", true)
    console.log("bu data o data", data)
    return redirect(pathname)
    } catch (error) {
        return error.message
    }
    
}



export default function Login() {

    const errorMessage = useActionData()
    console.log(errorMessage)
    const navigation = useNavigation()
    console.log("navigation", navigation)
    //const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
/*     const [status, setStatus] = Rea ct.useState("idle")
    const [error, setError] = React.useState(null)
    const message = useLoaderData()
    const navigate = useNavigate() */



    return (
        <div >
            <h1>Sign in to your account</h1>
          {/*   {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error.message}</h3>}
 */}
{/*  {errorMessage && <h4 style = {{color : 'red'}}>{errorMessage}</h4>} */}
            <Form method="post">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                {navigation.state ==="submitting" ? <button disabled>Submitting...</button> : <button>Login</button>}
               
            </Form>
        </div>
    )
}