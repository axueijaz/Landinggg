import React from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Work from './Components/Work';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Item from './Components/Item';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Navbar is placed outside of Routes so it appears on every page */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/item' element={<Item />} />
        </Routes>
        <Footer /> {/* Footer can also be outside Routes if you want it on every page */}
      </Router>
    </div>
  );
}

export default App;
