import LayerModal from "../LayerModal";
import Features from "../Components/Features";
import { useState, useContext } from "react";
import Dropout from "./Dropout";
import { paramContext } from "../../Contexts/paramContext";

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

    const getValues = useContext(paramContext)

    return ( 
        <div className="col-6">
            <div className="card border-dark text-center bgDarkCard" >
                <div className="card-body">
                    <ul className="list-group">
                        <button className="btn btn-orange mb-4" onClick={handleConvShow} id={'conv' + id}>conv {id}</button>
                        <LayerModal show={showConv} handleClose={handleConvClose} body={"conv"} id={id} />
                        <button className="btn btn-orange mb-4" onClick={handlePoolShow} id={'pool' + id}>pool</button>
                        <LayerModal show={showPool} handleClose={handlePoolClose} body={'pool'} id={id} />
                        <Dropout id={id} />
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