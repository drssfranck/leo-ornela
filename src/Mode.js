
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const Mode = () =>{

    const [show, setShow] = useState(false);
    var i = 1;
    const handleClose = () => {setShow(false); console.log("demande de fermeture"+show); };
    const handleShow = () => {
        setShow(true);
        console.log()
    };
  
    return (<>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Télephone</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
    </>)
}

export default Mode;