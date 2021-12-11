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

    return ( 
        <div className="container my-2">
          <div className="row flex-nowrap">
            <div className="col-1">
              <Input />
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
            <div className="col-2 p-3 bg-warning">
              <Output acc={67} />
            </div>

          </div>
      </div>
     );
}
 
export default Workflow;