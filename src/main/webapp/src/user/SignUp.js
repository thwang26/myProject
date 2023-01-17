import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import img02 from '../image/img2.png';
import '../css/SignUp.css';

const SignUp = () => {
    const [form, setForm] = useState({
        id: '',
        password: '',
        name: '',
        email: ''
    })
    const { id, password, name, email } = form
    
    const [idDiv, setIdDiv] = useState('');
    const [pwdDiv, setPwdDiv] = useState('');
    const [rePwdDiv, setRePwdDiv] = useState('');
    const [nameDiv, setNameDiv] = useState('');
    const [rePwd, setRePwd] = useState('');
    const [ok, setOk] = useState(0);
    const [emailConfirm, setEmailConfirm] = useState(0);
    const [verifyCode, setVerifyCode] = useState('');
    const navigate = useNavigate();

    //아이디 정규식
    const idTest = /^(?=.*[a-z])[-a-z0-9_]{5,15}$/;
    // 비밀번호 정규식
    const pwdTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    // 이메일 검사 정규식
    const emailTest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const onInput = (e) => {
        const { name, value } = e.target
        
        setForm({
            ...form,
            [name]: value
        })
    }

    const isExistId = () => {
        if(id){
            if(!idTest.test(id)){
                setIdDiv('5~15자의 영문 소문자, 숫자와 일부 특수기호(_),(-)만 사용 가능합니다.')
            }else{
                axios
                .get('http://localhost:8080/auth/isExistId', {params: {id:id}})
                .then((res) => {
                    setIdDiv(res.data === 'non_exist' ? '사용 가능' : '이미 가입된 아이디입니다')
                    setOk(res.data === 'non_exist' ? 1 : 0)
                })
                .catch(err => console.log(err));
            }
        }else setIdDiv('아이디를 입력하세요')
    }//아이디 중복체크, 정규식
    
    const sendCode = () => {
        if(window.confirm(`${email}로 인증번호를 전송할까요?`)){
            axios
            .get('http://localhost:8080/auth/isExistEmail', {params: {email:email}})
            .then(res => {
                if(res.data === 'non_exist'){
                    axios
                    .post('http://localhost:8080/email/sendCode', null, {params:{email}})
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err));
                } else alert('이미 가입된 이메일입니다');
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
                    setEmailConfirm(1)
                    alert('인증이 완료되었습니다')
                }
                else alert('인증번호가 일치하지 않습니다')
            })
            .catch(err => console.log(err));
        }
    }//이메일 인증번호 검증

    const onWriteSubmit = (e) => {
        e.preventDefault()
        setIdDiv('')
        setPwdDiv('')
        setRePwdDiv('')
        setNameDiv('')

        console.log('ok:'+ok)//아이디 중복체크
        console.log('emailConfirm:'+emailConfirm)//이메일 인증

        if(!id){
            setIdDiv('아이디를 입력하세요')
        }else if(!idTest.test(id)){
            setIdDiv('5~15자의 영문 소문자, 숫자와 일부 특수기호(_),(-)만 사용 가능합니다.')
        }else if(!password){
            setPwdDiv('비밀번호를 입력하세요')
        }else if(!pwdTest.test(password)){
            setPwdDiv('8~15자 영문 대 소문자, 숫자, 특수문자를 사용하세요.')
        }else if(!rePwd&&password){
            setRePwdDiv('재확인 비밀번호를 입력해주세요');
        }else if(password !== rePwd&&password){
            setRePwdDiv('비밀번호가 다릅니다');
        }else if(!name){
            setNameDiv('이름을 입력하세요')
        }else if(email == '' || !emailTest.test(email)){
            alert("올바른 이메일 주소를 입력하세요")
        }else if(ok === 1 && emailConfirm === 1){
            alert('가즈아')
            console.log(JSON.stringify(form))
            axios.post('http://localhost:8080/auth/register', JSON.stringify(form), {
                headers: {
                "Content-Type": `application/json`,
                },
            })
            .then(() => {
                alert('회원가입 성공');
                navigate('/index');
            })
            .catch(error => {console.log(error)})
        }
    }//회원가입, 정규식
    
    return (
        <div className='container'>
            <div className='writeForm'>
                <div>
                    <h3><label>아이디</label></h3>
                    <span>
                        <input type="text" id="id" name="id" value={id} onChange={onInput} onBlur={isExistId} maxLength="20"/>
                        <div>{idDiv}</div>
                    </span>
                </div>
                <div>
                    <h3><label>비밀번호</label></h3>
                    <span>
                        <input type="password" id="password" name="password" value={password} onChange={onInput} maxLength="20"/>
                        <div>{pwdDiv}</div>
                    </span>
                </div>
                <div>
                    <h3><label>재확인</label></h3>
                    <span>
                        <input type="password" id="repwd" name="repwd" value={rePwd} onChange={e => setRePwd(e.target.value)} maxLength="20"/>
                        <div>{rePwdDiv}</div>
                    </span>
                </div>
                <div>
                    <h3><label>이름</label></h3>
                    <span>
                        <input type="text" id="name" name="name" value={name} onChange={onInput} maxLength="20"/>
                        <div>{nameDiv}</div>
                    </span>
                </div>
                {/* <div>
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
                </div> */}
                <div id="mobDiv">
                    <h3><label>이메일</label></h3>
                    <div>
						<span>
							<input type="email" id="email" name="email" onChange={onInput} value={email} placeholder="이메일 입력" maxLength="20"/>
						</span>
                        <span>
                            <input type="text" value={verifyCode} onChange={e => setVerifyCode(e.target.value)} placeholder='코드입력'/>
                        </span>
                        <span>
                            <input type='button' value='인증번호 전송' onClick={sendCode}/>
                        </span>
                        <span>
                            <input type='button' value='인증번호 확인' onClick={confirmEmail}/>
                        </span>
                    </div>
                </div>
                <span><input type='button' value='회원가입' onClick={onWriteSubmit}/></span>
            </div>
        </div>
    );
};

export default SignUp;