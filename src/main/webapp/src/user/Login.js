import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';

const Login = () => {
    const [idDiv, setIdDiv] = useState('')
    const [pwdDiv, setPwdDiv] = useState('')
    const [loginForm, setLoginForm] = useState({
        memberId: '',
        password: ''
    })
    const {memberId, password} = loginForm;

    const onInput = (e) => {
        const { name, value } = e.target // target안에 있는 아이디와 비밀번호

        setLoginForm({
            ...loginForm,
            [name] : value
        })
    }

    const onLogin = (e) => {
        e.preventDefault()
        console.log('login')
        setIdDiv('')
        setPwdDiv('')

        var sw = 1;
        
        if(!memberId){
            setIdDiv('아이디를 입력하세요')
            sw = 0;
        }else if(!password){
            setPwdDiv('비밀번호를 입력하세요')
            sw = 0;
        }else if(sw === 1){
            axios.post('http://localhost:8080/members/login', JSON.stringify(loginForm), {
                    headers: {
                    "Content-Type": `application/json`,
                    },
                })
                .then((res) => {
                    if(res.data){
                        alert('로그인 성공')
                        console.log(res.data)
                    }
                })
                .catch(error => {
                    console.log(error); 
                    alert('아이디 또는 비밀번호가 틀립니다.');
                    setLoginForm({
                        memberId: '',
                        password: ''
                    })
            })
        }
    }

    return (
        <div className='container'>
            <div className='loginForm'>
                <div>
                    <h3>아이디</h3>
                    <span>
                        <input type='text' name='memberId' value={ memberId } onChange={ onInput } placeholder='아이디 입력'/>
                        <div>{idDiv}</div>
                    </span>
                </div>
                <div>
                <h3>비밀번호</h3>
                    <span>
                        <input type='password' name='password' value={ password } onChange={ onInput } placeholder='비밀번호 입력'/>
                        <div>{pwdDiv}</div>
                    </span>
                </div>
                <button style={{ cursor : 'pointer' }} onClick={ onLogin }>로그인</button>
                <p>정보를 잊어버렸어요</p>
                <Link to='/index/signUp'><p>회원가입</p></Link>
            </div>
        </div>
    );
};

export default Login;