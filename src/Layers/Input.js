import ModelSet from "../Modal/Components/ModelSet";
import { useState } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Input = ({handleSliderChange, handleModelChange, handleImageChange, setLossFunc,
                numLayers, handlePlus, handleMinus, status, compare}) => {

    const [toggleImageButton, setToggleImageButton] = useState(1)

    const orangeBg = {backgroundColor: "#e38627"}
    const dotStyle = {backgroundColor: "#212121", border: "solid 2px #212121"}
    const handleStyle = {backgroundColor: "#e38627", border: "solid 2px #212121"}

    return ( 
        <div className="col text-center text-white position-relative bgDarkLayer">
            
            <div className="card border-dark text-center bgDarkCard mx-2">
                <div className="card-header">
                    Input
                </div>
                <div className="card-body">
                    <ul className="list-group">
                            <ModelSet modelID={1} handleModelChange={handleModelChange} handleImageChange={handleImageChange}
                                    check={true} setLossFunc={setLossFunc} toggle={toggleImageButton} setToggle={setToggleImageButton} />
                            <ModelSet modelID={2} handleModelChange={handleModelChange} handleImageChange={handleImageChange}
                                    setLossFunc={setLossFunc} toggle={toggleImageButton} setToggle={setToggleImageButton} />
                    </ul>
                </div>
            </div>

            <div className="position-absolute bottom-0 mb-2">
                <div className="card border-dark text-center bgDarkCard mx-1">
                    <div className="card-header">
                        Settings
                    </div>
                    <div className="card-body">
                        <div>
                            Mid Layers count:
                            <Slider railStyle={orangeBg} trackStyle={orangeBg} dotStyle={dotStyle} handleStyle={handleStyle}
                                    min={2} max={4} dots={true} marks={{2:2, 3:3, 4:4}}
                                    value={numLayers} onChange={handleSliderChange} />
                        </div>
                        <div className="my-4">
                            Current epoch: {status}
                                <button className="btn btn-outline-orange mx-2" onClick={handleMinus}>-</button>
                                <button className="btn btn-outline-orange mx-2" onClick={handlePlus}>+</button>
                        </div>
                        <div className="card-footer">
                            <div>
                                <button className='btn btn-orange btn-lg' onClick={compare}>Simulation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}
 
export default Input;