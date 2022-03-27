import ExplainModal from '../Modal/ExplainModal';
import { useState } from 'react';

const SelectBundle = ({label, update, id, optionValues, bundle_size, disabled}) => {

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
    
    const getOptionStyle = () => {
        const style = disabled ?  "form-select optionStyle" : "form-select"
        return style
    }

    return ( 
        <div className={getBundleClass()}>
            <button className="btn btn-outline-orange" onClick={handleModalShow}>
                <span style={bundle_size === 'md' ? buttonStyle2 : buttonStyle}>{label}:</span>
            </button>  
            <ExplainModal show={showModal} handleClose={handleModalClose} type={label} />
            <select className={getOptionStyle()} name={label} disabled={disabled} onChange={(e) => update(e, id)} >
                {options()}
            </select>
        </div>

     );
}
 
export default SelectBundle;