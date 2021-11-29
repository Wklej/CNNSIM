import Tabs from 'react-bootstrap/Tabs'
import { Modal, Tab } from "react-bootstrap";

const LayerModal = ({show, handleClose, body}) => {

    const bodyType = () => {
        if (body === "conv") {
            return(
                <Modal.Body>conv body</Modal.Body>
            )
        }
        else if(body === "pool") {
            console.log('pool')
            return(
                <Modal.Body>pool body</Modal.Body>
            )
        }
    }

    const asd = () => {return(<Modal.Body>details content</Modal.Body>)}

    return ( 
        <Modal show={show} onHide={handleClose}>
            <Tabs>
                <Tab eventKey="explaination" title="Explaination">
                    { bodyType() }
                </Tab>
                <Tab eventKey="details" title="Details">
                    { asd() }
                </Tab>  
            </Tabs>
            <Modal.Footer>
                <button className="btn-primary" onClick={handleClose}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default LayerModal;