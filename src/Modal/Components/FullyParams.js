import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { layersContext } from "../../layersContext";
import { paramContext } from "../../paramContext";
import { testContext } from "../../testContext";
import SelectBundle from "./SelectBundle";

const FullyParams = ({id, layerType}) => {

    const handleChange = useContext(testContext)
    const getValues = useContext(paramContext)
    const layerNum = useContext(layersContext)

    const [values, setValues] = useState(getValues(id, layerType))

    const update = (e, id) => {
        handleChange(e, id, layerType)
        setValues(e.target.value)
    }

    const optionValuesFilters = () => {
        const inputValue = getValues(null, 'input').model

        return inputValue === '1' ? ['2'] : ['25']
    }
    
    const optionValuesActiv = () => {
        const inputValue = getValues(null, 'input').model

        return inputValue === '1' ? ['sigmoid'] : ['softmax']
    }
    
    const getBody = () => {
        if (layerNum === (id + 1)) {
            return(
                <div>
                    <SelectBundle values={values} label='filters' update={update} id={id} optionValues={optionValuesFilters()} />
                    <SelectBundle values={values} label='activation' update={update} id={id} optionValues={optionValuesActiv()} />
                </div>
            )
        }
        else {
            return(
                <div>
                    <SelectBundle values={values} label='filters' update={update} id={id} optionValues={['64', '128', '256']} />
                    <SelectBundle values={values} label='activation' update={update} id={id} optionValues={['relu', 'sigmoid']} />
                </div>
            )
        }   
    }

    return ( 
        <Modal.Body>
            {getBody()}
        </Modal.Body>
     );
}
 
export default FullyParams;