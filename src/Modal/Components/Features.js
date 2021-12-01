import Tabs from 'react-bootstrap/Tabs'
import { Modal, Tab } from "react-bootstrap";
import { useState } from 'react';

const Features = ({show, handleClose}) => {

    const [type, setType] = useState('feat1')

    const bodyType = () => {
        if (type === "feat1") {
            return(<Modal.Body>Feature 1</Modal.Body>)    
        }
        else if(type === "feat2") {
            return(<Modal.Body>Feature 2</Modal.Body>)
        }
        else if(type === "feat3") {
            return(<Modal.Body>Feature 3</Modal.Body>)
        }
    }

   return ( 
        <Modal show={show} onHide={handleClose}>
            <Tabs activeKey={type} onSelect={(e) => setType(e)}>
                <Tab eventKey="feat1" title="Feature 1">
                    { bodyType() }
                </Tab>
                <Tab eventKey="feat2" title="Feature 2">
                    { bodyType() }
                </Tab>   
                <Tab eventKey="feat3" title="Feature 3">
                    { bodyType() }
                </Tab>   
            </Tabs>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={handleClose}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default Features;