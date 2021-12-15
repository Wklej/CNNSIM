import { useState } from "react";
import FullyNode from "../Modal/Components/FullyNode";

const Fully = () => {

    const [num, setNum] = useState(1)

    const handlePlus = () => {
        const x = num + 1
        if (x <= 3) {
            setNum(x)
        }
    }

    const handleMinus = () => {
        const x = num - 1
        if (x > 0) {
            setNum(x)
        }
    }

    const nodes = () => {
        let array = [];
        for (let index = 0; index < num; index++) {
            array.push(
                <FullyNode id={index} />
            )
        }
        return array
    }


    return ( 
        <div className="col">
            <div className="card border-dark text-center" >
                <div className="card-body">
                    <ul className="list-group">
                        { nodes() }
                    </ul>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary me-2" onClick={handlePlus}>+</button>
                    <button className="btn btn-outline-primary" onClick={handleMinus}>-</button>
                </div>
            </div>
        </div>
     );
}
 
export default Fully;