import { useState } from "react";
import LayerModal from "./LayerModal";
import { Modal } from "react-bootstrap";

const Layer = ({num}) => {

    const [showConv, setConvShow] = useState(false);
    const [showPool, setPoolShow] = useState(false);

    const handleConvShow = () => setConvShow(true);
    const handleConvClose = () => setConvShow(false);
    const handlePoolShow = () => setPoolShow(true);
    const handlePoolClose = () => setPoolShow(false);

    const [convBody, setConvBody] = useState(
        <Modal.Body>conv body</Modal.Body>
    );

    const [poolBody, setPoolBody] = useState(
        <Modal.Body>pool body</Modal.Body>
    );

    const divs = () => {
        let array = [];
        for (let index = 0; index < num; index++) {
            array.push(
                <div className="col">
                    <div className="card border-dark text-center" >
                        <div className="card-body">
                            <ul className="list-group">
                                <button className="btn-primary" onClick={handleConvShow}>conv</button>
                                <LayerModal show={showConv} handleClose={handleConvClose} body={convBody} />
                                <button className="btn-primary" onClick={handlePoolShow}>pool</button>
                                <LayerModal show={showPool} handleClose={handlePoolClose} body={poolBody} />
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