import React, { useEffect, useState } from 'react';
import '../css/Notfound.css';

const Notfound = () => {
    const [time, setTime] = useState(new Date());
    const [color, setColor] = useState();

    useEffect(() => {
        const id = setInterval(() => {
          setTime(new Date());
          setColor("#" + Math.floor(Math.random() * 16777215).toString(16))
        }, 1000);
        return (() => clearInterval(id))
    }, []);

    return (
        <div className='notfound'>
            <div className='notfoundMent'>
                <span className='clock'>{time.toLocaleTimeString()}</span>
                <br/><br/><br/><br/>
                <div className="notfound404">
                <h1><span>404</span></h1>
                </div>
                <br/><br/>
                <p>잘못된 주소에요</p>
                <a href="/">메인화면으로 이동</a>
                <br/><br/>
            </div>
        </div>
    );
};
export default Notfound;