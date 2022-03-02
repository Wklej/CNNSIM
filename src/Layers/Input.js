import ModelSet from "../Modal/Components/ModelSet";
import { useState, useContext } from "react";
import { paramContext } from "../paramContext";

const Input = ({handleModelChange, handleImageChange, setLossFunc, resetSliderValue,
                handlePlus, handleMinus, status, compare, setShowMid, setGenVals, showMid}) => {

    const [toggleImageButton, setToggleImageButton] = useState(1)
    
    const getValues = useContext(paramContext)
    const genVals = getValues(null, 'generator')
    
    const resetGenValues = () => {
        let temp = genVals

        temp = {filters: 'small', kernel_size: 3, activation: 'relu', stride: 'out', dropout: 'yes'}

        resetSliderValue()
        setGenVals(temp)
    }

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
                    <div className="card-header">Settings</div>
                    <div className="card-body">
                        <div className="btn btn-orange btn-md" onClick={() => {setShowMid(false); resetGenValues()}}>Back to Generator</div>
                        <div className="my-2">
                            Current epoch: {status}
                                <button className="btn btn-outline-orange mx-2" onClick={handleMinus}>-</button>
                                <button className="btn btn-outline-orange mx-2" onClick={handlePlus}>+</button>
                        </div>
                        <div className="card-footer">
                            <div>
                                <button className='btn btn-orange btn-lg' disabled={!showMid} onClick={compare}>Simulation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}
 
export default Input;