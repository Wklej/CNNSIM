import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { paramContext } from "../../paramContext";
import { testContext } from "../../testContext";
import SelectBundle from "./SelectBundle";

const PoolParams = ({id, layerType}) => {

    const handleChange = useContext(testContext)
    const getValues = useContext(paramContext)

    const [values, setValues] = useState(getValues(id, layerType))

    const update = (e, id) => {
        handleChange(e, id, layerType)
        setValues(e.target.value)
    }

    return ( 
        <Modal.Body>
            <SelectBundle values={values} label='size' update={update} id={id} optionValues={['(2, 2)', '(3, 3)', '(4, 4)']} />
            <SelectBundle values={values} label='stride' update={update} id={id} optionValues={['(1, 1)', '(2, 2)']} />
        </Modal.Body>
     );
}
 
export default PoolParams;