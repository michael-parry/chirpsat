import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

const HelpModal = props => {
  const [modalVisibility, setModalVisibility] = useState({show:false})
  const handleClose = e => {
    setModalVisibility({ show: false });
  };
  const handleShow = e => {
    setModalVisibility({show: true})
  };
    const { body, title } = props;
    return (
      <>
        <a
          variant="white"
          size="sm"
          className="m-1 p-1"
          href="#0"
          onClick={handleShow}
        >
          <FontAwesomeIcon
            icon={faQuestionCircle}
            size="xs"
            className="text-secondary"
          ></FontAwesomeIcon>
        </a>
        <Modal show={modalVisibility.show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{body}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default HelpModal;