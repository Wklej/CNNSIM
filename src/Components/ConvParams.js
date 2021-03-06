import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { paramContext } from "../Contexts/paramContext";
import SelectBundle from "./SelectBundle";

const ConvParams = ({id, layerType}) => {

    const getValues = useContext(paramContext)

    const [values, setValues] = useState(getValues(id, layerType))
    const [modelSet] = useState(getValues(null, 'input').model)

    return ( 
        <Modal.Body>
            <SelectBundle label='filters' id={id} disabled={true}
                        optionValues={modelSet === '1' ? [values.filters] : ['4']} />
            <SelectBundle label='kernel_size' id={id} optionValues={[values.kernel_size]} disabled={true} />
            <SelectBundle label='activation' id={id} optionValues={[values.activation]} disabled={true} />
        </Modal.Body>
     );
}
 
export default ConvParams;