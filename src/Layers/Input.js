import { useState } from "react";
import ModelSet from "../Modal/Components/ModelSet";

const Input = () => {

    const [value, setValue] = useState();

    const handleChange = (e) => {
        setValue(document.getElementById(e.target.id).id)
    }


    return ( 
        <div>
            <ModelSet id={1} handleChange={handleChange} />
            <ModelSet id={2} handleChange={handleChange} />
            <ModelSet id={3} handleChange={handleChange} />
        </div>
    );
}
 
export default Input;