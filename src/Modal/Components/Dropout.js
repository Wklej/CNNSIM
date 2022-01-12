import { useState, useContext } from "react";
import Collapse from 'react-bootstrap/Collapse'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ExplainModal from "../ExplainModal";
import { paramContext } from "../../paramContext";
import { testContext } from "../../testContext";

const Dropout = ({id}) => {

    const [open, setOpen] = useState(false);

    const [showModal, setModalShow] = useState(false);
    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);
    
    const handleChange = useContext(testContext)
    const getValues = useContext(paramContext)
    
    const [values, setValues] = useState(getValues(id, 'drop'))
    
    const update = (e, id) => {
        handleChange(e, id, 'drop')
        setValues(e.valueOf() * 10)
    }

    const handleDisableDrop = (e) => {
        const btnHandler = document.getElementsByName(e.target.id)
        
        if (btnHandler[1].disabled) {
            setValues(20)    
        } else setValues(0)
        
        btnHandler[0].disabled = !btnHandler[0].disabled
        btnHandler[1].disabled = !btnHandler[1].disabled
        setOpen(false)
    }
    
    return ( 
        <div>
        <div className="btn-group" role="group">
            <button className="btn btn-primary" name={'drop' + id} onClick={handleModalShow}>Dropout</button>
            <ExplainModal show={showModal} handleClose={handleModalClose} type={'dropout'} />
            <button className="btn btn-primary" aria-controls="collapseImages"
                    aria-expanded={open} name={'drop' + id} id={'drop' + id} onClick={() => setOpen(!open)}>
                x
            </button>
        </div>
            <Collapse in={open}>
                <div id="collapseImages">
                    <Slider min={1} max={2} dots={true} marks={{1:20, 2:40}}
                            value={values / 10} onChange={(e) => update(e, id)} />
                    {/* Empty paragraph to avoid numbers to overlap switch */}
                    <p></p>
                </div>
            </Collapse>
            <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id={'drop' + id} onChange={(e) => handleDisableDrop(e)} />
            </div>
        </div>
     );
}
 
export default Dropout;