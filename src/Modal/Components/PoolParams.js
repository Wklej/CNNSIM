import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { paramContext } from "../../paramContext";
import { testContext } from "../../testContext";

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
            <div className="input-group">
                <span className="input-group-text">Pool size:</span>
                <select className="form-select" name="size" value={values.size} aria-label="Default select example" onChange={(e) => update(e, id)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <span className="input-group-text">Stride:</span>
                <select className="form-select" name="stride" value={values.stride} aria-label="Default select example" onChange={(e) => update(e, id)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        </Modal.Body>
     );
}
 
export default PoolParams;