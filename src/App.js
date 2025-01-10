import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sofas from './components/Sofas';
import ScrollToTop from './components/Utills/ScrollToTop';
import SofaDetail from './components/Sofas/SofaDetail';
import ProductDetail from './components/Allproducts/ProductDetail';


const App = () => (
  <Router>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/Sofas" element={<Sofas/>}/> 
      <Route path="/sofa-detail/:id" element={<SofaDetail />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      {/* <Route path="/contact" element={< />} />  */}
    </Routes>
  </Router>
);

export default App;
