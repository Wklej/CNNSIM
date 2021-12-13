import { Modal } from "react-bootstrap";
import ImageSelection from "./Components/ImageSelection";

const ImageModal = ({show, handleClose, handleImageChange}) => {
    return ( 
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>Image selection</Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-evenly">
                        <ImageSelection handleChange={handleImageChange} handleClose={handleClose} imageID={4} />
                        <ImageSelection handleChange={handleImageChange} handleClose={handleClose} imageID={5} />
                        <ImageSelection handleChange={handleImageChange} handleClose={handleClose} imageID={6} />
                    </div>
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