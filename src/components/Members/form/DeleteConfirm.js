import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './StyleDeletConfirm.css'

function DeleteConfirm(props) {
  return (
    <>
      <Modal show={props.showModal} onHide={props.closeDeleteModalHandler} className='delete-model'>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.closeDeleteModalHandler()}>
            Close
          </Button>
          <Button variant="danger" onClick={props.confirmDelete()} disabled={props.apiStatus==='pending'}>
            {props.apiStatus==='pending'?"...Deleting record":'ConfirmDelete'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteConfirm;
