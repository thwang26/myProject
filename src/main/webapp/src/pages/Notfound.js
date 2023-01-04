import React, { useEffect, useState } from 'react';
import '../css/Notfound.css';

const Notfound = () => {
    const [time, setTime] = useState(new Date());
    const [color, setColor] = useState('#c9c9c9');

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
                <h1>4<span style={{textShadow: '2px 2px 0 '+color+', -2px -2px 0 '+color+', 0 0 8px '+color}}>0</span>4</h1>
                </div>
                <br/><br/>
                <p>잘못된 주소에요.</p>
                <a href="/index">메인화면으로 이동할게요</a>
                <br/><br/>
            </div>
        </div>
    );
};
export default Notfound;