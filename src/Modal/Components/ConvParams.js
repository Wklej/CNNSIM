import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { paramContext } from "../../paramContext";
import { testContext } from "../../testContext";
import SelectBundle from "./SelectBundle";

const ConvParams = ({id, layerType}) => {

    const handleChange = useContext(testContext)
    const getValues = useContext(paramContext)

    const [values, setValues] = useState(getValues(id, layerType))

    const update = (e, id) => {
        handleChange(e, id, layerType)
        setValues(e.target.value)
    }

    return ( 
        <Modal.Body>
            <SelectBundle values={values} label='filters' update={update} id={id} optionValues={['16', '32', '64', '128']} />
            <SelectBundle values={values} label='kernel_size' update={update} id={id} optionValues={['(2, 2)', '(3, 3)', '(4, 4)']} />
            <SelectBundle values={values} label='activation' update={update} id={id} optionValues={['relu', 'sigmoid', 'softmax']} />
        </Modal.Body>
     );
}
 
export default ConvParams;