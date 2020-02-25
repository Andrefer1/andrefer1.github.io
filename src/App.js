import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Routes from './routes'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
