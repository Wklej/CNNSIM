import { useState } from "react";
import LayerModal from "../LayerModal"

const FullyNode = ({id}) => {

    const [showNode, setNodeShow] = useState(false);
    const handleNodeShow = () => setNodeShow(true);
    const handleNodeClose = () => setNodeShow(false);

    return ( 
        <div>
            <button className="btn btn-orange mb-2" onClick={handleNodeShow} id={id}>{"Node " + id}</button>
            <LayerModal show={showNode} handleClose={handleNodeClose} body={"fully"} id={id} />
        </div>
     );
}
 
export default FullyNode;