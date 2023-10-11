import React from 'react';
import Modal from 'react-modal';
import { Button, Form } from 'react-bootstrap';
import ModalProps from '../../types/ModalProps';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
  },
};

export default function ModalWindow(props: ModalProps) {
  const { isOpen, onAfterOpen, onRequestClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className="d-flex justify-content-between">
        <Button onClick={onRequestClose}>ADD</Button>
        <Button variant="danger" onClick={onRequestClose}>
          X
        </Button>
      </div>
      <div>
        <Form.Label className="mt-3" htmlFor="inputName">
          Name
        </Form.Label>
        <Form.Control type="text" id="inputName" />
        <Form.Label className="mt-3" htmlFor="inputDesc">
          Description
        </Form.Label>
        <Form.Control type="text" id="inputDesc" />
        <Form.Check
          className="mt-3"
          type="switch"
          id="custom-switch"
          label="Status Task"
        />
      </div>
    </Modal>
  );
}
