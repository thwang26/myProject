import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Community from '../nav/Community';
import Tools from '../nav/Tools';
import Main from './Main';
import SignUp from '../user/SignUp';
import Notfound from '../pages/Notfound';
import Login from '../user/Login';

const Index = () => {
    return (
        <div>
            <Header />
                <Routes>
                <Route path='/login' element={ <Login />} />
                <Route path='/community' element={ <Community />} />
                <Route path='/tools' element={ <Tools />} />
                <Route path='/signUp' element={ <SignUp />} />
                <Route path='/*' element={ <Main />} />
                </Routes>
            <Footer />
        </div>
    );
};

export default Index;