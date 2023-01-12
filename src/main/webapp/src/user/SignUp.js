import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import img02 from '../image/img2.png';
import '../css/SignUp.css';

const SignUp = () => {
    const [form, setForm] = useState({
        id: '',
        pwd: '',
        name: '',
        birth: '',
        email: ''
    })
    const { id, pwd, name, birth, email } = form

    const [nameDiv, setNameDiv] = useState('');
    const [idDiv, setIdDiv] = useState('');
    const [pwdDiv, setPwdDiv] = useState('');
    const [ok, setOk] = useState(0);
    const [verifyCode, setVerifyCode] = useState('');

    const onInput = (e) => {
        const { name, value } = e.target
        
        setForm({
            ...form,
            [name]: value
        })
    }

    const onWriteSubmit = (e) => {
        e.preventDefault()
        setNameDiv('')
        setIdDiv('')
        setPwdDiv('')
        console.log(ok)

        var sw = 1;
        
        if(!name&&sw === 1){
            setNameDiv('이름을 입력하세요')
            sw = 0;
        }else if(!id&&sw === 1){
            setIdDiv('아이디를 입력하세요')
            sw = 0;
        }else if(!pwd&&sw === 1){
            setPwdDiv('비밀번호를 입력하세요')
            sw = 0;
        }else if(ok === 0)
            setIdDiv('다른 아이디를 입력하세요')
        else if(sw === 1 && ok === 1){
            axios.post('http://localhost:8080/user/write', null, { //params: form/ form으로 보내거나 객체로 보내거나
                    params: { 
                        name: name,
                        id: id,
                        pwd: pwd 
                    }
                 })
                 .then(() => {
                    alert('회원가입 성공');
                    navigate('/user/list');
                 })
                 .catch(error => {console.log(error)})
        }
    }

    const onReset = (e) => {
        e.preventDefault()

        setForm({
            name: '',
            id: '',
            pwd: ''
        })
    }

    const isExistId = () => {
        if(id){
            axios
            .get('http://localhost:8080/user/isExistId', {params: { id: id }})
            .then((res) => {
                setIdDiv(res.data === 'non_exist' ? '사용 가능' : '사용 불가능')
                setOk(res.data === 'non_exist' ? 1 : 0)
            })
            .catch(err => console.log(err));
        }
    }

    const sendCode = () => {

        if(window.confirm(`${email}로 인증번호를 전송할까요?`)){
            axios
            .post('http://localhost:8080/email/sendCode', null, {params:{email}})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        }
    }

    const confirmEmail = () => {
        if(verifyCode){
            axios
            .post('http://localhost:8080/email/confirmEmail', null, {params:{verifyCode}})
            .then(res => alert('인증되었습니다.'))
            .catch(err => console.log(err));
        }
    }

    const navigate = useNavigate()

    return (
        <div className='container'>
            <div className='writeForm'>
                <div>
                    <h3><label>아이디</label></h3>
                    <span>
                        <input type="text" id="id" name="id" value={id} onChange={onInput} maxLength="20"/>
                    </span>
                </div>
                <div>
                    <h3><label>비밀번호</label></h3>
                    <span>
                        <input type="password" id="pwd" name="pwd" maxLength="20"/>
                    </span>
                </div>
                <div>
                    <h3><label>재확인</label></h3>
                    <span>
                        <input type="password" id="repwd" name="repwd" maxLength="20"/>
                    </span>
                </div>
                <div>
                    <h3><label>이름</label></h3>
                    <span>
                        <input type="text" id="name" name="name" maxLength="20"/>
                    </span>
                </div>
                <div>
                    <h3><label>생년월일</label></h3>
                    <div>
                        <div className='birth'>
                            <span>
                                <input type="text" id="year" placeholder="년(4자)"  maxLength="4"/>
                            </span>
                        </div>
                        <div className='birth'>
                            <span>
                                <select id="month">
                                    <option value="">월</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                </select>
                            </span>
                        </div>
                        <div className='birth'>
                            <span>
                                <input type="text" id="day" placeholder="일" maxLength="2"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div id="mobDiv">
                    <h3><label>이메일</label></h3>
                    <div>
						<span>
							<input type="email" id="email" name="email" onChange={onInput} value={email} placeholder="이메일 입력" maxLength="20"/>
                            @
						</span>
                        <span>
                            <select>
                                <option>직접 입력</option>
                                <option>naver.com</option>
                                <option>daum.net</option>
                                <option>gmail.com</option>
                            </select>
                        </span>
                        <span><input type="text" value={verifyCode} onChange={e => setVerifyCode(e.target.value)} placeholder='코드입력'></input></span>
                        <span><input type='button' value='인증번호 전송' onClick={sendCode}/></span>
                        <span><input type='button' value='인증번호 확인' onClick={confirmEmail}/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;