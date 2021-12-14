import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { paramContext } from "../../paramContext";
import { testContext } from "../../testContext";
import SelectBundle from "./SelectBundle";

const FullyParams = ({id, layerType}) => {

    const handleChange = useContext(testContext)
    const getValues = useContext(paramContext)

    const [values, setValues] = useState(getValues(id, layerType))

    const update = (e, id) => {
        handleChange(e, id, layerType)
        setValues(e.target.value)
    }

    return ( 
        <Modal.Body>
            <SelectBundle values={values} label='filters' update={update} id={id} optionValues={['1', '2', '3']} />
            <SelectBundle values={values} label='activation' update={update} id={id} optionValues={['1', '2', '3']} />
        </Modal.Body>
     );
}
 
export default FullyParams;