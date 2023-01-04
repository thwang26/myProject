import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../user/Login';
import '../css/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [myPage, setMyPage] = useState('hidden');
    const [session, setSession] = useState(1);

    const onMyPage = () => {
        myPage === 'hidden' ? setMyPage('visible') : setMyPage('hidden')
        console.log(myPage)
    }

    const logout = () => {
        setSession(0);
        setMyPage('hidden');
    };

    const onComunity = () => {
        
    }

    const onTools = () => {
        
    }

    return (
        <div className='header'>
            <div className='top'>
                <Link to='/index'><h1 className='logo'>점주광장</h1></Link>
                {/* <li onClick={ onLoginOpen }><Link to='/login'>로그인</Link></li> */}
                <ul className="topMenu">
                {session === 0 && (
                    <Link to="/index/login">
                    <li>로그인</li>
                    </Link>
                )}
                {session !== 0 && (
                    <>
                    <li onClick={onMyPage}>마이페이지</li>
                    <div className="myPage" style={{ visibility: myPage }}>
                        fds
                        <li onClick={logout}>로그아웃</li>
                    </div>
                    </>
                )}
                </ul>
            </div>
            <div className='nav'>
                <Link to='/index/community'><li onClick={ onComunity }>소식광장</li></Link>
                <Link to='/index/tools'><li onClick={ onTools }>도구광장</li></Link>
            </div>
            <hr/>
            <div className='searchDiv'>
                <input className='search' type='text' placeholder='검색어 입력'/>
                <button>검색</button>
            </div>
        </div>
    );
};

export default Header;