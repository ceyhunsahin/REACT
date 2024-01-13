import React, { useState } from "react";
import Col from "react-bootstrap/Col";
//import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {
  Link,
  useNavigate,
  useLocation,
  redirect,
  useLoaderData,
  Form,
  useSearchParams,
} from "react-router-dom";

export function loader({ request }) {
  const url = new URL(request.url).searchParams.get("message");
  console.log("url", url);
  return url;
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  //const data = await loginUser({email, password});
  // localstorage.setItem("loggedin", true);

  return null;
}

export default function Signin() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const loader = useLoaderData();
  const navigate = useNavigate();

  const loc = useLocation();

  console.log("loc", loc);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("searchParams", searchParams.get("message"));
/* 
  const handleChange = (e) => {
    setLoginFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setStatus("submitting");
    setError(searchParams.get("message"));

    /**
      |--------------------------------------------------
      | loginUser(loginFormData)
      .then(data => navigate("/home", { replace: true }))
      .catch(err => setError(err.message)))
      .finally(() => setStatus("idle")))
       loginUser api.js' den cagirildi
      |--------------------------------------------------
      */
  };

  console.log("loginFormData", loginFormData);

  return (
/*     <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "30px",
      }}
    >
      
      <h2>Sign in to your account</h2>
      {loader && <h3 style={{ color: "red" }}>{loader}</h3>}
      {error && <h3 style={{ color: "orange" }}>{error}</h3>}
      <Form method = "post">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column xs="5">
            Email :
          </Form.Label>
          <Col sm="15">
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
              defaultValue={loginFormData.email}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
          <Form.Label column sm="8">
            Password :
          </Form.Label>
          <Col sm="15">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              defaultValue={loginFormData.password}
            />
          </Col>
        </Form.Group>
      </Form>
      <Button
        disabled={status === "submitting"}
        as="input"
        value={status === "submitting" ? "Submitting " : "Submit "}
        type="submit"
        onClick={handleSubmit}
      />{" "}
      <br />
      <br />
      <br />
      <h4>
        Don't you have an account <Link to="">Create one now</Link>
      </h4>
    </div> */
            <div>
          {error && <h3 style = {{color : "orange"}}>{error}</h3>}
        <Form method="post">
          <input type="email" name="email" placeholder="Email" />
          <br />
          <input type="password" name="password" placeholder="Password" />
          <br />
          <Button type="submit">Login</Button>
        </Form>
        <h4>
        Don't you have an account <Link to="">Create one now</Link>
      </h4>
    </div>
  );
}
