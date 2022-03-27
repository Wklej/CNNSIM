import { useState } from "react";
import { layersContext } from "../Contexts/layersContext";
import FullyNode from "../Components/FullyNode";

const Fully = () => {

    const [num, setNum] = useState(2)

    const nodes = () => {
        let array = [];
        for (let index = 0; index < num; index++) {
            array.push(
                <layersContext.Provider value={num}>
                    <FullyNode id={index} />
                </layersContext.Provider>
            )
        }
        return array
    }


    return ( 
        <div className="row min-vh-100 align-items-center">
            <div className="col">
                <div className="card border-dark text-center bgDarkCard" >
                        <div className="card-header cardFont">Fully connected layer</div>
                        <div className="card-body">
                            <ul className="list-group">
                                { nodes() }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default Fully;