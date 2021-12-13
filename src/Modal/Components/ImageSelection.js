import { Modal } from "react-bootstrap";

const ImageSelection = ({id, handleChange}) => {    

    return ( 
        <Modal.Body>
            <input className="btn-check" type="radio" name="flexImageRadio" id={id} onClick={(e) => handleChange(e)} />
            <label className="btn btn-outline-dark mb-2" htmlFor={id}>Image {id}</label>
        </Modal.Body>
     );
}
 
export default ImageSelection;