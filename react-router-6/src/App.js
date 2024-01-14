import './App.css';
import {createBrowserRouter, 
        RouterProvider, 
        createRoutesFromElements, 
        Route, redirect} from'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Vans , {loader as vansLoader} from './components/Vans/Vans';
import VansDetail,{loader as vansLoaderDetail}  from './components/Vans/VansDetail';
import Layout from './components/Navbar/Layout';
import Dashboard from './components/Host/Dashboard';
import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';
import HostLayout from './components/Host/HostLayout';
import HostVansDetails, {loader as loaderHostDetails} from './components/Host/HostVansDetails';
import Hostvans, {loader as HostLoader} from './components/Host/Hostvans';
import Details from './components/Host/HostVanDetails/details';
import Pricing from './components/Host/HostVanDetails/pricing';
import Photos from './components/Host/HostVanDetails/photos';
import NotFound from './components/NotFound';
import Error from './components/Vans/errorVans';
import Signin, {loader as loginLoader, action as loginAction} from './components/Signin/Signin';
import AuthRequired from './components/AuthRequired';
localStorage.removeItem("loggedIn")


const router = createBrowserRouter(createRoutesFromElements(
  
    <Route path='/' element={<Layout />} errorElement= {<Error/>} >

    <Route index element={<Home />} />
    <Route path='vans' element={<Vans />} 
          loader = {vansLoader} />
    <Route path='about' element={<About />} />
    <Route path='vans/:id' element={<VansDetail />} 
    loader = {vansLoaderDetail}

    />
    <Route path='signin' 
      element={<Signin/>}
      loader = {loginLoader} 
      action = {loginAction}
    />


    <Route path='host' element={<HostLayout />} >
      <Route index element={<Dashboard />} 
      />

      <Route 
      path="income" 
      element={<Income />} 
      loader = {async () => {
          return await AuthRequired()
          }} 
      />
      <Route 
      path="vans"  
      element={<Hostvans />}  
        loader = {HostLoader}
      />
      <Route 
        path='reviews' 
        element={<Reviews />} 
        loader = {async () => {
          return await AuthRequired()
          }} 
        />
      <Route 
      path='vans/:id' 
      element={<HostVansDetails />} 
      loader = {loaderHostDetails} 
      >
        <Route 
        index 
        element={<Details />} 
        loader = {async () => {
          return await AuthRequired()
          }} 
        />
        <Route 
        path="pricing" 
        element={<Pricing />} 
        loader = {async () => {
          return await AuthRequired()
          }} 
        />
        <Route 
        path="photos"  
        element={<Photos />} 
        loader = {async () => {
          return await AuthRequired()
         
          }} 
        />

        
      </Route>
      
    </Route>
    <Route path = "*" element = {<NotFound />} />
    </Route>
  
))

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
