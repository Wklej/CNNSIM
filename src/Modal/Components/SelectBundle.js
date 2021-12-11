import ExplainModal from '../ExplainModal';
import LayerModal from '../LayerModal';
import { useState } from 'react';
import { Modal } from "react-bootstrap";

const SelectBundle = ({values, modalType, label, update, id}) => {

    const [showModal, setModalShow] = useState(false);
    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);

    const Modal = () => {
        if (modalType === 'explain') {
            return(<ExplainModal show={showModal} handleClose={handleModalClose} type={label} />)
        } else if (modalType === 'layer') {
            return(
                <ExplainModal show={showModal} handleClose={handleModalClose} type={label} />
            )
        }
    }

    return ( 
        <div className="input-group input-group-sm">
            <button className="btn btn-outline-secondary btn-sm" onClick={handleModalShow}>{label}:</button>  
            { Modal() }
            <select className="form-select" name={label} value={values.loss} onChange={(e) => update(e, id)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>

     );
}
 
export default SelectBundle;