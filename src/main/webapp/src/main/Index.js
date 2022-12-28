import React, { useState } from 'react';
import Login from '../user/Login';
import '../css/Index.css';
import { Link } from 'react-router-dom';

const Index = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onLoginOpen = () => {
        setIsOpen(true)
    }

    const onLoginClose = () => {
        setIsOpen(false)
    }

    const onMyPage = () => {
        alert('my page')
    }

    const onComunity = () => {
        alert('my Comunity')
    }

    const onTools = () => {
        alert('my Tools')
    }

    return (
        <div>
            <h1 className='logo'>점주광장</h1>
            <ul>
            {/* <li onClick={ onLoginOpen }><Link to='/login'>로그인</Link></li> */}
            <li onClick={ onLoginOpen }>로그인</li>
            <li onClick={ onMyPage }>마이페이지</li>
            <li onClick={ onComunity }>소식광장</li>
            <li onClick={ onTools }>도구광장</li>
            </ul>
            {
                isOpen && <Login onLoginClose={ onLoginClose }/>
            }
            <hr/>
            <input type='text' placeholder='검색어 입력'/>
            <button>색상반전</button>
            <div>Copyright (c) cvsowner.com All rights reserved.</div>
            <div>Contact us, cvsowner@gmail.com</div>
            <div>이용약관 | 개인정보취급방침</div>
        </div>
    );
};

export default Index;