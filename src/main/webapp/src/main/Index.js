import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Community from '../nav/Community';
import Salary from '../nav/Salary';
import Main from './Main';
import SignUp from '../user/SignUp';
import Login from '../user/Login';
import FindId from '../user/FindId';
import FindPassword from '../user/FindPassword';
import ChangePwd from '../user/ChangePwd';
import IndexNotFound from '../pages/IndexNotFound';

const Index = () => {
    return (
        <div>
            <Header />
                <Routes>
                <Route path='/login' element={ <Login />} />
                <Route path='/community' element={ <Community />} />
                <Route path='/salary' element={ <Salary />} />
                <Route path='/signUp' element={ <SignUp />} />
                <Route path='/findId' element={ <FindId />} />
                <Route path='/findPassword' element={ <FindPassword />} />
                <Route path='/changePwd' element={ <ChangePwd />} />
                <Route path='/indexNotFound' element={ <IndexNotFound />} />
                <Route path='/*' element={ <Main />} />
                </Routes>
            <Footer />
        </div>
    );
};

export default Index;