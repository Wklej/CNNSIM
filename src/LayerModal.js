import { Modal } from "react-bootstrap";

const LayerModal = ({show, handleClose, body}) => {

    return ( 
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            { body }
            <Modal.Footer>
            <button className="btn-secondary" onClick={handleClose}>
                Close
            </button>
            <button className="btn-primary" onClick={handleClose}>
                Save Changes
            </button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default LayerModal;