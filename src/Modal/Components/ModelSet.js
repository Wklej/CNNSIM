import { useState } from "react";
import ImageModal from "../ImageModal";

const ModelSet = ({id, handleModelChange, handleImageChange}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return ( 
        <div className="btn-group" role="group">
            <input className="btn-check" type="radio" name="flexRadio" id={id} onClick={(e) => handleModelChange(e)} />
            <label className="btn btn-outline-dark mb-2" htmlFor={id}>Set {id}</label>
            <button className="btn btn-outline-dark mb-2" onClick={handleShow}>img</button>
            <ImageModal show={show} handleClose={handleClose} handleImageChange={handleImageChange} />
        </div>
     );
}
 
export default ModelSet;