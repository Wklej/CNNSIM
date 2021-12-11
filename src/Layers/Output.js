import { PieChart } from 'react-minimal-pie-chart';
import { useState, useContext } from 'react';
import { paramContext } from "../paramContext";
import { testContext } from "../testContext";

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
             <div className="input-group input-group-sm">
                <span className="input-group-text">Loss:</span>
                <select className="form-select" name="loss" value={values.loss} onChange={(e) => update(e, id)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <span className="input-group-text mt-1">Optimizer:</span>
                <select className="form-select mt-1" name="optimizer" value={values.optimizer} onChange={(e) => update(e, id)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>

            <hr />

            {AccuracyChart()}
        </div>
     );
}
 
export default Output;