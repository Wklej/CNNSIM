import { Modal } from "react-bootstrap";

const PoolParams = () => {
    return ( 
        <Modal.Body>
            Pool params
            <div className="input-group">
                <span className="input-group-text">Pool size:</span>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <span className="input-group-text">Stride:</span>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </Modal.Body>
     );
}
 
export default PoolParams;