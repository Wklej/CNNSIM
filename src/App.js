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

    const handleConvChange = (e) => {
        setConvValues( vals => {
            return { ...vals, [e.target.name]: e.target.value}
        })
    }


    var persons = [
        {name: ["Filip", "Filip"], age: "22"},
        {name: ["Natalia", "Natalia"], age: "24"},
        {name: ["Fufu", "Fufu"], age: "42"},
    ]

    var persons2 = [
        {name: ["Filip", "Filip"], age: "22"},
        {name: ["Natalia", "Nataliaa"], age: "24"},
        {name: ["Fufu", "Fufu"], age: "42"},
    ]

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

    const loop = () => {
        const arr = []
        for (let index = 0; index < 3; index++) {
            if (JSON.stringify(persons[index]) === JSON.stringify(persons2[index])) {
                console.log(persons[index], persons2[index])
                arr.push(1)
            }
            else arr.push(0)
        }
        console.log(test)
        return arr;
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
            <testContext.Provider value={handleConvChange}>
                <TopBar numLayers={numLayers} handleSliderChange={handleSliderChange} />      
                <Workflow numLayers={numLayers} />
                {console.log(convValues)}
            </testContext.Provider>
            <hr />

            {
                
                // loop()
                testt()
                
            }

        </div>

    );
}

export default App;
