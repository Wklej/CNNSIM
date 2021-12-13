import { Modal } from "react-bootstrap";
import ImageSelection from "./Components/ImageSelection";
import { useState } from "react";

const ImageModal = ({show, handleClose, handleImageChange}) => {

    return ( 
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>Image selection</Modal.Header>
                <ImageSelection handleChange={handleImageChange} id={5} />
                <ImageSelection handleChange={handleImageChange} id={6} />
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