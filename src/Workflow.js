import MidLayer from './Layers/MidLayer';
import Output from './Layers/Output';
import Input from './Layers/Input';
import Fully from './Layers/Fully';
import Features from './Modal/Components/Features'
import ExplainModal from './Modal/ExplainModal';
import { useState } from "react";
import './Workflow.css'

const Workflow = ({numLayers, handleSliderChange, handleImageChange, handleModelChange, lossFunc,
                    setLossFunc, setDefautFully, accuracy, loss, handlePlus, handleMinus, status, compare}) => {

  const [showFlat, setFlatShow] = useState(false);

  const handleFlatShow = () => setFlatShow(true);
  const handleFlatClose = () => setFlatShow(false);

  //Features
  // const [showFeatures, setShowFeatures] = useState(false);

  // const handleFeaturesShow = () => setShowFeatures(true);
  // const handleFeaturesClose = () => setShowFeatures(false);

    return ( 
        <div className="container-fluid min-vh-100 bgDark">
          <div className="row flex-nowrap">
            <div className="col-2 d-flex justify-content-center">
              {/* LEFT PANEL */}
              <Input handleSliderChange={handleSliderChange} handleModelChange={handleModelChange} 
                    handleImageChange={handleImageChange} setLossFunc={setLossFunc} numLayers={numLayers} 
                    handlePlus={handlePlus} handleMinus={handleMinus} status={status} compare={compare} />
            </div>
            
            {/* mid layers */}
            <div className="col-4 bgDarkLayer">
              <div className="row">
                  <MidLayer num={numLayers} />
                  {/* <button className="btn btn-primary mt-2" onClick={handleFeaturesShow} >Features</button>
                  <Features show={showFeatures} handleClose={handleFeaturesClose} numLayers={numLayers} /> */}
              </div>
            </div>
            <div className="col-1">
              <button className="btn btn-outline-orange flattenButton bgDarkLayer" onClick={handleFlatShow}>{"FLATTEN"}</button>
              <ExplainModal show={showFlat} handleClose={handleFlatClose} type={"flat"} />
            </div>
            <div className="col me-3 bgDarkLayer ">
              <Fully setDefautFully={setDefautFully} />
            </div>
            <div className="col-3 bgDarkLayer">
              <Output acc={accuracy} loss={loss} lossFunc={lossFunc} />
            </div>

          </div>
      </div>
     );
}
 
export default Workflow;