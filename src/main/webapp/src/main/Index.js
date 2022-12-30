import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Community from '../nav/Community';
import Tools from '../nav/Tools';
import Main from './Main';
import WriteForm from '../user/WriteForm';
import Notfound from '../pages/Notfound';

const Index = () => {
    return (
        <div>
            <Header />
                <Routes>
                <Route path='/community' element={ <Community />} />
                <Route path='/tools' element={ <Tools />} />
                <Route path='/writeForm' element={ <WriteForm />} />
                <Route path='/*' element={ <Main />} />
                </Routes>
            <Footer />
        </div>
    );
};

export default Index;