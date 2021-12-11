import { PieChart } from 'react-minimal-pie-chart';
import { useState, useContext } from 'react';
import { paramContext } from "../paramContext";
import { testContext } from "../testContext";
import ExplainModal from '../Modal/ExplainModal';
import SelectBundle from '../Modal/Components/SelectBundle';

const Output = ({acc}) => {
        
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
                />
            </div>
        )
    }

    return ( 
        <div>   
            <SelectBundle values={values} modalType='explain' label='loss' update={update} id={id} />
            <SelectBundle values={values} modalType='explain' label='activation' update={update} id={id} />
          
            <hr />

            {AccuracyChart()}
        </div>
     );
}
 
export default Output;