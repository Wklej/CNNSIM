import MidLayer from './Layers/MidLayer';
import Output from './Layers/Output';
import Input from './Layers/Input';
import Fully from './Layers/Fully';
import LayerModal from "./Modal/LayerModal";
import { useState } from "react";

const Workflow = ({numLayers}) => {

  const [showFlat, setFlatShow] = useState(false);

  const handleFlatShow = () => setFlatShow(true);
  const handleFlatClose = () => setFlatShow(false);

  //Params from Input to display features based on selection
  const [imageValue, setImageValue] = useState(1);
  const [modelValue, setModelValue] = useState(1);

  const handleModelChange = (e) => {
        setModelValue(document.getElementById(e.target.id).id)
  }

  const handleImageChange = (e) => {
      setImageValue(document.getElementById(e.target.id).id)
  }

    return ( 
        <div className="container my-2">
          <div className="row flex-nowrap">
            <div className="col-2 d-flex justify-content-center">
              <Input handleModelChange={handleModelChange} handleImageChange={handleImageChange} />
            </div>
            
            {/* mid layers */}
            <MidLayer num={numLayers} />

            <div className="col-1 me-4">
              <button className="btn btn-outline-secondary flattenButton" onClick={handleFlatShow}>{"FLATTEN"}</button>
              <LayerModal show={showFlat} handleClose={handleFlatClose} body={"flat"} />
            </div>
            <div className="col-2 me-4">
              <Fully />
            </div>
            <div className="col p-3 bg-warning">
              <Output acc={67} />
            </div>

          </div>
      </div>
     );
}
 
export default Workflow;