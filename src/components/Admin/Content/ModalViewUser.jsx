import React, {useEffect, useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import { FcImageFile } from "react-icons/fc";
import _ from 'lodash';

const ModalViewUser = (props) => {
  const {show, setShow, dataView} = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImage("");
    props.resetUpdateData();
  }
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(()=>{
    if(!_.isEmpty(dataView)){
        setEmail(dataView.email);
        setPassword(dataView.password);
        setUsername(dataView.username);
        setRole(dataView.role);
        setImage("");
        if(dataView.image){
            setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
        }
    }
  }, [dataView]);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} size='xl' backdrop='static' className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>View a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={email} disabled />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" value={password} disabled />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" value={username} disabled />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select className="form-select"  value={role} disabled>
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className='col-md-12'>
              <label className="form-label label-upload"> <FcImageFile /> File Image</label>
            </div>
            <div className='col-md-12 img-preview'>
                { previewImage ? <img src={previewImage} alt="Image"/> : <span>Preview Image</span> }
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalViewUser