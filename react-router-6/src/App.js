import './App.css';
import {createBrowserRouter, 
        RouterProvider, 
        createRoutesFromElements, 
        Route} from'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Vans , {loader as vansLoader} from './components/Vans/Vans';
import VansDetail from './components/Vans/VansDetail';
import Layout from './components/Navbar/Layout';
import Dashboard from './components/Host/Dashboard';
import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';
import HostLayout from './components/Host/HostLayout';
import HostVansDetails from './components/Host/HostVansDetails';
import Hostvans from './components/Host/Hostvans';
import Details from './components/Host/HostVanDetails/details';
import Pricing from './components/Host/HostVanDetails/pricing';
import Photos from './components/Host/HostVanDetails/photos';
import NotFound from './components/NotFound';
import Error from './components/Vans/errorVans';


const router = createBrowserRouter(createRoutesFromElements(
  
    <Route path='/' element={<Layout />} errorElement= {<Error/>} >

    <Route index element={<Home />} />
    <Route path='vans' element={<Vans />} 
          loader = {vansLoader} />
    <Route path='about' element={<About />} />
    <Route path='vans/details/:id' element={<VansDetail />} />



    <Route path='host' element={<HostLayout />} >
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="vans"  element={<Hostvans />}  />

      <Route path='vans/:VanDetailId' element={<HostVansDetails />} >
        <Route index element={<Details />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="photos"  element={<Photos />} />
        
      </Route>
      <Route path='reviews' element={<Reviews />} />
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
