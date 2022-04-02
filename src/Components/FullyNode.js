import { useState } from "react";
import LayerModal from "../Modal/LayerModal"

const FullyNode = ({id}) => {

    const [showNode, setNodeShow] = useState(false);
    const handleNodeShow = () => setNodeShow(true);
    const handleNodeClose = () => setNodeShow(false);

    return ( 
        <div>
            <button className="btn btn-orange btn-lg nodeStyle mb-2" onClick={handleNodeShow} id={id}>Layer {id + 1}</button>
            <LayerModal show={showNode} handleClose={handleNodeClose} body={"fully"} id={id} />
        </div>
     );
}
 
export default FullyNode;