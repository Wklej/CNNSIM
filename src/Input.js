import { useState } from "react";

const Input = () => {

    const [value, setValue] = useState();

    const handleChange = (e) => {
        setValue(document.getElementById(e.target.id).id)
    }
    return ( 
        <div className="col">
            <input class="btn-check" type="radio" name="flexRadioDefault" id="1" onClick={(e) => handleChange(e)} />
            <label class="btn btn-outline-dark mb-2" for="1">set1</label>


            <input class="btn-check" type="radio" name="flexRadioDefault" id="2" onClick={(e) => handleChange(e)} />
            <label class="btn btn-outline-dark mb-2" for="2">set2</label>


            <input class="btn-check" type="radio" name="flexRadioDefault" id="3" onClick={(e) => handleChange(e)} />
            <label class="btn btn-outline-dark mb-2" for="3">set3</label>

            {value}
        </div>
    );
}
 
export default Input;