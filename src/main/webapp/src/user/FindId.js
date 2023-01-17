import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/FindUser.css';

const FindId = () => {

    const [email, setEmail] = useState('');
    const [verifyCode, setVerifyCode] = useState('');
    const [id, setId] = useState('');

    const sendCode = () => {
        if(window.confirm(`${email}로 인증번호를 전송할까요?`)){
            axios
            .get('http://localhost:8080/auth/isExistEmail', {params: {email:email}})
            .then(res => {
                if(res.data === 'exist'){
                    axios
                    .post('http://localhost:8080/email/sendCode', null, {params:{email}})
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err));
                } else alert('가입되지 않은 이메일입니다');
            })
            .catch(err => console.log(err))
        }
    }//입력한 이메일로 인증번호 전송
    
    const findId = () => {
        if(verifyCode){
            axios
            .post('http://localhost:8080/email/confirmEmail', null, {params:{verifyCode}})
            .then(res => {
                if(res.data === 'verify'){
                    axios
                    .get('http://localhost:8080/auth/findId', {params: {email:email}})
                    .then(res => setId(res.data))
                    .catch(err => console.log(err))
                }
                else alert('인증번호가 일치하지 않습니다')
            })
            .catch(err => console.log(err));
        } else alert('인증번호를 입력 해 주세요')
    }//이메일 인증번호 검증 후 해당 이메일의 아이디 가져옴

    const login = () => {
        navigate('/index/login');
    }

    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='findUserForm'>
                <div>아이디 찾기</div>
                <div className='emailDiv'>
                    <span>
                        <input type='text' name='email' value={ email } onChange={ e => setEmail(e.target.value) } placeholder='이메일 입력'/>
                    </span>
                    <button style={{ cursor : 'pointer' }} className='sendCodeBtn' onClick={ sendCode }><div className='btnText'>인증번호 받기</div></button>
                </div>&nbsp;
                <div className='emailDiv'>
                    <span>
                        <input type='text' name='verifyCode' value={ verifyCode } onChange={ e => setVerifyCode(e.target.value) } placeholder='인증번호 입력'/>
                    </span>
                    <button style={{ cursor : 'pointer' }} className='sendCodeBtn' onClick={ findId }><div className='btnText'>아이디 찾기</div></button>
                </div>
            </div>
            <div>회원님의 아이디는 {id}입니다</div>
            <input type='button' value='로그인' onClick={login} />
        </div>
    );
};

export default FindId;