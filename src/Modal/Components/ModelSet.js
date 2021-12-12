import { useState } from "react";
import ImageModal from "../ImageModal";

const ModelSet = ({id, handleChange}) => {

    const [open] = useState(false);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return ( 
        <div className="btn-group" role="group">
            <input className="btn-check" type="radio" name="flexRadio" id={id} aria-controls="collapseImages"
                aria-expanded={open} onClick={(e) => handleChange(e)} />
            <label className="btn btn-outline-dark mb-2" htmlFor={id}>Set {id}</label>
            <button className="btn btn-outline-dark mb-2" onClick={handleShow}>img</button>
            <ImageModal show={show} handleClose={handleClose} />
        </div>
     );
}
 
export default ModelSet;