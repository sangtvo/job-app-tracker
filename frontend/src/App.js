// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import OrderPage from './pages/OrderPage';
import StaffPage from './pages/StaffPage';
import products from './data/products.js';
import LogPage from './pages/LogPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import TopicsPage from './pages/TopicsPage';
import './App.css';

function App() {

  const [log, setLogToEdit] = useState([])

  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Sang Vo's Demo React App
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/" element={<HomePage setLog={setLogToEdit}/>} />
                <Route path="/gallery" element={<GalleryPage />} /> 
                <Route path="/staff" element={<StaffPage />} /> 
                <Route path="/order" element={<OrderPage products={products} />} /> 
                <Route path="/log" element={<LogPage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/edit" element={<EditPage logToEdit={log} />} />
                <Route path="/topics" element={<TopicsPage />} />
            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; 2023 Sang Vo</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
