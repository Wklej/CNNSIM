import ModelSet from "../Modal/Components/ModelSet";
import { useState } from "react";

const Input = ({handleModelChange, handleImageChange, setLossFunc}) => {

    const [toggleImageButton, setToggleImageButton] = useState(1)

    return ( 
        <div>
            <ModelSet modelID={1} handleModelChange={handleModelChange} handleImageChange={handleImageChange}
                        check={true} setLossFunc={setLossFunc} toggle={toggleImageButton} setToggle={setToggleImageButton} />
            <ModelSet modelID={2} handleModelChange={handleModelChange} handleImageChange={handleImageChange}
                        setLossFunc={setLossFunc} toggle={toggleImageButton} setToggle={setToggleImageButton} />
        </div>
    );
}
 
export default Input;