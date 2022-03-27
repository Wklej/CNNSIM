import { Modal } from "react-bootstrap";
import ImageSelection from "../Components/ImageSelection";

const ImageModal = ({show, handleClose, handleImageChange, images}) => {
    return ( 
        <>
            <Modal show={show} onHide={handleClose} size='md'>
                <Modal.Header>
                    <div className="cardFont">Select image to process</div>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-evenly">
                        <ImageSelection handleChange={handleImageChange} handleClose={handleClose}
                                        imageID={4} imgPath={images[0]} />
                        <ImageSelection handleChange={handleImageChange} handleClose={handleClose}
                                        imageID={5} imgPath={images[1]} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-orange" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
     );
}
 
export default ImageModal;