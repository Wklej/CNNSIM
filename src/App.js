import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";

import TopBar from './TopBar';
import Workflow from './Workflow';

import { testContext } from './testContext';
import { paramContext } from './paramContext'; 
import { epochsContext } from './epochsContext';

import models_json from './Data/models.json'
import acc_loss from './Data/acc_loss.json'

function App() {

    //Epochs status & handlers
    const epochs = [1, 5, 10, 15, 20, 25, 30]
    const [epoch, setEpoch] = useState(0)
    const [epochNum, setEpochNum] = useState(0)

    const [imageNumber, setImageNumber] = useState(4)
    const [modelSet, setModelSet] = useState(0)

    const handlePlus = () => {
        const x = epoch + 1
        if (x < epochs.length) {
            setEpoch(x)
            setEpochNum(epochNum + 1)
        }
    }

    const handleMinus = () => {
        const x = epoch - 1
        if (x >= 0) {
            setEpoch(x)
            setEpochNum(epochNum - 1)
        }
    }
    
    const handleImageChange = (e) => {
        const id = document.getElementById(e.target.id).id
        setImageNumber(id)
    }

    const [lossFunc, setLossFunc] = useState('binary_crossentropy')

    //global values to pass to context and use in grandchild components
    const [allVals, setAllVals] = useState({
        layers: [
            {   conv: {filters: 32, kernel_size: 3, activation: 'relu'},
                pool: {pool_size: 2, stride: 2},
                drop: 0
            },
            {   conv: {filters: 32, kernel_size: 3, activation: 'relu'},
                pool: {pool_size: 2, stride: 2},
                drop: 0
            },
            {   conv: {filters: "null", kernel_size: "null", activation: "null"},
                pool: {pool_size: "null", stride: "null"},
                drop: "null"
            },
        ],
        output: {loss: lossFunc, optimizer: 'Adam'},
        input: {model: '1'},
        fully: [
            {filters: '512', activation: 'relu'},
            {filters: '1', activation: 'sigmoid'}
        ]
    })

    //Generator values
    const [genVals, setGenVals] = useState({
        filters: 'small', kernel_size: 3, activation: 'relu', stride: 'out', dropout: 'yes'
    })

    const allValsUpdate = () => {
        let temp = allVals

        for (let i = 0; i < numLayers; ++i) {
            if (genVals.filters === 'small')
                temp.layers[i].conv.filters = 32
            else if (genVals.filters === 'big')
                temp.layers[i].conv.filters = 128
            else if (genVals.filters === 'ascending')
                temp.layers[i].conv.filters = Math.pow(2, 5 + i)
            
            temp.layers[i].conv.kernel_size = genVals.kernel_size
            temp.layers[i].conv.activation = genVals.activation
            
            temp.layers[i].pool.pool_size = genVals.kernel_size - 1

            if (genVals.stride === 'in')
                temp.layers[i].pool.stride = genVals.kernel_size - 2
            else temp.layers[i].pool.stride = genVals.kernel_size - 1

            if (genVals.dropout === 'yes')
                if (i === 0 || i === numLayers - 2)
                    temp.layers[i].drop = 40
                else temp.layers[i].drop = 0
            else temp.layers[i].drop = 0
        }

        temp.fully[0].activation = genVals.activation

        setAllVals(temp)
        console.log('all vals have been set')
    }

    // Utils for tracking slider value
    const [numLayers, setNumLayers] = useState(2)
    const handleSliderChange = (e) => {        
        const temp = allVals
        const next_numLayers = e.valueOf()
        
        // < delete, > default
        if (next_numLayers < numLayers) {
            for (let i = 0; i < numLayers - next_numLayers; i++) {
                temp.layers[next_numLayers + i] = {
                    conv: {filters: "null", kernel_size: "null", activation: "null"},
                    pool: {pool_size: "null", stride: "null"},
                    drop: "null"
                }
            }
        } else if (next_numLayers > numLayers) {
            const convDefault = temp.input.model === '1' ?
                {filters: '16', kernel_size: '(2, 2)', activation: 'relu'} :
                {filters: '4', kernel_size: '(2, 2)', activation: 'relu'}

            for (let i = 0; i < next_numLayers - numLayers; i++) {
                temp.layers[numLayers + i] = {
                    conv: convDefault,
                    pool: {pool_size: '(2, 2)', stride: '2'},
                    drop: 0
                }
            }
        }
        
        setAllVals(temp)
        setNumLayers(e.valueOf())
    }

    // Function that resets slider val & set 3rd layer to default
    const resetSliderValue = () => {
        let temp = allVals

        temp.layers[2] = {
            conv: {filters: "null", kernel_size: "null", activation: "null"},
            pool: {pool_size: "null", stride: "null"},
            drop: "null"
        }

        setAllVals(temp)
        setNumLayers(2)
    }

    const handleLayerChange = (e, id, layerName) => {
        const temp = allVals
        
        if (layerName !== 'output' && layerName !== 'drop' && layerName !== 'fully' && layerName !== 'dropDefault')
            temp.layers[id][layerName] = {...temp.layers[id][layerName], [e.target.name]: e.target.value}
        else if (layerName === 'output')
            temp.output = {...temp.output, [e.target.name]: e.target.value}
        else if (layerName === 'drop')
            temp.layers[id].drop = e.valueOf() * 20
        else if (layerName === 'dropDefault')
            temp.layers[id].drop = e
        else if (layerName === 'fully')
            temp.fully[id] = {...temp.fully[id], [e.target.name]: e.target.value}
        
        setAllVals(temp)
    }

    const getValues = (id, layerName) => {
        if (layerName === 'output') 
            return allVals.output
        else if (layerName === 'input')
            return allVals.input
        else if(layerName === 'fully')
            return allVals.fully[id]
        else if(layerName === 'Default')
            return allVals.layers[id]
        else if(layerName === 'image')
            return imageNumber
        else if(layerName === 'modelSet')
            return modelSet
        else if(layerName === 'generator')
            return genVals
        else if(layerName === 'layers')
            return numLayers
        else if(layerName === 'epoch')
            return epoch
        
        else return allVals.layers[id][layerName]
    }

    const handleModelChange = (e) => {
        const temp = allVals
        
        temp.input.model = document.getElementById(e.target.id).id
        
        if (temp.input.model === '1')
            temp.output.loss = 'binary_crossentropy'
        else 
            temp.output.loss = 'categorical_crossentropy'
        
        setAllVals(temp)
    }

    const [outputs, setOutputs] = useState({
        valAcc: 0, testAcc: 0, valLoss: 0, testLoss: 0
    })

    const compare_json = () => {
        const data = models_json

        for (let i = 0; i < data.models.length; i++)
            if (JSON.stringify(data.models[i]) === JSON.stringify(allVals)) {
                setOutputs({...outputs, 
                    valAcc: Math.round(acc_loss.all[i].outputs[epochNum].valAcc * 100 * 10) / 10,
                    valLoss: Math.round(acc_loss.all[i].outputs[epochNum].valLoss * 100 * 10) / 10,
                    testAcc: Math.round(acc_loss.all[i].outputs[epochNum].testAcc * 100 * 10) / 10,
                    testLoss: Math.round(acc_loss.all[i].outputs[epochNum].testLoss * 100 * 10) / 10
                })
                setModelSet(i)
            }
        }

    return (
        <>
            <testContext.Provider value={handleLayerChange}>
                <paramContext.Provider value={getValues}>
                    {/* <TopBar numLayers={numLayers} handleSliderChange={handleSliderChange}
                            handlePlus={handlePlus} handleMinus={handleMinus} status={epochs[epoch]} /> */}
                    
                    <epochsContext.Provider value={epochs[epoch]}>
                        <Workflow numLayers={numLayers} handleSliderChange={handleSliderChange} handleImageChange={handleImageChange}
                                  handleModelChange={handleModelChange} lossFunc={lossFunc} setLossFunc={setLossFunc}
                                  outputs={outputs} handlePlus={handlePlus} setGenVals={setGenVals} allValsUpdate={allValsUpdate}
                                  handleMinus={handleMinus} status={epochs[epoch]} compare={compare_json} resetSliderValue={resetSliderValue}
                        />
                    </epochsContext.Provider>

                </paramContext.Provider>
            </testContext.Provider>

            {/* <button onClick={() => {allVals.layers.forEach(c => {console.log(c.drop)})}}>all values</button> */}
            {/* <button onClick={() => console.log(allVals)}>values</button> */}
            {/* <button onClick={() => console.log(numLayers)}>num layers</button> */}

        </>
    );
}

export default App;
