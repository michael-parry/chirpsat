import {useState} from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Export = props => {
  const [modalClosed, setModalClosed] = useState({show: false})
  const handleClose = e => {
    setModalClosed({ show: false });
  };
  const handleShow = e => {
    e.preventDefault();
    setModalClosed({ show: true });
  };
    return (
      <form
        className="form-group col mb-2 col-sm-5 mb-sm-0 col-lg-2  flex-d justify-content-center align-items-center"
        id="sheet-update-form"
      >
        <button
          className="btn btn-primary btn-large btn-block focus-ring"
          // INFO: the `focus-ring` CSS class replaces the default :hover with a box-shadow that is more editable
          style={{boxShadow:'none'}}
          id="sheet-update-button"
          onClick={handleShow}
        >
          Export
        </button>
        <Modal
          show={modalClosed.show}
          size="sm"
          onHide={handleClose}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>All finished?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Download your channels and import the file into your{" "}
              <abbr title="customer programming software">CPS</abbr> to write
              them to your radio.
            </p>
            <button
              class="btn btn-success btn-block"
              onClick={handleClose}
            >
              Download
            </button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    );
  }
export default Export;