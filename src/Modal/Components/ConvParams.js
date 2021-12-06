import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { testContext } from "../../testContext";

const ConvParams = ({id}) => {

    const handleChange = useContext(testContext)

    return ( 
        <Modal.Body>
            <div className="input-group">
                <span className="input-group-text">Filters:</span>
                <select className="form-select" name="filters" aria-label="Default select example" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <span className="input-group-text">Kernel size:</span>
                <select className="form-select" name="kernel" aria-label="Default select example" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div className="input-group">
                <span className="input-group-text">Activation:</span>
                <select className="form-select" name="activation" aria-label="Default select example" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <span className="input-group-text">Stride:</span>
                <select className="form-select" name="stride" aria-label="Default select example" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                {"id " + id}
            </div>     
        </Modal.Body>
     );
}
 
export default ConvParams;