import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <br/><br/>
            <button>색상반전</button>
            <div>Copyright (c) cvsOwner.com All rights reserved.</div>
            <div>Contact us, cvsowner@gmail.com</div>
            <div>이용약관 | 개인정보취급방침</div>
        </div>
    );
};

export default Footer;