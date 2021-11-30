import 'bootstrap/dist/css/bootstrap.css'
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
