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
                drop: 3
            },
            {   conv: {filters: '1', kernel: '1', activation: '1', stride: '1'},
                pool: {size: '1', stride: '1'},
                fully: {filters: '1', activation: '1'},
                drop: 3
            },
            {   conv: {filters: '1', kernel: '1', activation: '1', stride: '1'},
                pool: {size: '1', stride: '1'},
                fully: {filters: '1', activation: '1'},
                drop: 3
            },
            {   conv: {filters: '1', kernel: '1', activation: '1', stride: '1'},
                pool: {size: '1', stride: '1'},
                fully: {filters: '1', activation: '1'},
                drop: 3
            },
            {   conv: {filters: '1', kernel: '1', activation: '1', stride: '1'},
                pool: {size: '1', stride: '1'},
                fully: {filters: '1', activation: '1'},
                drop: 3
            },
            {   conv: {filters: '1', kernel: '1', activation: '1', stride: '1'},
                pool: {size: '1', stride: '1'},
                fully: {filters: '1', activation: '1'},
                drop: 3
            },
        ],
        output: {loss: '1', optimizer: '1'}
    })

    const handleLayerChange = (e, id, layerName) => {
        const temp = allVals
        
        if (layerName === 'conv')
            temp.layers[id].conv = {...temp.layers[id].conv, [e.target.name]: e.target.value}
        else if (layerName === 'pool')
            temp.layers[id].pool = {...temp.layers[id].pool, [e.target.name]: e.target.value}
        else if (layerName === 'fully')
            temp.layers[id].fully = {...temp.layers[id].fully, [e.target.name]: e.target.value}
        else if (layerName === 'output')
            temp.output = {...temp.output, [e.target.name]: e.target.value}
        
        setAllVals(temp)
    }

    const getValues = (id, layerName) => {
        if (layerName === 'conv') 
            return allVals.layers[id].conv
        else if (layerName === 'pool')
            return allVals.layers[id].pool
        else if (layerName === 'fully')
            return allVals.layers[id].fully
        else if (layerName === 'output')
            return allVals.output
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
