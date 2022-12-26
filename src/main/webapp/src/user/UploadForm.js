import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import img02 from '../image/img2.png';
import axios from 'axios';

const UploadForm = () => {
    const imgRef = useRef("");
    // const [imgThumb, setImgThumb] = useState(null); // 파일 base64 - 미리보기
    // const [imgFile, setImgFile] = useState([]);	//파일 - 업로드
    const [file, setFile] = useState('');
    const [showImgSrc, setShowImgSrc] = useState('');
    const [uploadImgSrc , setUploadImgSrc] = useState();

    // const readFile = (e) => {
    //     setImgFile(e.target.files);
    //     setImgThumb([]);
    //     if (e.target.files[0]) {
    //         let reader = new FileReader();
    //         reader.readAsDataURL(e.target.files[0]);
    //         reader.onloadend = () => {
    //             setImgThumb(reader.result.toString());
    //         }
    //     }
    // }//내가 한 방법
    
    // const upload = async() => {
    //     const formData = new FormData();
    //     Object.values(imgFile).forEach((img) => formData.append("img", img));
    //     await axios({
    //             url: 'http://localhost:8080/user/upload2', 
    //             data: formData,
    //             method: 'POST',
    //             headers: {
    //                 'content-Type': `multipart/form-data`,
    //             },
    //         })
    //         .then(res => console.log(res)
    //             // res => {
    //             // console.log(res.data)
    //         // if(res.data){
    //         //     console.log(res.data)
    //         //     setImgFile(res.data)
    //         // }})
    //         //}
    //         )
    //         .catch(err => console.log(err));
    // }

    const readURL = (input) => {
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0])

        reader.onload = () => {
            console.log(input.files[0])
            setShowImgSrc(reader.result)
            setFile(input.files[0])
        }
    }

    const onUploadSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData
        formData.append('img', file)

        axios
        .post('http://localhost:8080/user/upload2', formData, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        })
        .then(res => setUploadImgSrc(res.data))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <h1>
                <Link to='/'>
                    <img src={img02} width='100' height='100' />
                </Link>
                사진 업로드
            </h1>
            <hr/>
            <form id="uploadForm">
                <img id="showImg" width="300" height="300" src={ showImgSrc } />
                
                <img id="camera" src='../image/camera.svg' width="50" height="50" alt="카메라" onClick={() => imgRef.current.click()} style={{cursor: 'pointer'}}/>
                <input type="file" name="img" id="img" style={{ visibility: 'hidden' }} ref={ imgRef } onChange={e => readURL(e.target) }/>
                <br/>
                <button onClick={ onUploadSubmit } >이미지 등록</button>
                <br/>
                <h4>이미지 등록 후 </h4>
                <img src={ uploadImgSrc } width="300" height="300" />
            </form>
        </div>
    );
};

export default UploadForm;