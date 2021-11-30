import { useState } from "react";

const Input = () => {

    const [value, setValue] = useState();

    const handleChange = (e) => {
        setValue(document.getElementById(e.target.id).id)
    }
    return ( 
        <div className="col">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="1" onClick={(e) => handleChange(e)} />
                <label class="form-check-label" for="1">
                    set1
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="2" onClick={(e) => handleChange(e)} />
                <label class="form-check-label" for="2">
                    set2
                </label>
            </div>
            {value}
        </div>
    );
}
 
export default Input;