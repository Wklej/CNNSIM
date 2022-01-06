import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const TopBar = ({numLayers, handleSliderChange, handlePlus, handleMinus, status}) => {

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-8 p-2 bg-primary text-ligh">
                    <Slider min={2} max={4} dots={true} marks={{2:2, 3:3, 4:4}}
                            value={numLayers} onChange={handleSliderChange} />
                </div>
                <div className="col-4 p-2 bg-primary text-ligh">
                    Current epoch: {status}
                    <button className="btn btn-success mx-2" onClick={handlePlus}>+</button>
                    <button className="btn btn-success mx-2" onClick={handleMinus}>-</button>
                </div>
            </div>
      </div>
     );
}
 
export default TopBar;