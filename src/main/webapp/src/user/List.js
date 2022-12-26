import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import img02 from '../image/img2.png';

const List = () => {
    const [list, setList] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [searchOption, setSearchOption] = useState('name');

    useEffect(() => {
        axios.get('http://localhost:8080/user/getUserList')
             .then((res) => setList(res.data))
             .catch(err => console.log(err));
    }, []);

    const onSearch = () => {
        if(keyword){
            axios.get('http://localhost:8080/user/search', { //params: form/ form으로 보내거나 객체로 보내거나
                    params: { 
                        search: searchOption,
                        keyword: keyword
                    }
                })
                .then(res => setList(res.data))
                .catch(err => console.log(err));
        }
    }

    return (
        <div>
            <h1>
                <Link to='/'>
                    <img src={img02} width='100' height='100' />
                </Link>
                회원목록
            </h1>
            <hr/>
            <table border="1">
                <thead>
                    <tr>
                        <th width="150">이름</th>
                        <th width="150">아이디</th>
                        <th width="150">비밀번호</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td align='center'>{item.name}</td>
                                    <td align='center'>{item.id}</td>
                                    <td align='center'>{item.pwd}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div style={{ width: '450px', textAlign: 'center', margin: '30px' }}>
                <select name="searchOption"  value={ searchOption } onChange={e => setSearchOption(e.target.value) }>
                    <option value="name">이름</option>
                    <option value="id">아이디</option>
                </select>&nbsp;
                <input type="text" name="keyword" value={ keyword } onChange={e => setKeyword(e.target.value)}/>&nbsp;
                <button onClick={ onSearch } >검색</button>
            </div>
        </div>
    );
};

export default List;