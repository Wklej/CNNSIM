import ExplainModal from '../ExplainModal';
import { useState } from 'react';

const SelectBundle = ({label, update, id, optionValues, bundle_size, ifPool}) => {

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

    const buttonStyle = {
        fontSize: "x-large",
        fontWeight: "bold"
    }
    
    const buttonStyle2 = {
        fontSize: "medium",
        fontWeight: "bold"
    }

    const getBundleClass = () => {
        if(bundle_size == 'md')
            return "input-group input-group-sm mb-2"
        else
            return "input-group input-group-lg mb-2"
    }
    
    return ( 
        <div className={getBundleClass()}>
            <button className="btn btn-outline-orange" onClick={handleModalShow}>
                <span style={bundle_size === 'md' ? buttonStyle2 : buttonStyle}>{label}:</span>
            </button>  
            <ExplainModal show={showModal} handleClose={handleModalClose} type={label} />
            <select className="form-select" name={label} onChange={(e) => update(e, id)}>
                {options()}
            </select>
        </div>

     );
}
 
export default SelectBundle;