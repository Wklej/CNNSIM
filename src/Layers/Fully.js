import { useState } from "react";

const Fully = () => {

    const [num, setNum] = useState(1)

    const handlePlus = () => setNum(num+1)
    const handleMinus = () => setNum(num-1)

    const nodes = () => {
        let array = [];
        for (let index = 0; index < num; index++) {
            array.push(
                <button className="btn btn-primary mb-2" id={index}>{"Node " + index}</button>
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