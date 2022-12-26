import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Index = () => {
    return (
        <div>
            <Search />
            <h3>***메인 화면***</h3>
            <hr/>
            <p><Link to='/user/writeForm'>입력</Link></p>
            <p><Link to='/user/list'>출력</Link></p>
            <p><Link to='/user/updateForm'>수정</Link></p>
            <p><Link to='/user/deleteForm'>삭제</Link></p>
            <p><Link to='/user/uploadForm'>업로드</Link></p>
        </div>
    );
};

export default Index;