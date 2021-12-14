import { useState } from "react";
import Collapse from 'react-bootstrap/Collapse'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ExplainModal from "../ExplainModal";

const Dropout = ({id}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    
    const handleValueChange = (e) => {        
        setValue(e.valueOf())
    }

    const [showModal, setModalShow] = useState(false);
    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);

    return ( 
        <div>
        <div className="btn-group" role="group">
            <button className="btn btn-primary" onClick={handleModalShow}>Dropout</button>
            <ExplainModal show={showModal} handleClose={handleModalClose} type={'dropout'} />
            <button className="btn btn-primary" aria-controls="collapseImages"
                    aria-expanded={open} id={'drop' + {id}} onClick={() => setOpen(!open)}>
                x
            </button>
        </div>
            <Collapse in={open}>
                <div id="collapseImages">
                    <Slider min={0} max={4} dots={true} marks={{0:0, 1:10, 2:20, 3:30, 4:50}}
                            value={value} onChange={(e) => handleValueChange(e)} />
                </div>
            </Collapse>
        </div>
     );
}
 
export default Dropout;