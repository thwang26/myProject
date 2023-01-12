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
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    
    //     if (token) {
    //       // Send an HTTP request to the server to check if the token is valid
    //       fetch('/api/check-token', {
    //         headers: {
    //           'Authorization': `Bearer ${token}`
    //         }
    //       })
    //         .then(response => {
    //           if (response.status === 200) {
    //             setIsLoggedIn(true);
    //           } else {
    //             setIsLoggedIn(false);
    //           }
    //         })
    //         .catch(error => {
    //           console.error(error);
    //           setIsLoggedIn(false);
    //         });
    //     } else {
    //       setIsLoggedIn(false);
    //     }
    //   }, []);

    return (
        <div className='header'>
            <div className='top'>
                <h1 className='logo'><Link to='/index'>점주광장</Link></h1>
                {/* <li onClick={ onLoginOpen }><Link to='/login'>로그인</Link></li> */}
                <ul className="topMenu">
                    <div>
                        <li className='nav'><Link to='/index/community'>소식광장</Link></li>
                        <li className='nav'><Link to='/index/salary'>급여계산기</Link></li>
                        <li><Link to="/index/login">로그인</Link></li>
                        <li onClick={onMyPage}>마이페이지</li>
                    </div>
                    <div className="myPage" style={{ visibility: myPage }}>
                        <li onClick={logout}>로그아웃</li>
                    </div>
                </ul>
            </div>
            <div className='nav'>

            </div>
            <hr/>
            {/* <div className='searchDiv'>
                <input className='search' type='text' placeholder='검색어 입력'/>
                <button>검색</button>
            </div> */}
        </div>
    );
};

export default Header;