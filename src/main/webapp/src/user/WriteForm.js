import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import img02 from '../image/img2.png';
import '../css/WriteForm.css';

const WriteForm = () => {
    // const [name, setName] = useState('');
    // const [id, setId] = useState('');
    // const [pwd, setPwd] = useState('');
    
    // const [nameDiv, setNameDiv] = useState('');
    // const [idDiv, setIdDiv] = useState('');
    // const [pwdDiv, setPwdDiv] = useState('');
    // const [exist, setExist] = useState('');
    // const [color, setColor] = useState('');
    
    // const isExistId = event => {
    //     setIdDiv('')

    //     if(id){
    //         axios.post('http://localhost:8080/user/isExistId', null, {params: { id: id }})
    //         axios.get('http://localhost:8080/user/isExistId', {params: { id: id }}) get과 post의 형식이 다름
    //              .then((res) => {
    //                 setExist(res.data)
    //                 if(res.data === 'exist'){
    //                     setIdDiv('사용 불가');
    //                     setColor('red');
    //                 }
    //                 else{
    //                     setIdDiv('사용 가능');
    //                     setColor('blue');
    //                 }
    //              })//exist로 물어보면 안되고, res.data로 물어봐야됨(현재 isExistId를 호출할 당시 상황에서는 exist의 값이 없기때문?)
    //              .catch(err => console.log(err));
    //     }
    // };

    // const submit = () => {
    //     setNameDiv('');
    //     setIdDiv('');
    //     setPwdDiv('');

    //     if(!name)
    //         setNameDiv('이름을 입력하세요');
    //     else if(!id){
    //         setIdDiv('아이디를 입력하세요');
    //         setColor('red');
    //     }
    //     else if(!pwd)
    //         setPwdDiv('비밀번호를 입력하세요');
    //     else if(exist === 'exist')
    //         alert('현재 사용중인 아이디입니다');
    //     else if(window.confirm('등록하시겠습니까?')){
    //         axios.post('http://localhost:8080/user/write', null 
    //         {
    //             params: 
    //             { 
    //                 id: id,
    //                 name: name,
    //                 pwd: pwd 
    //             }
    //         })
    //         .then(() => {
    //              alert('등록을 성공하였습니다.')
    //              navigete('/user/list');
    //          })
    //         .catch(err => console.log(err));
    //     }
    // }

    // const reset = () => {
    //     setName('');
    //     setId('');
    //     setPwd('');
    // }

    const [form, setForm] = useState({
        name: '',
        id: '',
        pwd: ''
    })
    const { name, id, pwd } = form

    const [nameDiv, setNameDiv] = useState('');
    const [idDiv, setIdDiv] = useState('');
    const [pwdDiv, setPwdDiv] = useState('');
    const [ok, setOk] = useState(0);

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

    const navigate = useNavigate()

    return (
        <div className='container'>
            <div className='writeForm'>
                <div>
                    <h3><label>아이디</label></h3>
                    <span>
                        <input type="text" id="id" name="id" maxLength="20"/>
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
                    <h3><label for="phoneNo">휴대전화</label></h3>
                    <div>
						<span>
							<input type="tel" id="phoneNo" name="phoneNo" placeholder="전화번호 입력" aria-label="전화번호 입력" class="int" maxLength="16"/>
						</span>
                        <span>인증번호 받기</span>
                    </div>
                    <div id="authNoBox">
                        <span>
                            <input type="tel" id="authNo" name="authNo" placeholder="인증번호 입력하세요" maxLength="4"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WriteForm;