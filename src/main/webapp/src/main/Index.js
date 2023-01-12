import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Community from '../nav/Community';
import Salary from '../nav/Salary';
import Main from './Main';
import SignUp from '../user/SignUp';
import Notfound from '../pages/Notfound';
import Login from '../user/Login';
import FindUser from '../user/FindUser';

const Index = () => {
    return (
        <div>
            <Header />
                <Routes>
                <Route path='/login' element={ <Login />} />
                <Route path='/community' element={ <Community />} />
                <Route path='/salary' element={ <Salary />} />
                <Route path='/signUp' element={ <SignUp />} />
                <Route path='/findUser' element={ <FindUser />} />
                <Route path='/*' element={ <Main />} />
                </Routes>
            <Footer />
        </div>
    );
};

export default Index;