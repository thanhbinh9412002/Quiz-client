import React from 'react';
import { useState } from 'react';
import '../../scss/ManageQuiz.scss'
import Select from 'react-select';
import { FcAddImage } from "react-icons/fc";
import { postCreateNewQuiz } from '../../../../services/ApiFunction';

const options = [
  { value: 'EASY', label: 'EASY' },
  { value: 'MEDIUM', label: 'MEDIUM' },
  { value: 'HARD', label: 'HARD' },
];

const ManageQuiz = (props) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadImage = (event) =>{
        if(event.target && event.target.files && event.target.files[0]){
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
            }
    }

    const handleSubmitQuiz = async() =>{
        let res = await postCreateNewQuiz(description, name, type?.value , image)
        if(res && res.EC === 0){
            alert("gfdg")
        }
    }

  return (
    <div className='quiz-container'>
        <div className='title'>
            Manage Quiz
        </div>
        <hr/>
        <div className='add-new'>
            
        </div>
        <form >
            <fieldset className='border rounded-3 p-3'>
                <legend className='float-none w-auto px-3'>Add new quiz:</legend>
                <div className="form-floating mb-3">
                    <input type="text5" className="form-control" placeholder='Your quiz name'
                        value={name} onChange={(event)=>setName(event.target.value) }/>
                    <label >Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder='description ...'
                        value={description} onChange={(event)=>setDescription(event.target.value) }/>
                    <label >Description</label>
                </div>
                <div className='my-3'> 
                    <Select
                        defaultValue={type}
                        onChange={setType}
                        options={options}
                        placeholder={"Quiz type..."}
                    />
                </div>
                <div className='col-md-12'>
                    <label className="form-label label-upload" htmlFor='labelUpload'> <FcAddImage /> Upload File Image</label>
                    <input type="file" hidden id="labelUpload"
                            onChange={(event) => handleUploadImage(event)}/>
                </div>
                <div className='col-md-12 img-preview'>
                    { previewImage ? <img src={previewImage} alt="Image"/> : <span>Preview Image</span> }
                </div>
                <div className='mt-3'>
                    <button className='btn btn-warning' onClick={() =>handleSubmitQuiz()}>Save</button>
                </div>
            </fieldset>
        </form>
        <div className='list-detail'>

        </div>
    </div>
  )
}

export default ManageQuiz