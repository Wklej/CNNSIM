import { useState } from "react";
import ModelSet from "../Modal/Components/ModelSet";

const Input = () => {

    const [modelValue, setModelValue] = useState();
    const [imageValue, setImageValue] = useState();

    const handleModelChange = (e) => {
        setModelValue(document.getElementById(e.target.id).id)
    }

    const handleImageChange = (e) => {
        setImageValue(document.getElementById(e.target.id).id)
    }

    return ( 
        <div>
            <ModelSet id={1} handleModelChange={handleModelChange} handleImageChange={handleImageChange} />
            <ModelSet id={2} handleModelChange={handleModelChange} handleImageChange={handleImageChange} />
            <ModelSet id={3} handleModelChange={handleModelChange} handleImageChange={handleImageChange} />
            {modelValue + " " + imageValue}
        </div>
    );
}
 
export default Input;