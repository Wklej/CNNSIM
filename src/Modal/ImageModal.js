import { Modal } from "react-bootstrap";

const ImageModal = ({show, handleClose}) => {
    return ( 
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>Image selection</Modal.Header>
                <Modal.Body>
                    images to select
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
     );
}
 
export default ImageModal;