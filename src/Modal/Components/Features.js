import Tabs from 'react-bootstrap/Tabs'
import { Modal, Tab } from "react-bootstrap";
import { useState } from 'react';

const Features = ({show, handleClose}) => {

    const [type, setType] = useState('activations')

    const bodyType = () => {
        if (type === "activations") {
            return(<Modal.Body>activations</Modal.Body>)    
        }
        else if(type === "filters") {
            return(<Modal.Body>Feature 2</Modal.Body>)
        }
        else if(type === "comparison") {
            return(<Modal.Body>Feature 3</Modal.Body>)
        }
    }

   return ( 
        <Modal show={show} onHide={handleClose}>
            <Tabs activeKey={type} onSelect={(e) => setType(e)}>
                <Tab eventKey="activations" title="Activations">
                    { bodyType() }
                </Tab>
                <Tab eventKey="filters" title="Filters">
                    { bodyType() }
                </Tab>   
                <Tab eventKey="comparison" title="Comparison">
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