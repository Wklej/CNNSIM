import MidLayer from './Layers/MidLayer';
import Output from './Layers/Output';
import Input from './Layers/Input';
import Fully from './Layers/Fully';
import Features from './Modal/Components/Features'
import ExplainModal from './Modal/ExplainModal';
import { useState } from "react";
import './Workflow.css'
import Generator from './Modal/Components/Generator';

const Workflow = ({numLayers, handleSliderChange, handleImageChange, handleModelChange, lossFunc, resetSliderValue,
                    setLossFunc, outputs, handlePlus, handleMinus, status, compare, setGenVals, allValsUpdate}) => {

  const [showFlat, setFlatShow] = useState(false);

  const handleFlatShow = () => setFlatShow(true);
  const handleFlatClose = () => setFlatShow(false);

  //Features
  // const [showFeatures, setShowFeatures] = useState(false);

  // const handleFeaturesShow = () => setShowFeatures(true);
  // const handleFeaturesClose = () => setShowFeatures(false);

  const [showMid, setShowMid] = useState(false)
  const handleSetShowMid = () => setShowMid(true)

    return ( 
        <div className="container-fluid min-vh-100 bgDark">
          <div className="row flex-nowrap">
            <div className="col-2 d-flex justify-content-center">
              {/* LEFT PANEL */}
              <Input handleSliderChange={handleSliderChange} handleModelChange={handleModelChange} 
                    handleImageChange={handleImageChange} setLossFunc={setLossFunc} numLayers={numLayers} 
                    handlePlus={handlePlus} handleMinus={handleMinus} status={status} compare={compare}
                    setShowMid={setShowMid} setGenVals={setGenVals} resetSliderValue={resetSliderValue} showMid={showMid} />
            </div>
            
            {/* mid layers */}
            <div className="col-4 bgDarkLayer">
              <div className="row min-vh-100 justify-content-center align-items-center">
                  
                  {!showMid && <Generator setShowMid={handleSetShowMid} handleSliderChange={handleSliderChange} 
                                  setGenVals={setGenVals} numLayers={numLayers} allValsUpdate={allValsUpdate} />}
                  {showMid && <MidLayer num={numLayers} />}

                  {/* <button className="btn btn-primary mt-2" onClick={handleFeaturesShow} >Features</button>
                  <Features show={showFeatures} handleClose={handleFeaturesClose} numLayers={numLayers} /> */}
              </div>
            </div>
            <div className="col-1">
              <button className="btn btn-outline-orange flattenButton bgDarkCard" onClick={handleFlatShow}>{"FLATTEN"}</button>
              <ExplainModal show={showFlat} handleClose={handleFlatClose} type={"flat"} />
            </div>
            <div className="col me-3 bgDarkLayer ">
              <Fully />
            </div>

            <div className="col-3 bgDarkLayer">
              <Output outputs={outputs} lossFunc={lossFunc} />
            </div>

          </div>
      </div>
     );
}
 
export default Workflow;