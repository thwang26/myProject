import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './main/Index';
import DeleteForm from './user/DeleteForm';
import List from './user/List';
import UpdateForm from './user/UpdateForm';
import UploadForm from './user/UploadForm';
import WriteForm from './user/WriteForm';

const App = () => {
  return (
    <BrowserRouter>
      <>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path='/' element={ <Index />} />
          <Route path='/user/writeForm' element={ < WriteForm />} />
          <Route path='/user/list' element={ <List />} />
          <Route path='/user/updateForm' element={ <UpdateForm />} />
          <Route path='/user/deleteForm' element={ <DeleteForm />} />
          <Route path='/user/uploadForm' element={ <UploadForm />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;

/*
REST API                      axios
                              axios의 request method
POST : 데이터 등록 및 전송     axios.post()
GET : 데이터 조회             axios.get()
PUT : 데이터 수정             axios.put()
DELETE : 데이터 삭제          axios.delete()
*/