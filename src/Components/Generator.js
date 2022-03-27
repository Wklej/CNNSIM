import { useContext, useState } from "react";
import { paramContext } from "../Contexts/paramContext";
import SelectBundle from "./SelectBundle";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Generator = ({setShowMid, handleSliderChange, numLayers, setGenVals, allValsUpdate}) => {

    // const handleChange = useContext(testContext)
    const getValues = useContext(paramContext)
    const genVals = getValues(null, 'generator')

    // const [values, setValues] = useState(getValues(null, 'conv'))
    const [modelSet] = useState(getValues(null, 'input').model)

    const update2 = (e, id) => {
        setGenVals({...genVals, [e.target.name]: e.target.value})
    }
    
    const update = () => {        
        allValsUpdate()
        setShowMid()
    }

    const getPoolSize = () => {
        const pool_size = genVals.kernel_size - 1
        return pool_size.toString()
    }

    const orangeBg = {backgroundColor: "#e38627"}
    const dotStyle = {backgroundColor: "#212121", border: "solid 2px #212121"}
    const handleStyle = {backgroundColor: "#e38627", border: "solid 2px #212121"}

    return ( 
        <div className="col cardFont">
            <div className="card border-dark text-center bgDarkCard" >
                <div className="card-header">mid layers generator</div>
                <div className="card-body">
                    <div className="mb-4">
                        Mid Layers count:
                        <Slider railStyle={orangeBg} trackStyle={orangeBg} dotStyle={dotStyle} handleStyle={handleStyle}
                                min={2} max={3} dots={true} marks={{2:2, 3:3}}
                                value={numLayers} onChange={handleSliderChange} />
                    </div>
                    <div className="card border-dark text-center bgDarkSubCard mx-2 my-1" >
                        <div className="card-header">Convolutional layer</div>
                        <div className="card-body">
                            <div className="d-inline-block w-auto">
                                <SelectBundle label='filters' update={update2} bundle_size={'md'}
                                        optionValues={['small', 'ascending', 'big']} />
                                <SelectBundle label='kernel_size' update={update2} bundle_size={'md'} optionValues={['3', '5']} />
                                <SelectBundle label='activation' update={update2} bundle_size={'md'} optionValues={['relu', 'tanh']} />
                            </div>
                        </div>
                    </div>
                    <div className="card border-dark text-center bgDarkSubCard mx-2 my-1" >
                        <div className="card-header">Pooling layer</div>
                        <div className="card-body">
                            <div className="d-inline-block w-auto">
                                <SelectBundle label='pool_size' update={update2} bundle_size={'md'}
                                    optionValues={[getPoolSize()]} />
                                <SelectBundle label='stride' update={update2} bundle_size={'md'}
                                    optionValues={['out', 'in']} />
                            </div>
                        </div>
                    </div>
                    <div className="col d-inline-block w-auto mt-2">
                        <SelectBundle label='dropout' update={update2} bundle_size={'md'} optionValues={['yes','no']} />
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-orange" onClick={() => update()}>Generate</button>
                </div>
            </div>
        </div>
     );
}
 
export default Generator;