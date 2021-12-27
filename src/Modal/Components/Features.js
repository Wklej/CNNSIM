import Tabs from 'react-bootstrap/Tabs'
import { Modal, Tab } from "react-bootstrap";
import { useState } from 'react';
import Karuzela from './Karuzela';

const Features = ({show, handleClose, idx}) => {

    // Function to map whole dir content to @images object
    const getImages = (dirVariable) => {
        const cache = {};

        const r = dirVariable
        r.keys().forEach((key) => (cache[key] = r(key)))
    
        const images = Object.entries(cache).map(module => module[1].default);
        
        return images
    }

    // Function to choose path based on @layerType
    const getDir = (layerType) => {
        switch (layerType) {
            case "activations":
                return require.context("../../Images/Activations/test_dir", false, /\.(png|gif|jpg)$/)
            default:
                break;
        }
    }


    const [type, setType] = useState('activations')

    const bodyType = () => {
        if (type === "activations") {
            return(
                <Modal.Body>
                    <Karuzela content={getImages(getDir(type))} idx={idx} />
                </Modal.Body>
            )    
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