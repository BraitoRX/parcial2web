import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ListadoCafes from './pages/ListadoCafes';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'; // Importamos el archivo de estilos CSS

const App = () => {
  return (
    <Router>
      <div className="app-container"> 
        <div className="title-container"> 
          <h1 className="title">El aroma mágico</h1> 
        </div>
        <div className="image-container"> 
          <img src={require('./assets/bannerCafe.png')} alt="Banner de Café" className="banner-image" />
        </div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Cafes/" element={<ListadoCafes />} />
        </Routes>
        <div className="contact-info">
          <p>Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
        </div>
      </div>
    </Router>
  );
};

export default App;
