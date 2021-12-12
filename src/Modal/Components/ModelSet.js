import { useState } from "react";
import Collapse from 'react-bootstrap/Collapse'

const ModelSet = ({id, handleChange}) => {

    const [open, setOpen] = useState(false);

    const ChangeAndOpen = (e) => {
        handleChange(e);
        setOpen(!open);
    }

    return ( 
        <div>
            <input className="btn-check" type="radio" name="flexRadio" id={id} aria-controls="collapseImages"
                   aria-expanded={open} onClick={(e) => ChangeAndOpen(e)} />
            <label className="btn btn-outline-dark mb-2" htmlFor={id}>Set {id}</label>

            <Collapse in={open}>
                <div id="collapseImages">
                    images
                </div>
            </Collapse>
        </div>
     );
}
 
export default ModelSet;