import { Modal } from "react-bootstrap";
import ImageSelection from "./Components/ImageSelection";

const ImageModal = ({show, handleClose}) => {
    return ( 
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>Image selection</Modal.Header>
                <ImageSelection />
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