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
    const [convValues, setConvValues] = useState({
        filters: '1', kernel: '1', activation: '1', stride: '1'
    })

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

    const handleConvChange = (e) => {
        setConvValues( vals => {
            return { ...vals, [e.target.name]: e.target.value}
        })
    }

    const handleLayerChange = (e, id) => {
        console.log(id)
        console.log(
            allVals.layers[1]
        )

        // setAllVals( vals => {
        //     return { ...vals.layers[id], [e.target.name]: e.target.value}
        // })
    }

    const handleSetLayers = (id, value) => {
        const temp = allVals
        temp.layers[id].conv.filters = value
        setAllVals(temp)
        console.log('After: ', allVals)
    }

    var test = {
        layers: [
            {conv: [{filters: 32}, {stride: '2x2'}], pool: 2, drop: 3},
            {conv: [{filters: 64}, {stride: '4x4'}], pool: 2, drop: 3},
        ],
        fully: [
            {x: 1, y: 3, z: 5},
            {x: 1, y: 3, z: 5},
        ] 
    }

    var test2 = {
        layers: [
            {conv: [{filters: 32}, {stride: '2x2'}], pool: 2, drop: 3},
            {conv: [{filters: 14}, {stride: '4x4'}], pool: 2, drop: 3},
        ],
        fully: [
            {x: 1, y: 3, z: 5},
            {x: 1, y: 3, z: 5},
        ] 
    }


    const testt = () => {
        const array = []
        if (JSON.stringify(test) === JSON.stringify(test2)) {
            array.push(1)
        } else array.push(0 )
        
            return array;
    }


    return (
        <div>
            <testContext.Provider value={handleLayerChange}>
                <TopBar numLayers={numLayers} handleSliderChange={handleSliderChange} />      
                <Workflow numLayers={numLayers} />
            </testContext.Provider>
            <hr />

            {
                
                // loop()
                // testt()
                // console.log(allVals),
                // <button onClick={() => handleSetLayers(0, '12')}>asd</button>
                // handleSet()
                
            }

        </div>

    );
}

export default App;
