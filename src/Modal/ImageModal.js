import { Modal } from "react-bootstrap";
import ImageSelection from "./Components/ImageSelection";

import dog1 from '../Images/dog1.jpg'
import dog2 from '../Images/dogo2.jpg'
import dog3 from '../Images/dogo4.jpg'


const ImageModal = ({show, handleClose, handleImageChange}) => {
    return ( 
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>Image selection</Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-evenly">
                        <ImageSelection handleChange={handleImageChange} handleClose={handleClose}
                                        imageID={4} imgPath={dog1} />
                        <ImageSelection handleChange={handleImageChange} handleClose={handleClose}
                                        imageID={5} imgPath={dog2} />
                        <ImageSelection handleChange={handleImageChange} handleClose={handleClose}
                                        imageID={6} imgPath={dog3} />
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