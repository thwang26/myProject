import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import '../css/ChangePwd.css';

const ChangePwd = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [rePwd, setRePwd] = useState('');
    const [pwdDiv, setPwdDiv] = useState('');
    const [rePwdDiv, setRePwdDiv] = useState('');
    
    // 비밀번호 정규식
    const pwdTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

    useEffect(() => {
        console.log(location)
        if(location.state !== null) setEmail(location.state.email);
        else navigate('/index/indexNotfound');
    },[])

    const changePwd = () => {
        setPwdDiv('')
        setRePwdDiv('')

        if(!pwd){
            setPwdDiv('비밀번호를 입력하세요')
        }else if(!pwdTest.test(pwd)){
            setPwdDiv('8~15자 영문 대 소문자, 숫자, 특수문자를 사용하세요.')
        }else if(!rePwd&&pwd){
            setRePwdDiv('재확인 비밀번호를 입력해주세요');
        }else if(pwd !== rePwd&&pwd){
            setRePwdDiv('비밀번호가 다릅니다');
        }else if(window.confirm('비밀번호를 변경하시겠습니까?')){
            console.log(JSON.stringify({email:email, password:pwd}))
            axios.post('http://localhost:8080/auth/changePwd', JSON.stringify({email:email, password:pwd}), {
                headers: {
                "Content-Type": `application/json`,
                },
            })
            .then(() => {
                alert('변경된 비밀번호로 로그인 해 주세요');
                navigate('/index');
            })
            .catch(error => {console.log(error)})
        }
    }

    return (
        <div className='container'>
            <div className='changePwdForm'>
                <div>
                    <span>
                        <input type='password' name='pwd' value={ pwd } onChange={ e => setPwd(e.target.value) } placeholder='비밀번호 입력'/>
                        <div>{pwdDiv}</div>
                    </span>
                </div>&nbsp;
                <div>
                    <span>
                        <input type='password' name='repwd' value={ rePwd } onChange={ e => setRePwd(e.target.value) } placeholder='재확인 비밀번호 입력'/>
                        <div>{rePwdDiv}</div>
                    </span>
                </div>&nbsp;
                <div>
                    <button style={{ cursor : 'pointer' }} className='changePwdBtn' onClick={ changePwd }><div className='changePwdText'>비밀번호 변경</div></button>
                </div>
            </div>
        </div>
    );
};

export default ChangePwd;