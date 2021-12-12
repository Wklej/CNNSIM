import ExplainModal from '../ExplainModal';
import { useState } from 'react';

const SelectBundle = ({values, label, update, id}) => {

    const [showModal, setModalShow] = useState(false);
    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);

    return ( 
        <div className="input-group input-group-sm">
            <button className="btn btn-outline-secondary btn-sm" onClick={handleModalShow}>{label}:</button>  
            <ExplainModal show={showModal} handleClose={handleModalClose} type={label} />
            <select className="form-select" name={label} value={values[label]} onChange={(e) => update(e, id)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>

     );
}
 
export default SelectBundle;