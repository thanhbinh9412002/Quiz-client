import React ,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

const ModalResult = (props) => {
  const {show, setShow, dataModalResult} = props;

  const handleClose = () => setShow(false);
  
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} size='xl' backdrop='static' >
        <Modal.Header closeButton>
          <Modal.Title>Your Result ...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>Total questions: <b>{dataModalResult.countTotal}</b></div>
            <div>Total Correct answer: <b>{dataModalResult.countCorrect}</b> </div>
        </Modal.Body> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Show answers
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalResult;