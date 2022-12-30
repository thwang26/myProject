import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Notfound from './pages/Notfound';
import Community from './nav/Community';
import Index from './main/Index';
import Header from './main/Header';
import Footer from './main/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/index/*' element={ <Index />} />
          <Route path='*' element={ <Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;