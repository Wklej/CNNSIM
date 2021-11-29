import Layer from './Layer';

const Workflow = ({numLayers}) => {
    return ( 
        <div className="container my-2">
          <div className="row">
            <div className="col-1 p-3 bg-secondary text-light">input</div>
            
            {/* mid layers */}
            {/* <div className="col-6"> */}
                <Layer num={numLayers} />
            {/* </div> */}

            <div className="col-1 p-3 bg-info text-light">flatten</div>
            <div className="col-1 p-3 bg-danger text-light">fully</div>
            <div className="col-2 p-3 bg-warning text-light">output</div>

          </div>
      </div>
     );
}
 
export default Workflow;