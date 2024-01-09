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


function App() {
  return (

    <BrowserRouter>

      <Routes>

          <Route element={<Layout />} >

            <Route path='/' element={<Home />} />
            <Route path='/vans' element={<Vans />} />
            <Route path='/about' element={<About />} />
            <Route path='/vans/details/:id' element={<VansDetail />} />
            <Route path='/host' element={<Dashboard />} >
              <Route path='/host/income' element={<Income />} />
              <Route path='/host/reviews' element={<Reviews />} />
            </Route>
          </Route>
        
      </Routes>
    </BrowserRouter>


  );
}

export default App;
