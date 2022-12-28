import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './main/Index';
import Login from './user/Login';
import Notfound from './user/Notfound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
       {/* header와 footer는 여기에 항상 나오면서 routes로 메인만 바꿔줌 */}
        <Routes>
          {/* 여기에는 header에서 클릭한 곳을 보여주게 */}
          <Route path='/' element={ <Index />}></Route>
          {/* <Route path='/login' element={ <Login />}></Route> */}
          {/* <Route path='/login' element={ <Login />}></Route> */}
          <Route path='*' element={ <Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;