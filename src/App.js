import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Routes from './routes'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <header>
          <Header />
        </header>

        <main>
          <Routes />
        </main>

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
