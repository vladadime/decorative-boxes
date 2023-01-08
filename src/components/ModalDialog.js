import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalDialog = ({children, title, modalContent, buttonActionLabel, onBtnAction}) => {
  const [isShow, invokeModal] = useState(false);
  const initModal = () => {
    return invokeModal(!false)
  }
  const closeModal = () => {
    return invokeModal(false)
  }
  return (
    <>
      {/* <button className="border-0 bg-body text-primary py-0" onClick={initModal}>
        {children}
      </button> */}
      <button className="border-0 bg-body text-primary py-0" onClick={initModal}>
        {children}
      </button>
      <Modal show={isShow}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={onBtnAction}>
            {buttonActionLabel}
          </Button>
          <Button variant="danger" onClick={closeModal}>
            Zatvori
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default ModalDialog;