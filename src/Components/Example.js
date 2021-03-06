import React  from 'react'
import {Modal,Button} from "react-bootstrap"

export default function Example(props) {
    return (
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Release : {props.Release}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Rating : {props.Rating}</h4>
          <p>
            {props.overview}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  