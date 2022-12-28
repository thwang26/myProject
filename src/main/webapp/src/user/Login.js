import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onLoginClose }) => {
    const [loginForm, setLoginForm] = useState({
        id: '',
        pwd: ''
    })
    const onLogin = () => {
        alert('로그인 할래요?')
    }
    const {id, pwd} = loginForm;

    const onInput = (e) => {
        const { name, value } = e.target // target안에 있는 아이디와 비밀번호

        setLoginForm({
            ...loginForm,
            [name] : value
        })
    }

    return (
        <div className='popup'>
            <p style={{ cursor: 'pointer' }} onClick={ onLoginClose }>X</p>
            <input type='text' name='id' value={ id } onChange={ onInput } placeholder='아이디 입력'/>
            <input type='password' name='pwd' value={ pwd} onChange={ onInput } placeholder='비밀번호 입력'/>
            <button style={{ cursor : 'pointer' }} onClick={ onLogin }>로그인</button>
            <button style={{ cursor : 'pointer' }} onClick={ onLogin }>카카오 로그인</button>
            <button style={{ cursor : 'pointer' }} onClick={ onLogin }>구글 로그인</button>
        </div>
    );
};

export default Login;