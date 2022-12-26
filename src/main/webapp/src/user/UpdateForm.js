import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img02 from '../image/img2.png';
import style from '../css/UpdateForm.module.css';

const UpdateForm = () => {
    const [searchId, setSearchId] = useState('')
    const [resultDiv, setResultDiv] = useState('')
    const [sw, setSw] = useState(0)
    const [form, setForm] = useState({
        name: '',
        id: '',
        pwd: ''
    })
    const { name, id, pwd } = form
    const [nameDiv, setNameDiv] = useState('');
    const [pwdDiv, setPwdDiv] = useState('');

    const onSearch = (e) => {
        e.preventDefault()
        setResultDiv('')

        if(searchId){
        axios
            .get('http://localhost:8080/user/getUser', {params: { id: searchId }})
            .then((res) => {
                //setSearchId('')
                setForm(res.data ? res.data : {})
                setResultDiv(res.data ? '' : '아이디 없음')
                setSw(res.data ? 1 : 0)
                
                // res.data===null ?
                //     setForm({})|| setResultDiv('찾는아이디없다') || setSw(0)
                //     :
                //     setForm(res.data) || setResultDiv('') || setSw(1) 둘 다 사용 가능
            })
            .catch(err => console.log(err));
        }else{ 
            setResultDiv('아이디를 입력 해 주세요')
            setSw(0)
        }
    }

    const onInput = (e) => {
        const { name, value } = e.target
        
        setForm({
            ...form,
            [name]: value
        })
    }

    const onUpdateSubmit = (e) => {
        e.preventDefault()
        setNameDiv('')
        setPwdDiv('')

        var div = 1;
        if(!name && div === 1){
            setNameDiv('이름을 입력하세요')
            div = 0;
        }
        if(!pwd && div === 1){
            setPwdDiv('비밀번호를 입력하세요')
            div = 0;
        }

        if(div === 1 && window.confirm('회원정보를 수정하시겠습니까?')){
            axios.put('http://localhost:8080/user/update', null, { //params: form/ form으로 보내거나 객체로 보내거나
                    params: 
                    { 
                        id: id,
                        name: name,
                        pwd: pwd 
                    }
                 })
                 .then(() => {
                    alert('정보수정 성공');
                    navigate('/user/list');
                 })
                 .catch(error => {console.log(error)})
        }
    }

    const navigate = useNavigate()

    return (
        <div>
            <h1>
                <Link to='/'>
                    <img src={img02} width='100' height='100' />
                </Link>
                회원정보 수정
            </h1>
            <hr/>

            <p>
                수정 할 아이디 입력 : <input type="text" name='searchId' value={ searchId } onChange={e => setSearchId(e.target.value)} placeholder="아이디를 입력하세요" />&nbsp;
                <input type="button" value="검색" onClick={ onSearch }/>
            </p>
            <div className={style.resultDiv}>{ resultDiv }</div>

            {sw === 1 && (<form className={ style.updateForm } >
            <table>
                <tbody>
                <tr>
                    <td width="80px" align="center">이름</td>
                    <td>
                        <input type="text" name='name' value={ name } onChange={ onInput } style={{width: '150px'}} />
                        <div id='nameDiv'>{ nameDiv }</div>
                    </td>
                </tr>
            
                <tr>
                    <td align="center">아이디</td>
                    <td>
                        <input type="text" name='id' value={ id } onChange={ onInput } style={{width: '150px'}} readOnly="readonly" />
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
                        <button onClick={ onUpdateSubmit }>수정</button>
                        <button onClick={ onSearch }>취소</button> {/* onReset에 onSearch를 사용해서 해도 됨 */}
                    </td>
                </tr> 
                </tbody>
            </table>
            </form>)}
        </div>
    );
};

export default UpdateForm;