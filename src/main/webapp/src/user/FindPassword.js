import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/FindUser.css';

const FindPassword = () => {

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
    
    const confirmEmail = () => {
        if(verifyCode){
            axios
            .post('http://localhost:8080/email/confirmEmail', null, {params:{verifyCode}})
            .then(res => {
                if(res.data === 'verify'){
                    navigate('/index/changePwd', {state:{email:email}})
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
                <div>비밀번호 찾기</div>
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
                </div>&nbsp;
                <button style={{ cursor : 'pointer' }} className='sendCodeBtn' onClick={ confirmEmail }><div className='btnText'>다음</div></button>
            </div>
            
        </div>
    );
};

export default FindPassword;