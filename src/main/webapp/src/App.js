import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Notfound from './pages/Notfound';
import Index from './main/Index';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/mypage/*' element={ <MyPage />} /> */}
          <Route path='/index/*' element={ <Index />} />
          <Route path='*' element={ <Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;