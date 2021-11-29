import { useState } from "react";
import LayerModal from "./LayerModal";

const Layer = ({num}) => {

    // const MyModal = ({show}) => {
    //     return(
    //         <Modal show={show} onHide={handleClose}>
    //             <Modal.Header closeButton>
    //             <Modal.Title>Modal heading</Modal.Title>
    //             </Modal.Header>
    //             <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    //             <Modal.Footer>
    //             <button className="btn-secondary" onClick={handleClose}>
    //                 Close
    //             </button>
    //             <button className="btn-primary" onClick={handleClose}>
    //                 Save Changes
    //             </button>
    //             </Modal.Footer>
    //         </Modal>
    //     )        
    // }

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        console.log('closing modal...')
    }

    const divs = () => {
        let array = [];
        for (let index = 0; index < num; index++) {
            array.push(
                <div className="col">
                    <div className="card border-dark text-center" >
                        <div className="card-body">
                            <ul className="list-group">
                                <button className="btn-primary" onClick={handleShow}>1</button>
                                <LayerModal show={show} handleClose={handleClose} />
                                <button className="btn-primary">1</button>
                            </ul>
                        </div>
                        <div className="card-footer">params</div>
                    </div>
                </div>
            )
        }
        return array
    }

    return ( 
        divs()
     );
}
 
export default Layer;