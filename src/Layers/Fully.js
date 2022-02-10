import { useState } from "react";
import { layersContext } from "../layersContext";
import FullyNode from "../Modal/Components/FullyNode";

const Fully = ({setDefautFully}) => {

    const [num, setNum] = useState(2)

    const handlePlus = () => {
        const x = num + 1
        if (x <= 3) {
            setNum(x)
            setDefautFully(x)
        }
    }

    const handleMinus = () => {
        const x = num - 1
        if (x > 1) {
            setNum(x)
            setDefautFully(x)
        }
    }

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
                        <div className="card-body">
                            <ul className="list-group">
                                { nodes() }
                            </ul>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-orange me-2" onClick={handlePlus}>+</button>
                            <button className="btn btn-outline-orange" onClick={handleMinus}>-</button>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default Fully;