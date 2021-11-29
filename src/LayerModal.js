import Tabs from 'react-bootstrap/Tabs'
import { Modal, Tab } from "react-bootstrap";
import Explaination from './Explaination';
import Details from './Details';

const LayerModal = ({show, handleClose, body}) => {

    const explainationBodyType = () => {
        return(<Explaination layerType={body} />)
    }

    const DetailsBodyType = () => {
        return(<Details layerType={body} />)
    }

    return ( 
        <Modal show={show} onHide={handleClose}>
            <Tabs>
                <Tab eventKey="explaination" title="Explaination">
                    { explainationBodyType() }
                </Tab>
                <Tab eventKey="details" title="Details">
                    { DetailsBodyType() }
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