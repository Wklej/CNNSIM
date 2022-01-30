import { PieChart } from 'react-minimal-pie-chart';
import { useState, useContext } from 'react';
import { paramContext } from "../paramContext";
import { testContext } from "../testContext";
import SelectBundle from '../Modal/Components/SelectBundle';

const Output = ({outputs, lossFunc}) => {
        
    const layerType = 'output'
    const id = null

    const handleChange = useContext(testContext)
    const getValues = useContext(paramContext)

    const [values, setValues] = useState(getValues(id, layerType))

    const update = (e, id) => {
        handleChange(e, id, layerType)
        setValues(e.target.value)
    }

    const AccuracyChart = (type) => {
        const data = type === 'val' ? outputs.valAcc : outputs.testAcc
        return(
            <div>
                <a style={{
                    fontSize: '25px',
                    fontFamily: 'sans-serif',
                    color: '#E38627',
                    }}>{type === 'val' ? "Val Accuracy" : "Test Accuracy"}: </a>
                <PieChart
                    data={[{ value: data, key: 1, color: '#E38627' }]}
                    reveal={type === 'val' ? outputs.valAcc : outputs.testAcc}
                    lineWidth={15}
                    animate
                    label={() => type === 'val' ? outputs.valAcc : outputs.testAcc}
                    labelStyle={{
                        fontSize: '25px',
                        fontFamily: 'sans-serif',
                        fill: '#E38627',
                        }}
                    labelPosition={0}
                    viewBoxSize={[120, 140]}
                    center={[50, 70]}
                />
            </div>
        )
    }

    const LossChart = (type) => {
        const data = type === 'val' ? outputs.valLoss : outputs.testLoss
        return(
            <div>
                <a style={{
                    fontSize: '25px',
                    fontFamily: 'sans-serif',
                    color: '#E38627',
                    }}>{type === 'val' ? "Val Loss" : "Test Loss"}: </a>
                <PieChart
                    data={[{ value: data, key: 1, color: '#E38627' }]}
                    reveal={type === 'val' ? outputs.valLoss : outputs.testLoss}
                    lineWidth={15}
                    animate
                    label={() => type === 'val' ? outputs.valLoss : outputs.testLoss}
                    labelStyle={{
                        fontSize: '25px',
                        fontFamily: 'sans-serif',
                        fill: '#E38627',
                        }}
                    labelPosition={0}
                    viewBoxSize={[120, 130]}                
                    center={[50, 70]}
                />
            </div>
        )
    }

    return ( 
        <div className='text-center'>   
            <SelectBundle values={values} label='loss' update={update} id={id}
                        optionValues={[lossFunc, 'mean_squared_error']} />
            <SelectBundle values={values} label='optimizer' update={update} id={id}
                        optionValues={['Adam', 'SGD', 'RMSprop']} />
                                  
            <hr />

            <div className="row">
                <div className="col">
                    {AccuracyChart('test')}
                    {LossChart('test')}
                </div>
                <div className="col">
                    {AccuracyChart('val')}
                    {LossChart('val')}
                </div>
            </div>
        </div>
     );
}
 
export default Output;