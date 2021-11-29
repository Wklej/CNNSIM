import { Modal } from "react-bootstrap";

const LayerModal = ({show, handleClose, body}) => {

    const bodyType = () => {
        if (body === "conv") {
            console.log('conv')
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

    return ( 
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            { bodyType() }
            <Modal.Footer>
                <button className="btn-secondary" onClick={handleClose}>
                    Close
                </button>
                <button className="btn-primary" onClick={handleClose}>
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default LayerModal;