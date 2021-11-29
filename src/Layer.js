import { useState } from "react";
import LayerModal from "./LayerModal";

const Layer = ({num}) => {

    const [showConv, setConvShow] = useState(false);
    const [showPool, setPoolShow] = useState(false);

    const handleConvShow = () => setConvShow(true);
    const handleConvClose = () => setConvShow(false);
    const handlePoolShow = () => setPoolShow(true);
    const handlePoolClose = () => setPoolShow(false);

    const divs = () => {
        let array = [];
        for (let index = 0; index < num; index++) {
            array.push(
                <div className="col">
                    <div className="card border-dark text-center" >
                        <div className="card-body">
                            <ul className="list-group">
                                <button className="btn-primary" onClick={handleConvShow}>conv</button>
                                <LayerModal show={showConv} handleClose={handleConvClose} body={"conv"} />
                                <button className="btn-primary" onClick={handlePoolShow}>pool</button>
                                <LayerModal show={showPool} handleClose={handlePoolClose} body={'pool'} />
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