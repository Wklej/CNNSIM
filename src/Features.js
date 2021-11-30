import Tabs from 'react-bootstrap/Tabs'
import { Modal, Tab } from "react-bootstrap";
import { useState } from 'react';
import ConvParams from './ConvParams';
import PoolParams from './PoolParams';
import DropParams from './DropParams';

const Features = ({show, handleClose}) => {

    const [type, setType] = useState('conv')

    const bodyType = () => {
        if (type === "conv") {
            return(<ConvParams />)    
        }
        else if(type === "pool") {
            return(<PoolParams />)
        }
        else if(type === "drop") {
            return(<DropParams />)
        }
    }

   return ( 
        <Modal show={show} onHide={handleClose}>
            <Tabs activeKey={type} onSelect={(e) => setType(e)}>
                <Tab eventKey="conv" title="Conv">
                    { bodyType() }
                </Tab>
                <Tab eventKey="pool" title="Pool">
                    { bodyType() }
                </Tab>   
                <Tab eventKey="drop" title="Drop">
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