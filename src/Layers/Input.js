import { useState } from "react";
import ModelSet from "../Modal/Components/ModelSet";

const Input = () => {

    const [modelValue, setModelValue] = useState(1);
    const [imageValue, setImageValue] = useState(1);

    const handleModelChange = (e) => {
        setModelValue(document.getElementById(e.target.id).id)
    }

    const handleImageChange = (e) => {
        setImageValue(document.getElementById(e.target.id).id)
    }

    return ( 
        <div>
            <ModelSet modelID={1} handleModelChange={handleModelChange} handleImageChange={handleImageChange} />
            <ModelSet modelID={2} handleModelChange={handleModelChange} handleImageChange={handleImageChange} />
            <ModelSet modelID={3} handleModelChange={handleModelChange} handleImageChange={handleImageChange} />
            {modelValue + " " + imageValue}
        </div>
    );
}
 
export default Input;