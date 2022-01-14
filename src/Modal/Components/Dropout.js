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
        setValues(e.valueOf() * 20)
        handleChange(e, id, 'drop')
    }

    const [button_disabled, setButton_disabled] = useState(true)

    const handleDisableDrop = () => {
        setOpen(false)
        setButton_disabled(!button_disabled)

        if (!button_disabled)
            handleChange(null, id, 'dropDefault')
        else {
            handleChange(20, id, 'dropDefault')
            setValues(20)
        }
    }
    
    return ( 
        <div>
        <div className="btn-group" role="group">
            <button className="btn btn-primary" name={'drop' + id} disabled={button_disabled} onClick={handleModalShow}>Dropout</button>
            <ExplainModal show={showModal} handleClose={handleModalClose} type={'dropout'} />
            <button className="btn btn-primary" aria-controls="collapseImages" disabled={button_disabled}
                    aria-expanded={open} name={'drop' + id} id={'drop' + id} onClick={() => setOpen(!open)}>
                x
            </button>
        </div>
            <Collapse in={open}>
                <div id="collapseImages">
                    <Slider min={1} max={2} dots={true} marks={{1:20, 2:40}}
                            value={values / 20} onChange={(e) => update(e, id)} />
                    {/* Empty paragraph to avoid numbers to overlap switch */}
                    <p></p>
                </div>
            </Collapse>
            <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id={'drop' + id} onChange={() => handleDisableDrop()} />
            </div>
        </div>
     );
}
 
export default Dropout;