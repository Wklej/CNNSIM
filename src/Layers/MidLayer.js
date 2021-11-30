import { useState } from "react";
import LayerModal from "../Modal/LayerModal";
import Features from "../Modal/Components/Features";

const MidLayer = ({num}) => {

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
    const divs = () => {
        let array = [];
        for (let index = 0; index < num; index++) {
            array.push(
                <div className="col">
                    <div className="card border-dark text-center" >
                        <div className="card-body">
                            <ul className="list-group">
                                <button className="btn btn-primary" onClick={handleConvShow} id={'conv' + index}>conv</button>
                                <div className="form-check form-switch">
                                    <input type="checkbox" className="form-check-input" id={'conv' + index} onChange={(e) => handleDisableConv(e)} />
                                </div>
                                <LayerModal show={showConv} handleClose={handleConvClose} body={"conv"} />
                                <button className="btn btn-primary" onClick={handlePoolShow} id={'pool' + index}>pool</button>
                                <div className="form-check form-switch">
                                    <input type="checkbox" className="form-check-input" id={'pool' + index} onChange={(e) => handleDisablePool(e)} />
                                </div>
                                <LayerModal show={showPool} handleClose={handlePoolClose} body={'pool'} />
                            </ul>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" onClick={handleFeaturesShow} id={'feat' + index}>Features</button>
                            <Features show={showFeatures} handleClose={handleFeaturesClose} />
                        </div>
                    </div>
                </div>
            )
        }
        return array
    }

    return ( 
        divs()
     );
}
 
export default MidLayer;