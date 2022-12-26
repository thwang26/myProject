import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import img02 from '../image/img2.png';
import style from '../css/WriteForm.module.css';

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
        <>
            <h1>
                <Link to='/'>
                    <img src={img02} width='100' height='100' />
                </Link>
                회원가입
            </h1>
            <hr/>
            {/* <table border="1">
                <tbody>
                <tr>
                    <td width="80px" align="center">이름</td>
                    <td>
                        <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} style={{width: '150px'}} />
                        <div style={{color: 'red', fontSize: '15px'}}>{ nameDiv }</div>
                    </td>
                </tr>
                
                <tr>
                    <td align="center">아이디</td>
                    <td>
                        <input type="text" name="id" id="id" onChange={e => setId(e.target.value)} onBlur={ isExistId } style={{width: '150px'}} />
                        <div style={{color: color, fontSize: '15px'}}>{ idDiv }</div>
                    </td>
                </tr>
                
                <tr>
                    <td align="center">비밀번호</td>
                    <td>
                        <input type="password" name="pwd" id="pwd" onChange={e => setPwd(e.target.value)} style={{width: '150px'}} />
                        <div style={{color: 'red', fontSize: '15px'}}>{ pwdDiv }</div>
                    </td>
                </tr>
                
                <tr>
                    <td colSpan='2' align="center">
                        <input type="button" value="등록" id="writeBtn" onClick={submit} />
                        <input type="reset" value="취소" onClick={reset} />
                    </td>
                </tr>
                </tbody>   
            </table> */}
            <form className={ style.writeForm } >
            <table>
                <tbody>
                <tr>
                    <td align="center">이름</td>
                    <td>
                        <input type="text" name='name' value={ name } onChange={ onInput } style={{width: '150px'}} />
                        <div id='nameDiv'>{ nameDiv }</div>
                    </td>
                </tr>
                
                <tr>
                    <td align="center">아이디</td>
                    <td>
                        <input type="text" name='id' value={ id } onChange={ onInput } onBlur={ isExistId } style={{width: '150px'}} />
                        <div id='idDiv'>{ idDiv }</div>
                    </td>
                </tr>
                
                <tr>
                    <td align="center">비밀번호</td>
                    <td>
                        <input type="password" name='pwd' value={ pwd } onChange={ onInput } style={{width: '150px'}} />
                        <div id='pwdDiv'>{ pwdDiv }</div>
                    </td>
                </tr>
                
                <tr>
                    <td colSpan='2' align="center">
                        <button onClick={ onWriteSubmit }>등록</button>
                        <button onClick={ onReset } >취소</button>
                    </td>
                </tr>
                </tbody>   
            </table>
            </form>
        </>
    );
};

export default WriteForm;