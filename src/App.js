import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col} from 'react-bootstrap'
import '../src/index'
import Layer from './Layer';

function App() {

  return (
    <div>
      <div className="container">
        <h2>Grid</h2>
        <div className="row">
          <div className="col-8 p-2 bg-primary text-ligh">layers slider</div>
          <div className="col-4 p-2 bg-primary text-ligh">epochs status</div>
        </div>
      </div>
      
      <div className="container my-2">
          <div className="row">
            <div className="col-1 p-3 bg-secondary text-light">input</div>
            {/* mid layers */}
            <Layer num={3} />

            <div className="col-1 p-3 bg-info text-light">flatten</div>
            <div className="col-1 p-3 bg-info text-light">fully</div>
            <div className="col-2 p-3 bg-warning text-light">output</div>

          </div>
      </div>

    </div>

  );
}

export default App;
