import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';

const Community = () => {
    const [list, setList] = useState([]);
    // useEffect = (() =>{
    //     axios.get('http://localhost:8080/community/getList')
    //          .then((res) => setList(res.data))
    //          .catch(err => console.log(err));
    // },[])
    return (
        <div>
            <div>소식광장</div>
            {list}
        </div>
    );
};

export default Community;