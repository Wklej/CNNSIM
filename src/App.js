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
        </div>

    );
}

export default App;
