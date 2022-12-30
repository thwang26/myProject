import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';

const Login = ({ onLoginClose }) => {
    const [idDiv, setIdDiv] = useState('')
    const [pwdDiv, setPwdDiv] = useState('')
    const [loginForm, setLoginForm] = useState({
        id: '',
        pwd: ''
    })
    const {id, pwd} = loginForm;

    const onInput = (e) => {
        const { name, value } = e.target // target안에 있는 아이디와 비밀번호

        setLoginForm({
            ...loginForm,
            [name] : value
        })
    }

    const onLogin = (e) => {
        e.preventDefault()
        setIdDiv('')
        setPwdDiv('')

        var sw = 1;
        
        if(!id){
            setIdDiv('아이디를 입력하세요')
            sw = 0;
        }else if(!pwd){
            setPwdDiv('비밀번호를 입력하세요')
            sw = 0;
        }else if(sw === 1){
            axios.post('http://localhost:8080/user/login', null, { //params: form/ form으로 보내거나 객체로 보내거나
                    params: {
                        id: id,
                        pwd: pwd
                    }
                 })
                 .then((res) => {
                    if(res.data==='success')
                        window.location.replace("/index")
                    else {
                        alert('아이디 또는 비밀번호가 틀립니다.')
                        setLoginForm({
                            id: '',
                            pwd: ''
                        })
                    }
                 })
                 .catch(error => {console.log(error)})
        }
    }

    return (
        <div className='popup'>
            <p style={{ cursor: 'pointer' }} onClick={ onLoginClose }>X</p>
            <input type='text' name='id' value={ id } onChange={ onInput } placeholder='아이디 입력'/>
            <div>{idDiv}</div>
            <input type='password' name='pwd' value={ pwd} onChange={ onInput } placeholder='비밀번호 입력'/>
            <div>{pwdDiv}</div>
            <button style={{ cursor : 'pointer' }} onClick={ onLogin }>로그인</button>
            <button style={{ cursor : 'pointer' }} >카카오 로그인</button>
            <button style={{ cursor : 'pointer' }} >구글 로그인</button>
            <p>정보를 잊어버렸어요</p>
            <Link to='/index/writeForm' onClick={ onLoginClose }><p>회원가입</p></Link>
        </div>
    );
};

export default Login;