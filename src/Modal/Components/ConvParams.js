import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { paramContext } from "../../paramContext";
import { testContext } from "../../testContext";

const ConvParams = ({id}) => {

    const handleChange = useContext(testContext)
    const getValues = useContext(paramContext)

    const [values, setValues] = useState(getValues(id))

    const update = (e, id) => {
        handleChange(e, id)
        setValues(e.target.value)
    }

    return ( 
        <Modal.Body>
            <div className="input-group">
                <span className="input-group-text">Filters:</span>
                <select className="form-select" name="filters" value={values.filters} aria-label="Default select example" onChange={(e) => update(e, id)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <span className="input-group-text">Kernel size:</span>
                <select className="form-select" name="kernel" value={values.kernel} aria-label="Default select example" onChange={(e) => update(e, id)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div className="input-group">
                <span className="input-group-text">Activation:</span>
                <select className="form-select" name="activation" value={values.activation} aria-label="Default select example" onChange={(e) => update(e, id)}>
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
 
export default ConvParams;