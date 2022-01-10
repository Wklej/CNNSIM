import { useState } from "react";
import ImageModal from "../ImageModal";

import dog1 from '../../Images/modelImages/dog1.jpg'
import dog2 from '../../Images/modelImages/dogo2.jpg'
import dog3 from '../../Images/modelImages/dogo4.jpg'
import letter1 from '../../Images/modelImages/1.png'
import letter2 from '../../Images/modelImages/2.png'
import letter3 from '../../Images/modelImages/3.png'

const ModelSet = ({modelID, handleModelChange, handleImageChange, setLossFunc}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [imgs] = useState(
            {
                1 : [dog1, dog2, dog3],
                2 : [letter1, letter2, letter3]
            }
        )

    const update = (e) => {
        handleModelChange(e)
        modelID === 1 ? setLossFunc('binary_crossentropy') :
                        setLossFunc('categorical_crossentropy')
    }

    return ( 
        <div className="btn-group" role="group">
            <input className="btn-check" type="radio" name="flexRadio" defaultChecked={modelID === 1}
                    id={modelID} onClick={(e) => update(e)} />
            <label className="btn btn-outline-dark mb-2" htmlFor={modelID}>Set {modelID}</label>
            <button className="btn btn-outline-dark mb-2" onClick={handleShow}>img</button>
            <ImageModal show={show} handleClose={handleClose}
                        handleImageChange={handleImageChange} images={imgs[modelID]} />
        </div>
     );
}
 
export default ModelSet;