import Layer from './Layer';
import Output from './Output';

const Workflow = ({numLayers}) => {
    return ( 
        <div className="container my-2">
          <div className="row flex-nowrap">
            <div className="col-1 p-3 bg-secondary text-light">input</div>
            
            {/* mid layers */}
            <Layer num={numLayers} />

            <div className="col-1 p-3 bg-info text-light">flatten</div>
            <div className="col-1 p-3 bg-danger text-light">fully</div>
            <div className="col-2 p-3 bg-warning text-light">
              
              <Output/>
            </div>

          </div>
      </div>
     );
}
 
export default Workflow;