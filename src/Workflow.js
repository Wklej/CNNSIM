import Layer from './Layer';
import Output from './Output';
import Input from './Input';

const Workflow = ({numLayers}) => {
    return ( 
        <div className="container my-2">
          <div className="row flex-nowrap">
            <div className="col-1">
              <Input />
            </div>
            
            {/* mid layers */}
            <Layer num={numLayers} />

            <div className="col-1 me-4">
              <button className="btn btn-outline-secondary flattenButton">{"FLATTEN"}</button>
            </div>
            <div className="col-1 me-4">
              <button className="btn btn-outline-success flattenButton">{"FULLY"}</button>
            </div>
            <div className="col-2 p-3 bg-warning">
              <Output/>
            </div>

          </div>
      </div>
     );
}
 
export default Workflow;