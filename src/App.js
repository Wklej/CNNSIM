import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";

import TopBar from './TopBar';
import Workflow from './Workflow';

import { testContext } from './testContext';
import { paramContext } from './paramContext'; 

function App() {

    // Utils for tracking slider value
    const [numLayers, setNumLayers] = useState(2)
    const handleSliderChange = (e) => {        
        setNumLayers(e.valueOf())
    }

    //global values to pass to context and use in grandchild components
    const [allVals, setAllVals] = useState({
        layers: [
            {   conv: {filters: '1', kernel: '1', activation: '1', stride: '1'},
                pool: {size: '1', stride: '1'},
                fully: {filters: '1', activation: '1'},
                drop: 10
            },
            {   conv: {filters: '1', kernel: '1', activation: '1', stride: '1'},
                pool: {size: '1', stride: '1'},
                fully: {filters: '1', activation: '1'},
                drop: 10
            },
            {   conv: {filters: '1', kernel: '1', activation: '1', stride: '1'},
                pool: {size: '1', stride: '1'},
                fully: {filters: '1', activation: '1'},
                drop: 10
            },
            {   conv: {filters: '1', kernel: '1', activation: '1', stride: '1'},
                pool: {size: '1', stride: '1'},
                fully: {filters: '1', activation: '1'},
                drop: 10
            },
            {   conv: {filters: '1', kernel: '1', activation: '1', stride: '1'},
                pool: {size: '1', stride: '1'},
                fully: {filters: '1', activation: '1'},
                drop: 10
            },
            {   conv: {filters: '1', kernel: '1', activation: '1', stride: '1'},
                pool: {size: '1', stride: '1'},
                fully: {filters: '1', activation: '1'},
                drop: 10
            },
        ],
        output: {loss: '1', optimizer: '1'}
    })

    const handleLayerChange = (e, id, layerName) => {
        const temp = allVals
        
        if (layerName !== 'output' && layerName !== 'drop')
            temp.layers[id][layerName] = {...temp.layers[id][layerName], [e.target.name]: e.target.value}
        else if (layerName === 'output')
            temp.output = {...temp.output, [e.target.name]: e.target.value}
        else if (layerName === 'drop')
            temp.layers[id].drop = e.valueOf() * 10
        
        setAllVals(temp)
    }

    const getValues = (id, layerName) => {
        if (layerName !== 'output') 
            return allVals.layers[id][layerName]

        else return allVals.output
    }

    return (
        <div>
            <testContext.Provider value={handleLayerChange}>
                <paramContext.Provider value={getValues}>
                    <TopBar numLayers={numLayers} handleSliderChange={handleSliderChange} />      
                    <Workflow numLayers={numLayers} />
                </paramContext.Provider>
            </testContext.Provider>
        </div>

    );
}

export default App;
