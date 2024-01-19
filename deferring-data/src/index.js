import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import Weather, {loader  as weatherLoader} from "./components/Weather";
import Layout from "./components/Layout";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >

    <Route index
           element={<h3>Home Page</h3>} 
          
          />


    <Route path="weather" 
           element={<Weather />} 
           loader={weatherLoader}
          />

 </Route>
 ));
function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)

// If you want to start measuring performance in your app, pass a function

