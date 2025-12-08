import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Export = (props) => {
  const [modalClosed, setModalClosed] = useState({ show: false });
  const handleClose = (e) => {
    setModalClosed({ show: false });
  };
  const handleShow = (e) => {
    e.preventDefault();
    setModalClosed({ show: true });
  };
  return (
    <>
      
        <button
          className="btn btn-primary focus-ring mb-2"
          // INFO: the `focus-ring` CSS class replaces the default :hover with a box-shadow that is more editable
          style={{ boxShadow: "none" }}
          id="sheet-update-button"
          onClick={handleShow}
          type="button"
        >
          Export
        </button>

      <Modal show={modalClosed.show} size="sm" onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>All finished?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Download your channels and import the file into your{" "}
            <abbr title="customer programming software">CPS</abbr> to write them
            to your radio.
          </p>
          <div className="d-grid gap-2">
            <button className="btn btn-success" onClick={handleClose}>
              Download
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Export;
