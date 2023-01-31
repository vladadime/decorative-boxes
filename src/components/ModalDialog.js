import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useStateContext } from '../contexts/ContextProvider';

const ModalDialog = ({children, title, modalContent, buttonActionLabel, onBtnAction}) => {
  const {resetFormValues} = useStateContext();
  const [isShow, invokeModal] = useState(false);
  const initModal = () => {
    return invokeModal(!false)
  }
  const closeModal = () => {
    return invokeModal(false)
  }
  return (
    <>
      <button className="border-0 bg-body text-primary py-0 fw-bold" onClick={initModal} >
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
          <Button variant="dark" onClick={() => {onBtnAction(); closeModal();}}>
            {buttonActionLabel}
          </Button>
          <Button variant="danger" onClick={() => {resetFormValues(); closeModal();}}>
            Zatvori
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default ModalDialog;