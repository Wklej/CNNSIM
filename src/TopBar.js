import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

const TopBar = ({numLayers, handleSliderChange}) => {

    const epochs = [1, 5, 10, 15, 30]

    const [epoch, setEpoch] = useState(0)

    const handlePlus = () => {
        const x = epoch + 1
        if (x < epochs.length) {
            setEpoch(x)
        }
    }

    const handleMinus = () => {
        const x = epoch - 1
        if (x >= 0) {
            setEpoch(x)
        }
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-8 p-2 bg-primary text-ligh">
                    <Slider min={2} max={6} dots={true} marks={{2:2, 3:3, 4:4, 5:5, 6:6}}
                            value={numLayers} onChange={handleSliderChange} />
                </div>
                <div className="col-4 p-2 bg-primary text-ligh">
                    Current epoch: {epochs[epoch]}
                    <button className="btn btn-success mx-2" onClick={handlePlus}>+</button>
                    <button className="btn btn-success mx-2" onClick={handleMinus}>-</button>
                </div>
            </div>
      </div>
     );
}
 
export default TopBar;