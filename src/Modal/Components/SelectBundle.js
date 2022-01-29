import ExplainModal from '../ExplainModal';
import { useState } from 'react';

const SelectBundle = ({values, label, update, id, optionValues}) => {

    const [showModal, setModalShow] = useState(false);
    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);

    const options = () => {
        let arr = []

        optionValues.map(v => {
            arr.push(
                <option className='optionStyle'>{v}</option>
            )
        })

        return arr
    }

    return ( 
        <div className="input-group input-group-lg">
            <button className="btn btn-outline-orange btn-sm" onClick={handleModalShow}>{label}:</button>  
            <ExplainModal show={showModal} handleClose={handleModalClose} type={label} />
            <select className="form-select" name={label} value={values[label]} onChange={(e) => update(e, id)}>
                {options()}
            </select>
        </div>

     );
}
 
export default SelectBundle;