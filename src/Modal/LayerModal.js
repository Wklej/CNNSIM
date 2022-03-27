import Tabs from 'react-bootstrap/Tabs'
import { Modal, Tab } from "react-bootstrap";
import Explaination from '../Components/Explaination'
import Details from '../Components/Details';
import { useState } from 'react';

const LayerModal = ({show, handleClose, body, id}) => {

    const [type, setType] = useState('details')

    const bodyType = () => {
        if (type === "explaination") {
            return(<Explaination layerType={body} />)    
        }
        else if(type === "details") {
            return(<Details layerType={body} id={id} />)
        }
    }

    return ( 
        <Modal show={show} onHide={handleClose} size='lg'>
            <Tabs activeKey={type} onSelect={(e) => setType(e)}>
                <Tab tabClassName='tabFont' eventKey="explaination" title="Explaination">
                    { bodyType() }
                </Tab>
                <Tab tabClassName='tabFont' eventKey="details" title="Details">
                    { bodyType() }
                </Tab>   
            </Tabs>
            <Modal.Footer>
                <button className="btn btn-orange" onClick={handleClose}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default LayerModal;