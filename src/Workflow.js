import MidLayer from './Layers/MidLayer';
import Output from './Layers/Output';
import Input from './Layers/Input';
import Fully from './Layers/Fully';
import Features from './Modal/Components/Features'
import LayerModal from "./Modal/LayerModal";
import { useState } from "react";

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
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-2 d-flex justify-content-center">
              {/* LEFT PANEL */}
              <Input handleSliderChange={handleSliderChange} handleModelChange={handleModelChange} 
                    handleImageChange={handleImageChange} setLossFunc={setLossFunc} numLayers={numLayers} 
                    handlePlus={handlePlus} handleMinus={handleMinus} status={status} compare={compare} />
            </div>
            
            {/* mid layers */}
            <div className="col-4">
              <div className="row">
                  <MidLayer num={numLayers} />
                  {/* <button className="btn btn-primary mt-2" onClick={handleFeaturesShow} >Features</button>
                  <Features show={showFeatures} handleClose={handleFeaturesClose} numLayers={numLayers} /> */}
              </div>
            </div>
            <div className="col-1 me-4">
              <button className="btn btn-outline-secondary flattenButton" onClick={handleFlatShow}>{"FLATTEN"}</button>
              <LayerModal show={showFlat} handleClose={handleFlatClose} body={"flat"} />
            </div>
            <div className="col-2 me-4">
              <Fully setDefautFully={setDefautFully} />
            </div>
            <div className="col p-3 bg-warning">
              <Output acc={accuracy} loss={loss} lossFunc={lossFunc} />
            </div>

          </div>
      </div>
     );
}
 
export default Workflow;