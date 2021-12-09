import LayerModal from "../LayerModal";
import Features from "../Components/Features";
import { useState } from "react";

const LayerCard = ({id}) => {

    const [showConv, setConvShow] = useState(false);
    const [showPool, setPoolShow] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);

    const handleConvShow = () => setConvShow(true);
    const handleConvClose = () => setConvShow(false);
    const handlePoolShow = () => setPoolShow(true);
    const handlePoolClose = () => setPoolShow(false);
    const handleFeaturesShow = () => setShowFeatures(true);
    const handleFeaturesClose = () => setShowFeatures(false);

    const handleDisableConv = (e) => {
        const btnHandler = document.getElementById(e.target.id)
        btnHandler.disabled = !btnHandler.disabled
    }
    const handleDisablePool = (e) => {
        const btnHandler = document.getElementById(e.target.id)
        btnHandler.disabled = !btnHandler.disabled
    }

    return ( 
        <div className="col">
            <div className="card border-dark text-center" >
                <div className="card-body">
                    <ul className="list-group">
                        <button className="btn btn-primary" onClick={handleConvShow} id={'conv' + id}>conv {id}</button>
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input" id={'conv' + id} onChange={(e) => handleDisableConv(e)} />
                        </div>
                        <LayerModal show={showConv} handleClose={handleConvClose} body={"conv"} id={id} />
                        <button className="btn btn-primary" onClick={handlePoolShow} id={'pool' + id}>pool</button>
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input" id={'pool' + id} onChange={(e) => handleDisablePool(e)} />
                        </div>
                        <LayerModal show={showPool} handleClose={handlePoolClose} body={'pool'} id={id} />
                    </ul>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={handleFeaturesShow} id={id}>Features</button>
                    <Features show={showFeatures} handleClose={handleFeaturesClose} />
                </div>
            </div>
        </div>
     );
}
 
export default LayerCard;