import LayerModal from "../LayerModal";
import Features from "../Components/Features";
import { useState, useContext } from "react";
import Dropout from "./Dropout";
import { paramContext } from "../../paramContext";

const LayerCard = ({id, ifLast}) => {

    const [showConv, setConvShow] = useState(false);
    const [showPool, setPoolShow] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);

    const handleConvShow = () => setConvShow(true);
    const handleConvClose = () => setConvShow(false);
    const handlePoolShow = () => setPoolShow(true);
    const handlePoolClose = () => setPoolShow(false);
    const handleFeaturesShow = () => setShowFeatures(true);
    const handleFeaturesClose = () => setShowFeatures(false);

    const getValues = useContext(paramContext)

    const [defaultValues, setDefaultValues] = useState(getValues(id, 'Default'))
    
    const handleDisableConv = (e) => {
        
        const btnHandler = document.getElementById(e.target.id)
        btnHandler.disabled = !btnHandler.disabled

        var temp = defaultValues
        
        if (!btnHandler.disabled)
            temp.conv = {filters: '32', kernel_size: '(2, 2)', activation: 'relu'}
        else
            temp.conv = {filters: null, kernel_size: null, activation: null}

        setDefaultValues(temp)
    }
    
    const handleDisablePool = (e) => {
        const btnHandler = document.getElementById(e.target.id)
        btnHandler.disabled = !btnHandler.disabled

        var temp = defaultValues
        
        if (!btnHandler.disabled)
            temp.pool = {pool_size: '(2, 2)', stride: '2'}
        else
            temp.pool = {pool_size: null, stride: null}

        setDefaultValues(temp)
    }

    return ( 
        <div className="col-6">
            <div className="card border-dark text-center bgDarkCard" >
                <div className="card-body">
                    <ul className="list-group">
                        <button className="btn btn-orange" onClick={handleConvShow} id={'conv' + id}>conv {id}</button>
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input" id={'conv' + id} onChange={(e) => handleDisableConv(e)} />
                        </div>
                        <LayerModal show={showConv} handleClose={handleConvClose} body={"conv"} id={id} />
                        <button className="btn btn-orange" onClick={handlePoolShow} id={'pool' + id}>pool</button>
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input" id={'pool' + id} onChange={(e) => handleDisablePool(e)} />
                        </div>
                        <LayerModal show={showPool} handleClose={handlePoolClose} body={'pool'} id={id} />
                        { !ifLast && <Dropout id={id} /> }
                    </ul>
                </div>
                <div className="card-footer">
                    <button className="btn btn-orange" onClick={handleFeaturesShow} id={id}>Features</button>
                    <Features show={showFeatures} handleClose={handleFeaturesClose} idx={id} />
                </div>
            </div>
        </div>
     );
}
 
export default LayerCard;