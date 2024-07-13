import React ,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {deleteUser} from '../../../services/ApiFunction';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
  const {show, setShow, dataDelete} = props;

  const handleClose = () => setShow(false);
  
  const handleSubmitDeleteUser = async() =>{
    let data = await deleteUser(dataDelete.id);
    if(data && data.EC === 0){
      toast.success(data.EM);
      handleClose();
      await props.fetchListUsers();
    }
    if(data && data.EC !== 0){
      toast.error(data.EM);
    }
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} size='xl' backdrop='static' >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete The User ?</Modal.Title>
        </Modal.Header>
        {/* //{dataDelete.email} */}
        <Modal.Body>Are you sure to delete this use. email = 
            <b>
                {dataDelete && dataDelete.email ? dataDelete.email : ""}
            </b> 
        </Modal.Body> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;