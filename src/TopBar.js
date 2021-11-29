import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const TopBar = ({numLayers, handleSliderChange}) => {

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-8 p-2 bg-primary text-ligh">
                    <Slider min={2} max={6} dots={true} marks={{2:2, 3:3, 4:4, 5:5, 6:6}}
                            value={numLayers} onChange={handleSliderChange} />
                </div>
                <div className="col-4 p-2 bg-primary text-ligh">epochs status</div>
            </div>
      </div>
     );
}
 
export default TopBar;