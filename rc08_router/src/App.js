
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Product from './components/pages/Product';
import Footer from './components/Footer/Footer';
import NotFound from './components/pages/NotFound';
import Detail from './components/pages/Detail';



function App() {
  return (
    <div className="App">
      <Router> 
      
        <h1> REACT ROUTER</h1>
        <Navbar />
        <div className='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/details" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        

        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
