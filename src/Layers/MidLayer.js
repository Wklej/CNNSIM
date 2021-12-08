import { useState } from "react";
import LayerModal from "../Modal/LayerModal";
import Features from "../Modal/Components/Features";
import LayerCard from "../Modal/Components/LayerCard";

const MidLayer = ({num}) => {

    // const [showConv, setConvShow] = useState(false);
    // const [showPool, setPoolShow] = useState(false);
    // const [showFeatures, setShowFeatures] = useState(false);

    // const handleConvShow = () => setConvShow(true);
    // const handleConvClose = () => setConvShow(false);
    // const handlePoolShow = () => setPoolShow(true);
    // const handlePoolClose = () => setPoolShow(false);
    // const handleFeaturesShow = () => setShowFeatures(true);
    // const handleFeaturesClose = () => setShowFeatures(false);

    // const handleDisableConv = (e) => {
    //     const btnHandler = document.getElementById(e.target.id)
    //     btnHandler.disabled = !btnHandler.disabled
    // }
    // const handleDisablePool = (e) => {
    //     const btnHandler = document.getElementById(e.target.id)
    //     btnHandler.disabled = !btnHandler.disabled
    // }

    const [showConv2, setConv2Show] = useState(false);
    const handleConv2Show = () => setConv2Show(true);
    const handleConv2Close = () => setConv2Show(false);

    var stateArray = [false, false, false]
    const [showConvTest, setConvShowTest] = useState(stateArray);

    const divs = () => {
        let array = [];
        for (let index = 0; index < num; index++) {
            // stateArray[index] = true
            array.push(
                    <LayerCard
                        id={index}
                    />
            )
        }


        // array.push(
        //     <div className="col">
        //             <div className="card border-dark text-center" >
        //                 <div className="card-body">
        //                     <ul className="list-group">
        //                         <button className="btn btn-primary" onClick={handleConv2Show} id={'conv' + 9}>conv</button>
        //                         <div className="form-check form-switch">
        //                             <input type="checkbox" className="form-check-input" id={'conv' + 9} onChange={(e) => handleDisableConv(e)} />
        //                         </div>
        //                         <LayerModal show={showConv2} handleClose={handleConv2Close} body={"conv"} id={9} />
        //                         <button className="btn btn-primary" onClick={handlePoolShow} id={'pool' + 9}>pool</button>
        //                         <div className="form-check form-switch">
        //                             <input type="checkbox" className="form-check-input" id={'pool' + 9} onChange={(e) => handleDisablePool(e)} />
        //                         </div>
        //                         <LayerModal show={showPool} handleClose={handlePoolClose} body={'pool'} />
        //                     </ul>
        //                 </div>
        //                 <div className="card-footer">
        //                     <button className="btn btn-primary" onClick={handleFeaturesShow} id={'feat' + 9}>Features</button>
        //                     <Features show={showFeatures} handleClose={handleFeaturesClose} />
        //                 </div>
        //             </div>
        //         </div>
        // )

        // {setConvShowTest()}

        return array
    }

    return ( 
        divs()
     );
}
 
export default MidLayer;