import ModelSet from "../Modal/Components/ModelSet";
import { useState } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Input = ({handleSliderChange, handleModelChange, handleImageChange, setLossFunc,
                numLayers, handlePlus, handleMinus, status, compare}) => {

    const [toggleImageButton, setToggleImageButton] = useState(1)

    return ( 
        <div className="col text-center position-relative">
            <div>
                <ModelSet modelID={1} handleModelChange={handleModelChange} handleImageChange={handleImageChange}
                        check={true} setLossFunc={setLossFunc} toggle={toggleImageButton} setToggle={setToggleImageButton} />
                <ModelSet modelID={2} handleModelChange={handleModelChange} handleImageChange={handleImageChange}
                        setLossFunc={setLossFunc} toggle={toggleImageButton} setToggle={setToggleImageButton} />
            </div>
            <div className="position-absolute bottom-0">
                <div>
                    Mid Layers count:
                    <Slider min={2} max={4} dots={true} marks={{2:2, 3:3, 4:4}}
                            value={numLayers} onChange={handleSliderChange} />
                </div>
                <div className="my-4">
                    Current epoch: {status}
                        <button className="btn btn-success mx-2" onClick={handlePlus}>+</button>
                        <button className="btn btn-success mx-2" onClick={handleMinus}>-</button>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={compare}>Simulation</button>
                </div>
            </div>
        
        </div>
    );
}
 
export default Input;