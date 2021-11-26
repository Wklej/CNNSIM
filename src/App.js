import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col} from 'react-bootstrap'
import '../src/index'
import { useState } from "react";

import TopBar from './TopBar';
import Workflow from './Workflow';

function App() {

    // Utils for tracking slider value
    const [numLayers, setNumLayers] = useState(2)
    const handleSliderChange = (e) => {        
        setNumLayers(e.valueOf())
    }

    return (
        <div>
            <TopBar numLayers={numLayers} handleSliderChange={handleSliderChange} />      
            <Workflow numLayers={numLayers} />

            <hr />

            <div className="container">
                <div className="row">
                    <div className="col-5 bg-secondary">
                        <div className="col-1">asd</div>
                        <div className="col-1">asd</div>
                        <div className="col-1">asd</div>
                        <div className="col-1">asd</div>
                        <div className="col-1">asd</div>
                        <div className="col-1">asd</div>
                    </div>
                    <div className="col-5 bg-secondary">col5</div>
                    <div className="col-2 bg-secondary">col2</div>
                </div>
            </div>
            


        </div>

    );
}

export default App;
