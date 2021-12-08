import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";

import TopBar from './TopBar';
import Workflow from './Workflow';

import { testContext } from './testContext';

function App() {

    // Utils for tracking slider value
    const [numLayers, setNumLayers] = useState(2)
    const handleSliderChange = (e) => {        
        setNumLayers(e.valueOf())
    }

    //global values to pass to context and use in grandchild components
    const [allVals, setAllVals] = useState({
        layers: [
            {conv: {filters: '1', kernel: '1', activation: '1', stride: '1'}, pool: 2, drop: 3},
            {conv: {filters: '2', kernel: '2', activation: '2', stride: '2'}, pool: 2, drop: 3},
            {conv: {filters: '0', kernel: '0', activation: '0', stride: '0'}, pool: 0, drop: 0},
            {conv: {filters: '0', kernel: '0', activation: '0', stride: '0'}, pool: 0, drop: 0},
            {conv: {filters: '0', kernel: '0', activation: '0', stride: '0'}, pool: 0, drop: 0},
            {conv: {filters: '0', kernel: '0', activation: '0', stride: '0'}, pool: 0, drop: 0},
        ]
    })

    const handleLayerChange = (e, id) => {
        const temp = allVals
        temp.layers[id].conv = {...temp.layers[id].conv, [e.target.name]: e.target.value}
        setAllVals(temp)
        console.log('After: ', allVals.layers[id].conv)
    }

    return (
        <div>
            <testContext.Provider value={handleLayerChange}>
                <TopBar numLayers={numLayers} handleSliderChange={handleSliderChange} />      
                <Workflow numLayers={numLayers} />
            </testContext.Provider>
        </div>

    );
}

export default App;
