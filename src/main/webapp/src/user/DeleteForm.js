import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img02 from '../image/img2.png';

const DeleteForm = () => {
    const [searchId, setSearchId] = useState('')
    const navigate = useNavigate()

    const onSearch = () => {
        axios
        .get('http://localhost:8080/user/isExistId', {params: { id: searchId }})
        .then((res) => {
            res.data === 'non_exist' ? 
                alert('아이디가 일치하지 않습니다') || setSearchId('') 
                :
                window.confirm('정말로 탈퇴하시겠습니까?') &&
                axios
                .delete('http://localhost:8080/user/delete', {params: { id: searchId }})
                .then(() => {
                    alert('탈퇴를 완료하였습니다.');
                    navigate('/user/list');
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>
                <Link to='/'>
                    <img src={img02} width='100' height='100' />
                </Link>
                회원탈퇴
            </h1>
            <hr/>

            <p>
                삭제 할 아이디 입력 : <input type="text" name='searchId' value={ searchId } onChange={e => setSearchId(e.target.value)} placeholder="아이디를 입력하세요" />&nbsp;
                <input type="button" value="검색" onClick={ onSearch }/>
            </p>
            {/* <div className={style.resultDiv}>{ resultDiv }</div> */}
        </div>
    );
};

export default DeleteForm;