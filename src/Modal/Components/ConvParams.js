import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { paramContext } from "../../paramContext";
import { testContext } from "../../testContext";
import SelectBundle from "./SelectBundle";

const ConvParams = ({id, layerType}) => {

    const handleChange = useContext(testContext)
    const getValues = useContext(paramContext)

    const [values, setValues] = useState(getValues(id, layerType))
    const [modelSet] = useState(getValues(null, 'input').model)

    const update = (e, id) => {
        handleChange(e, id, layerType)
        setValues(e.target.value)
    }

    return ( 
        <Modal.Body>
            {console.log(values)}
            <SelectBundle values={values} label='filters' update={update} id={id}
                        optionValues={modelSet === '1' ? ['16', '32', '64'] : ['4', '8', '16']} />
            <SelectBundle values={values} label='kernel_size' update={update} id={id} optionValues={['(2, 2)', '(4, 4)']} />
            <SelectBundle values={values} label='activation' update={update} id={id} optionValues={['relu', 'sigmoid']} />
        </Modal.Body>
     );
}
 
export default ConvParams;