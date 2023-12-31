
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Product from './components/pages/Product';
import Footer from './components/Footer/Footer';
import NotFound from './components/pages/NotFound';
import Detail from './components/pages/Detail';
import CheckOut from './components/pages/CheckOut';



function App() {
  return (
    <div className="App">
      <Router> 
      
        
        <Navbar />
        <div className='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="product/details/:productId" element={<Detail />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
