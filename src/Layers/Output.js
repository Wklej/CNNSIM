import { PieChart } from 'react-minimal-pie-chart';
import { useState, useContext } from 'react';
import { paramContext } from "../paramContext";
import { testContext } from "../testContext";
import SelectBundle from '../Modal/Components/SelectBundle';

const Output = ({acc, loss, lossFunc}) => {
        
    const layerType = 'output'
    const id = null

    const handleChange = useContext(testContext)
    const getValues = useContext(paramContext)

    const [values, setValues] = useState(getValues(id, layerType))

    const update = (e, id) => {
        handleChange(e, id, layerType)
        setValues(e.target.value)
    }

    const AccuracyChart = () => {
        return(
            <div>
                <a style={{
                    fontSize: '25px',
                    fontFamily: 'sans-serif',
                    color: '#E38627',
                    }}>Accuracy: </a>
                <PieChart
                    data={[{ value: acc, key: 1, color: '#E38627' }]}
                    reveal={acc}
                    lineWidth={15}
                    animate
                    label={() => acc}
                    labelStyle={{
                        fontSize: '25px',
                        fontFamily: 'sans-serif',
                        fill: '#E38627',
                        }}
                    labelPosition={0}
                    viewBoxSize={[200, 150]}
                    center={[100, 70]}
                />
            </div>
        )
    }

    const LossChart = () => {
        return(
            <div>
                <a style={{
                    fontSize: '25px',
                    fontFamily: 'sans-serif',
                    color: '#E38627',
                    }}>Loss: </a>
                <PieChart
                    data={[{ value: loss, key: 1, color: '#E38627' }]}
                    reveal={loss}
                    lineWidth={15}
                    animate
                    label={() => loss}
                    labelStyle={{
                        fontSize: '25px',
                        fontFamily: 'sans-serif',
                        fill: '#E38627',
                        }}
                    labelPosition={0}
                    viewBoxSize={[200, 150]}                
                    center={[100, 70]}
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

            {AccuracyChart()}
            {LossChart()}
        </div>
     );
}
 
export default Output;