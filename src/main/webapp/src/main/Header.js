import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../user/Login';
import '../css/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onLoginOpen = () => {
        setIsOpen(true)
    }

    const onLoginClose = () => {
        setIsOpen(false)
    }

    const onMyPage = () => {
       
    }

    const onComunity = () => {
        
    }

    const onTools = () => {
        
    }

    
    return (
        <div className='header'>
            <div className='top'>
                <Link to='/index'><h1 className='logo'>점주광장</h1></Link>
                {/* <li onClick={ onLoginOpen }><Link to='/login'>로그인</Link></li> */}
                <ul className='topMenu'>
                    <li onClick={ onLoginOpen }>로그인</li>&emsp;|&emsp;
                    <li onClick={ onMyPage }>마이페이지</li>
                </ul>
            </div>
            <div className='nav'>
                <Link to='/index/community'><li onClick={ onComunity }>소식광장</li></Link>
                <Link to='/index/tools'><li onClick={ onTools }>도구광장</li></Link>
            </div>
            {
                isOpen && <Login onLoginClose={ onLoginClose }/>
            }
            <hr/>
            <div className='searchDiv'>
                <input className='search' type='text' placeholder='검색어 입력'/>
                <button>검색</button>
            </div>
        </div>
    );
};

export default Header;