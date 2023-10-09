import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home/Home';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
import Error from './components/Error/Error';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          {/* <Route path='/countries' element={<Countries />} /> */}
          <Route path='/country/:countryName' element={<Country />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
