import './App.css';
import {BrowserRouter, Routes, Route} from'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Vans from './components/Vans/Vans';
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


function App() {
  return (

    <BrowserRouter>

      <Routes>

          <Route path='/' element={<Layout />} >

            <Route index element={<Home />} />
            <Route path='vans' element={<Vans />} />
            <Route path='about' element={<About />} />
            <Route path='vans/details/:id' element={<VansDetail />} />

{/*         <Route path='vans' >
              <Route index element={<Vans />} />
              <Route path='details/:id' element={<VansDetail />} />
            </Route> */}

            <Route path='host' element={<HostLayout />} >
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans"  element={<Hostvans />} />

              <Route path='vans/:VanDetailId' element={<HostVansDetails />} >
                <Route index element={<Details />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos"  element={<Photos />} />
                
              </Route>
              <Route path='reviews' element={<Reviews />} />
            </Route>
          </Route>
        
      </Routes>
    </BrowserRouter>


  );
}

export default App;
