import { useState, useContext } from "react";
import Collapse from 'react-bootstrap/Collapse'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ExplainModal from "../Modal/ExplainModal";
import { paramContext } from "../Contexts/paramContext";

const Dropout = ({id}) => {

    const [open, setOpen] = useState(false);

    const [showModal, setModalShow] = useState(false);
    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);

    const getValues = useContext(paramContext)
    
    const [values, setValues] = useState(getValues(id, 'drop'))


    const [button_disabled, setButton_disabled] = useState(true)
    
    const orangeBg = {backgroundColor: "#e38627"}
    const dotStyle = {backgroundColor: "#212121", border: "solid 2px #212121"}
    const handleStyle = {backgroundColor: "#e38627", border: "solid 2px #212121"}

    return ( 
        <div>
        <div className="btn-group" role="group">
            <button className="btn btn-orange" name={'drop' + id} disabled={!button_disabled} onClick={handleModalShow}>Dropout</button>
            <ExplainModal show={showModal} handleClose={handleModalClose} type={'dropout'} />
            <button className="btn btn-orange" aria-controls="collapseImages" disabled={!button_disabled}
                    aria-expanded={open} name={'drop' + id} id={'drop' + id} onClick={() => setOpen(!open)}>
                x
            </button>
        </div>
            <Collapse in={open}>
                <div id="collapseImages">
                    <p></p>
                    <Slider railStyle={orangeBg} trackStyle={orangeBg} dotStyle={dotStyle} handleStyle={handleStyle}
                            min={1} max={2} dots={true} marks={{1:0, 2:30}} value={values / 20} />
                    {/* Empty paragraph to avoid numbers to overlap switch */}
                    <p></p>
                </div>
            </Collapse>
        </div>
     );
}
 
export default Dropout;