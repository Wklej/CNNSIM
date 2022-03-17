import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { paramContext } from "../../Contexts/paramContext";
import SelectBundle from "./SelectBundle";

const PoolParams = ({id, layerType}) => {

    const getValues = useContext(paramContext)

    const [values, setValues] = useState(getValues(id, layerType))

    return ( 
        <Modal.Body>
            <SelectBundle label='pool_size' id={id} optionValues={[values.pool_size]} disabled={true} />
            <SelectBundle label='stride' id={id} optionValues={[values.stride]} disabled={true} />
        </Modal.Body>
     );
}
 
export default PoolParams;